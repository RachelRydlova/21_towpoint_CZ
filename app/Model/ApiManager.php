<?php


namespace App\Model;

use Cassandra\Tinyint;
use Doctrine\Common\Util\Debug;
use GuzzleHttp\Client;
use http\Env\Request;
use Nette\Http\Response;
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



    function get_secret($params)
    {
        $hour = date('H');
        $paramsString = implode(':', $params);
        $token = urlencode(base64_encode(hash_hmac('sha1', $hour.$paramsString, 'VapolIT', true)));
//		$token=12345;
        return($token);
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
    public function getCarManufacturers($onlyFav = 0)
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
    public function getManufacturerApiRow($manId, $onlyFav = 0)
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
     * @throws GuzzleException
     */
    public function sendDataToApi($dataToReva)
    {
        if ($dataToReva == null || $dataToReva == 0) {
            die();
        } else {


            Debugger::log($dataToReva, 'dataPoslaneDoApiManageru');
            // vytahnu info o znacce
            $secret = self::countApiToken(array('onlyFavorities' => '0'));
            $url = 'https://www.vapol.cz/remote-cars/manufacturers?onlyFavorities=0&secret=' . $secret;
            $data = json_decode(file_get_contents($url));
            $znacky = $data->data;

            if ($dataToReva['carInfo']) {

                $manufacturerId = Arrays::get($dataToReva, ['carInfo', 'manufacturerId']);
                if (is_array($znacky)) foreach ($znacky as $item) if ($manufacturerId == $item->tcznacka) $outznacka = $item->name;
                if (!isset($outznacka)) {
                    $outznacka = "";
                }

                // vytahnu info o modelu
                $secret = self::countApiToken(array('tcznacka' => $manufacturerId));
                $url = 'https://www.vapol.cz/remote-cars/models-by-manufacturer?tcznacka=' . $manufacturerId . '&secret=' . $secret;
                $data = json_decode(file_get_contents($url));
                $modely = $data->data;
                $modelId = Arrays::get($dataToReva, ['carInfo', 'modelId']);
                if (is_array($modely)) foreach ($modely as $item) if ($modelId == $item->tcmodel) $outmodel = $item->fullname;

                // vytahnu info o motoru
                $motory = array();
                $secret = self::countApiToken(array('tcmodel' => $modelId));
                $url = 'https://www.vapol.cz/remote-cars/vehicles-by-model/?tcmodel=' . $modelId . '&secret=' . $secret;
                $data = json_decode(file_get_contents($url));
                $motory0 = (array)$data->data;
                if (is_array($motory0)) foreach ($motory0 as $typ => $item) {
                    foreach ($item as $item0) $motory[] = $item0;
                }
                $ismotory = (count($motory) > 0);
                $vehicleId = Arrays::get($dataToReva, ['carInfo', 'vehicleId']);
                foreach ($motory as $item) if ($vehicleId == $item->vozidlo_id) $outmotor = $item->fullname;


                // vytahuji informaci, zda byl zvolen komfort
                $comfort = Arrays::get($dataToReva, ['carInfo', 'comfort']);


                // nastavim spravne stat
                $state = $dataToReva['contact']['state'];
                if ($state == 1) {
                    $state = 'SK';
                } else {
                    $state = 'CZ';
                }

                // preference Cena x Kvalita
                $pref = Arrays::get($dataToReva, ['carInfo', 'pref']);
                if ($pref === 0) {
                    $pref = 'kvalita';
                } else {
                    $pref = 'cena';
                }

                // koule Pevne x Odnimatelne
                $koule = Arrays::get($dataToReva, ['carInfo', 'koule']);
                if ($koule == 1) {
                    $koule = 'odnimatelne';
                } else {
                    $koule = 'pevne';
                }

                // elektrika 7pin x 13pin
                $el = Arrays::get($dataToReva, ['carInfo', 'el']);
                if ($el == 0 || '') {
                    $el = '7pin';
                } else {
                    $el = '13pin';
                }
                $e = Arrays::get($dataToReva, ['carInfo', 'el']);
                if ($e == 0 || '') {
                    $e = 'E7';
                } else {
                    $e = 'E13';
                }


                $url = 'https://www.vapol.cz/remote-cars/get-vehicle-tow-point-prices/?carId=' . $vehicleId . '&comfort=' . ($comfort + 0) . '&stat=CZ|SK';
                $data = json_decode(file_get_contents($url));

                $out = $data->data;
                $tazne = $out->{$pref}->{$koule}->tazne;
                if (!isset($tazne)) {
                    $tazne = 0;
                }
                $ele = $out->{$pref}->{$koule}->elektro->{$e};
                $el0 = $out->{$pref}->{$koule};
                if (!$el0) {
                    $el0 = 0;
                }
                $montaz = $el0->{'montaz_cena_' . str_replace('pin', '', $el) . '_dph'};
            }
        }


        $url='https://reva.vapol.cz/api/api/request-tow-point/?token='.self::get_secret([]);
//        $url='http://reva.local/api/api/request-tow-point/?token='.self::get_secret([]);

        $pole=array(
            'session_id'=> $this->session->getId(),
            'final_request'=> 1,
            'znacka'=>$outznacka ?? 'nezadano',
            'manufacturer_id'=>$manufacturerId ?? 0,
            'model'=>$outmodel ?? 0,
            'model_id'=>$modelId ?? 0,
            'motor'=>$outmotor ?? 0,
            'vehicle_id'=>$vehicleId ?? 0,
            'notes'=>$dataToReva['contact']['note'],
            'name'=>$dataToReva['contact']['name'],
            'surname'=>$dataToReva['contact']['surname'],
            'email'=>$dataToReva['contact']['email'],
            'tel'=>$dataToReva['contact']['tel'],
            'psc'=>$dataToReva['contact']['psc'],
            'mesto'=>$dataToReva['contact']['mesto'],
            'stat'=>$state ?? 'CZ',
            'kvalita'=>$pref ?? 0,
            'typ_tazne'=>$koule ?? '',
            'tazne'=> $tazne->id_nomenklatura ?? 0,
            'tazne_cena'=> $tazne->price_moc_dph ?? 0,
            'typ_elektrika'=>$e ?? 0,
            'elektrika'=> $ele->id_nomenklatura ?? 0,	// kod produktu - nomenklatura
            'elektrika_cena'=> $ele->price_moc_dph ?? 0,
            'montaz_cena'=> $montaz ?? 0,
            'comfort'=>$comfort ?? 0,
            'request_type' => $dataToReva['contact']['type'] ?? 1
        );

        $client = new Client();
        $response = $client->request('POST', $url, [
                'form_params' => $pole
            ]
        );
        Debugger::log($url, 'urlOdeslanehoApi');
        Debugger::log($pole, 'dataOdeslaneNaApi');
        $data = (json_decode($response->getBody()->getContents()));
        Debugger::log(print_r($data,true),'finalRequest');
//        die();
    }


    /**
     * @param $email
     */
    public function sendPreRequest($email)
    {
        $url='https://reva.vapol.cz/api/api/request-tow-point/?token='.self::get_secret([]);
        // na local nejde posilat z duvodu odlisnych PHP verzi
//        $url='http://reva.local/api/api/request-tow-point/?token='.self::get_secret([]);

        $data=array(
            'session_id'=> $this->session->getId(),
            'final_request'=> 0,
            'email'=>$email,
            'znacka'=> 'prefinal',
        );

        $client = new Client();
        $response = $client->request('POST', $url, [
                'form_params' => $data
            ]
        );

        bdump([$url, $data], 'url a data - prefinalRequest');
        $data = (json_decode($response->getBody()->getContents()));
        Debugger::log(print_r($data,true),'prefinalRequest');
        die();
    }
}