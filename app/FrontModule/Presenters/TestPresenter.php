<?php

declare(strict_types=1);

namespace App\FrontModule\Presenters;

use App\FrontModule\components\Calculator;
use App\FrontModule\components\CarSelector;
use App\FrontModule\components\OrderForm;
use App\ICarSelectorFactory;
use App\Model\applCache;
use App\FrontModule\Forms\ContactFormFactory;
use Nette\Application\UI\Control;
use Nette\Application\UI\Form;
use App\Model\BannerModel;
use App\Model\ApiManager;
use Tracy\Debugger;


/**
 * Class TestPresenter
 * @package App\FrontModule\Presenters
 */
class TestPresenter extends BasePresenter
{


    /** @var ApiManager @inject */
    public $apiManager;

    /** @var applCache @inject */
    public $cache;


    /**
     * @throws \Throwable
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @throws \Nette\Application\AbortException
     */
    public function actionTestVendors()
    {
        $data = $this->apiManager->getVendorsData();
        bdump($data, 'vendorsData');

        if ($data) {
            // Mam pole objektu ApiVendor[]
            foreach ($data as $vendorContext) {
                $nazev = $vendorContext->nazev;
            }
        }

        $this->terminate();
    }


    /**
     * @param $id
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @throws \Throwable
     */
    public function handleLoadVendorDetail($id)
    {
        $vendors = $this->apiManager->getVendorsData();
        if ($vendors && array_key_exists($id, $vendors)) {
            $this->template->vendorInfo = $vendors[$id];
            $this->redrawControl('snippet');
            Debugger::barDump($vendors);
        } else {
            // chyba
        }
    }


}
