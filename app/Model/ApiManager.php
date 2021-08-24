<?php


namespace App\Model;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Nette\Caching\Cache;
use Nette\Http\Session;
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


    public function __construct(applCache $cache)
    {
        $this->cache = $cache;
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
     * Volam pro ziskani cen - metoda jako pro TWP web
     * @param $vehicleId
     * @param $stat
     * @return mixed|null
     * @throws Throwable
     */
    public function getTowpointPrices($vehicleId, $stat = 'CZ')
    {
        $log = 'remote.towpointPrices';
        $cacheKey = $log.'.'.$vehicleId.'.'.$stat;
        $token = self::countApiToken([$vehicleId, $stat]);
        $uri = '/remote-cars/get-vehicle-tow-point-prices/?carId='.$vehicleId.'&stat='.$stat.'&secret='.$token;
        return $this->solveVapolResponse($uri, $cacheKey, $log);
    }




}