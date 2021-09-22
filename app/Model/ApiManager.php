<?php


namespace App\Model;

use Doctrine\Common\Util\Debug;
use GuzzleHttp\Client;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Nette\Application\AbortException;
use Nette\Caching\Cache;
use Nette\Http\Session;
use Nette\Utils\Arrays;
use Tracy\Debugger;
use App\Model\applCache;

/**
 * Class ApiManager
 * @package App\Model
 */

class ApiManager
{


    public const VAPOL_BASE_URI = 'https://vapol.cz';
    public CONST SECRET_KEY = 'VapolIT';

    /**
     * @param \App\Model\applCache $cache
     * @param Session $session
     */
    public function __construct(applCache $cache, Session $session)
    {
        $this->cache = $cache;
        $this->session = $session;
    }





    /**
     * Vypocita token api pozadavku
     * @param array $params
     * @return string
     */
    public static function countApiToken(array $params = []): string
    {
        $hour = date('H');
        $paramsString = implode(':', $params);
        return urlencode(base64_encode(hash_hmac('sha1', $hour.$paramsString, self::SECRET_KEY, true)));
    }


    /**
     * @param $baseUri
     * @return Client
     */
    private function getRestClient($baseUri): Client
    {
        $config = ['base_uri' => $baseUri];
        return new Client($config);
    }

    /**
     * Spolecna metoda pro VAPOL API
     * @param $url
     * @param $cacheKey
     * @param null $log
     * @param string $method
     * @param string $expiration
     * @return mixed|null
     */
    private function solveVapolResponse($url, $cacheKey, $log = null, $method = 'GET', $expiration = '5 days')
    {
        if ($load = $this->cache->load($cacheKey)) {
            return $load;
        }

        $log = $log ?? $cacheKey;
        $client = $this->getRestClient(self::VAPOL_BASE_URI);

        // Pocitame token
        try {
            Debugger::log($url, 'remote.url');
            $response = $client->request($method, $url);
            if ((int) $response->getStatusCode() !== 200) {
                throw new Exception('error');
            }
            //return json_encode($response->getBody())->data;
            $data = \GuzzleHttp\json_decode($response->getBody()->getContents());
            if (!isset($data->data)) {
                throw new Exception('Neexistuje obrázek pro dané auto');
            }
        } catch (GuzzleException $e) {
            Debugger::log($e, $log);
            return null;
        } catch (Exception $e) {
            Debugger::log($e, $log);
            return null;
        }
        $this->cache->save($cacheKey, $data->data, [Cache::EXPIRATION => $expiration]);
        return $data->data;
    }

    /**
     * Obrazek modelu podle tcmodel
     * @param $modelId
     * @return string|null
     * @throws Throwable
     */
    public function getModelImage($modelId): ?string
    {
        $cacheKey = 'remote.getModelImage.'.$modelId;
        $token = self::countApiToken([$modelId]);
        $uri = '/remote-cars/get-model-image/?modelid='.$modelId.'&secret='.$token;
        return $this->solveVapolResponse($uri, $cacheKey);
    }


    /**
     * Značky aut
     * @param int $onlyFav
     * @return mixed|null
     * @throws Throwable
     */
    public function getCarManufacturers($onlyFav = 1)
    {
        $cacheKey = 'remote.manufacturers.'.$onlyFav;
        $token = self::countApiToken([$onlyFav]);
        $uri = '/remote-cars/manufacturers/?onlyFavorities='.$onlyFav.'&secret='.$token;
        return $this->solveVapolResponse($uri, $cacheKey);
    }


    /**
     * Modely podle znacky
     * @param $manId
     * @return mixed|null
     * @throws Throwable
     */
    public function getCarManufacturerModels($manId)
    {
        $log = 'remote.modelsByManucturer';
        $cacheKey = $log.'.'.$manId;
        $token = self::countApiToken([$manId]);
        $uri = '/remote-cars/models-by-manufacturer/?tcznacka='.$manId.'&secret='.$token;
        return $this->solveVapolResponse($uri, $cacheKey, $log);
    }


    /**
     * Auta podle modelu
     * @param $modId
     * @return mixed|null
     * @throws Throwable
     */
    public function getCarModelVehicles($modId)
    {
        $log = 'remote.vehiclesByModel';
        $cacheKey = $log.'.'.$modId;
        $token = self::countApiToken([$modId]);
        $uri = '/remote-cars/vehicles-by-model/?tcmodel='.$modId.'&secret='.$token;
        return $this->solveVapolResponse($uri, $cacheKey, $log);
    }


    /**
     * @param $manId
     * @param int $onlyFav
     * @return mixed|null
     * @throws Throwable
     */
    public function getManufacturerApiRow($manId, $onlyFav = 1)
    {
        $data = $this->getCarManufacturers($onlyFav);
        foreach ($data as $row) {
            if ((int) $row->tcznacka === (int) $manId) {
                return $row;
            }
        }
        return null;
    }


    /**
     * @param $manId
     * @param $modId
     * @return mixed|null
     * @throws Throwable
     */
    public function getModelApiRow($manId, $modId)
    {
        $data = $this->getCarManufacturerModels($manId);
        foreach ($data as $row) {
            if ((int) $row->tcmodel === (int) $modId) {
                return $row;
            }
        }
        return null;
    }


    /**
     * @param $modId
     * @param $vehicleId
     * @return mixed|null
     * @throws Throwable
     */
    public function getVehicleApiRow($modId, $vehicleId)
    {
        $data = $this->getCarModelVehicles($modId);
        foreach ($data as $grouped) {
            foreach ($grouped as $row) {
                if ((int) $row->vozidlo_id === (int) $vehicleId) {
                    return $row;
                }
            }
        }
        return null;
    }


    /**
     * Volam pro ziskani cen
     * @param $vehicleId
     * @param $comfort
     * @param $stat
     * @return mixed|null
     * @throws Throwable
     */
    public function getTowpointPrices($vehicleId, $comfort, $stat = 'CZ')
    {
        $log = 'remote.towpointPrices';
        // do cache si posilam i komfort, prepise to hodnotu komfort a cenu montaze, zpet se poslou vsechny ceny
        $cacheKey = $log.'.'.$vehicleId.'.'.$comfort.'.'.$stat;
        $token = self::countApiToken([$vehicleId, $stat]);
        // v pripade, ze je komfort prazdny
        if ( empty($comfort) ) $comfort = 0;
        $uri = '/remote-cars/get-vehicle-tow-point-prices/?carId='.$vehicleId.'&comfort='.$comfort.'&stat='.$stat.'&secret='.$token;
        return $this->solveVapolResponse($uri, $cacheKey, $log);

    }



    /**
     * posilani vsech zvolenych dat o autu a kontakt do API na revu
     * @param $dataToReva
     */
    public function sendDataToApi($dataToReva)
    {
//        // vytahnu data z kontaktniho formulare
//        $contactData = Nette\Utils\ArrayHash::from($dataToReva['contact']);
//
////        $contactData= (toArray($dataToReva['contact']));
//        Debugger::barDump($contactData, ' contactData');


        // vytahnu info o znacce
        $secret = self::countApiToken(array('onlyFavorities'=>'1'));
        $url='https://www.vapol.cz/remote-cars/manufacturers?onlyFavorities=1&secret='.$secret;
        $data=json_decode(file_get_contents($url));
        $znacky=$data->data;
        $manufacturerId = Arrays::get($dataToReva, ['carInfo', 'manufacturerId']);
        foreach ($znacky as $item) if ($manufacturerId==$item->tcznacka) $outznacka=$item->name;


        // vytahnu info o modelu
        $secret = self::countApiToken(array('tcznacka'=>$manufacturerId));
        $url='https://www.vapol.cz/remote-cars/models-by-manufacturer?tcznacka='.$manufacturerId.'&secret='.$secret;
        $data=json_decode(file_get_contents($url));
        $modely=$data->data;
        $modelId = Arrays::get($dataToReva, ['carInfo', 'modelId']);
        if (is_array($modely)) foreach ($modely as $item) if ($modelId==$item->tcmodel) $outmodel=$item->fullname;

        // vytahnu info o motoru
        $motory=array();
        $secret= self::countApiToken(array('tcmodel'=>$modelId));
        $url='https://www.vapol.cz/remote-cars/vehicles-by-model/?tcmodel='.$modelId.'&secret='.$secret;
        $data=json_decode(file_get_contents($url));
        $motory0=(Array)$data->data;
        if (is_array($motory0)) foreach ($motory0 as $typ=>$item)
        {
            foreach ($item as $item0) $motory[]=$item0;
        }
        $ismotory=(count($motory)>0);
        $vehicleId = Arrays::get($dataToReva, ['carInfo', 'vehicleId']);
        foreach ($motory as $item) if ($vehicleId==$item->vozidlo_id) $outmotor=$item->fullname;


        // nastavuji prozatim defaultne komfort na false
        $komfort = false;


        $url='https://www.vapol.cz/remote-cars/get-vehicle-tow-point-prices/?carId='.$vehicleId.'&comfort='.($komfort+0).'&stat=CZ|SK';
        $data=json_decode(file_get_contents($url));

        $prevod['qnormal']='cena';
        $prevod['qbest']='kvalita';

        $prevod['7pin']='E7';
        $prevod['13pin']='E13';

        $out=$data->data;
//        $tazne=$out->{$prevod[$_SESSION['form_data']['kvalita']]}->{$_SESSION['form_data']['koule']}->tazne;
//        $el=$out->{$prevod[$_SESSION['form_data']['kvalita']]}->{$_SESSION['form_data']['koule']}->elektro->{$prevod[$_SESSION['form_data']['el']]};
//        $el0=$out->{$prevod[$_SESSION['form_data']['kvalita']]}->{$_SESSION['form_data']['koule']};

        $pole=array(
            'znacka'=>$outznacka,
            'manufacturer_id'=>$manufacturerId,
            'model'=>$outmodel,
            'model_id'=>$modelId,
            'motor'=>$outmotor,
            'vehicle_id'=>$vehicleId,
            'notes'=>$dataToReva['contact']->note,
            'name'=>$dataToReva['contact']->name,
            'surname'=>$dataToReva['contact']->surname,
            'email'=>$dataToReva['contact']->email,
            'tel'=>$dataToReva['contact']->tel,
            'psc'=>$dataToReva['contact']->psc,
            'mesto'=>$dataToReva['contact']->mesto,
            'stat'=>$dataToReva['contact']->state,
//            'typ_tazne'=>$_SESSION['form_data']['koule'],
//            'tazne'=>$tazne->id_nomenklatura,	// kod produktu - nomenklatura
//            'tazne_cena'=>$tazne->price_moc_dph,
//            'typ_elektrika'=>$_SESSION['form_data']['el'],
//            'elektrika'=>$el->id_nomenklatura,	// kod produktu - nomenklatura
//            'elektrika_cena'=>$el->price_moc_dph,
//            'montaz_cena'=>$el0->{'montaz_cena_'.str_replace('pin','',$_SESSION['form_data']['el']).'_dph'}/*+$tazne->montaz_dph*/,
//            'comfort'=>$_SESSION['komfort']+0
            );

       // $url='https://reva.vapol.cz/api/api/request-tow-point/'.$rqid.'?token='.self::countApiToken(array($rqid));

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, ($pole));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        //	curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        $html = curl_exec($ch);
        //	$info = curl_getinfo($ch,CURLINFO_HEADER_OUT);
        curl_close ($ch);

        $pole=json_decode($html);
//		d($pole);




    }





}