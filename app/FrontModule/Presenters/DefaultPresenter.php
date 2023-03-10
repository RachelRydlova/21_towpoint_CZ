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
use Contributte\Translation\Translator;



class DefaultPresenter extends BasePresenter
{
    /** @var BannerModel @inject */
    public $bannerModel;

    /** @var ApiManager @inject */
    public $apiManager;

    /** @var applCache @inject */
    public $cache;
    private ContactFormFactory $contactFormFactory;

    /** @var Translator @inject */
    public $translator;


    public function __construct(ContactFormFactory $contactFormFactory)
    {
        $this->contactFormFactory = $contactFormFactory;
    }


    /**
     * formular pro vyber vozu
     * @return CarSelector
     */
    protected function createComponentCarSelector()
    {
        $comp = new CarSelector($this->apiManager, $this->session);
        $p = $this;
        $comp->onSuccess[] = function ($carInfo) use ($p) {
            if ($carInfo['comfort'] == null) $carInfo['comfort'] = 0;
            $p['calculator']->setPrice($carInfo['vehicleId'], $carInfo['comfort'], $carInfo['isUni']);
            Debugger::log(print_r($carInfo,true),'selectedCar');
            $p->getPayload()->vehicleId = $carInfo['vehicleId'];
        };
        return $comp;
    }


    /**
     * konfigurator s kalkulackou
     * @return Calculator
     */
    protected function createComponentCalculator($vehicleId){
         return new Calculator($this->apiManager, $this->session);
    }

    /**
     * odeslani objednavky s kontaktnimi udaji i informacemi o zvolenem voze
     * posila se i jako kontaktni formular z webu
     * @return OrderForm
     */
    protected function createComponentOrderForm(){
        $comp = new OrderForm($this->apiManager, $this->session);
        $p = $this;
        $comp->onSuccess[] = function ($contact) use ($p) {

            $ip = $p->getHttpRequest()->getRemoteAddress();
            $type = $contact->type;
            $manufacturer = $p->session->getSection('carSection')->manufacturer;
            $model = $p->session->getSection('carSection')->model;
            $vehicle = $p->session->getSection('carSection')->vehicle;
            $comfort = $p->session->getSection('carSection')->comfort;
            $isUni = $p->session->getSection('carSection')->isUni;
            $isUni = $isUni == null ? 0 : 1;
            $preference = $p->session->getSection('calculator')->preferencies;
            Debugger::log($preference, 'preference');

            // kontrola typu pozadavku
            if ($type == 1 && !$preference) {
                // pokud nejsou vyplneny preference, nesmi se odeslat
                $this->flashMessage($this->translator->translate('messages.flash.fillPreferencies'));
                $this->redirect('Default:');
            }
            elseif ($type != 1) {
                // pokud nejde o beznou poptavku osobniho auta, tak doplnim preference defaultne, aby se pozadavek odeslal
                $preference = ['0', '0', '0', '0'];
            }
            Debugger::log($preference, 'preferencePoKontrole');

            $carInfo = ['manufacturerId' => $manufacturer, 'modelId' => $model, 'vehicleId'=> $vehicle,
                'comfort'=> $comfort, 'pref'=> $preference[0], 'koule'=> $preference[1], 'el'=> $preference[2], 'ip' => $ip, 'isUni' => $isUni];

            if (!empty($carInfo)) {
                $dataToReva = ['contact' => $contact, 'carInfo' => $carInfo];
                $p->apiManager->sendDataToApi($dataToReva);
            }

            $p->redrawControl('ordForm');
            $p->redirect('Default:thanks');
        };

        // pri zadani emailu odesilam podklady k spusteni prefinal requestu
        $comp->onMailSuccess[] = function ($email) use ($p) {
            $email = $p->session->getSection('contact')->email;
            $p->apiManager->sendPreRequest($email);

        };
        return $comp;
    }


    /**
     * kontaktni formular
     * @return Form
     */
    protected function createComponentContactForm(): Form
    {
        $p = $this;
        return $p->contactFormFactory->create(function () use ($p): void {
            $p->redirect('Default:thanksContact');
        });
    }

    public function actionKaravany(): void
    {
        $this['contactForm']['type']->setDefaultValue(2);
    }

    public function actionVoziky(): void
    {
        $this['contactForm']['type']->setDefaultValue(3);
    }


    /**
     * @throws \Throwable
     */
    public function actionDefault(): void
    {

        $this['contactForm']['type']->setDefaultValue(1);

        //dotahnu data ze session
        $vehicleItems = [];

        // Zde ukladam SESSION
        $params = $this->request->getParameters();
        if (isset($params['carSelector-manId'])) {
            $this->session->getSection('carSection')->manufacturer = $params['carSelector-manId'];
            $this->session->getSection('carSection')->model  = null;
            $this->session->getSection('carSection')->vehicle = null;
        }
        if (isset($params['carSelector-modId'])) {
            $this->session->getSection('carSection')->model = $params['carSelector-modId'];
            $this->session->getSection('carSection')->vehicle = null;
        }
        if (isset($params['carSelector-vehicleId'])) {
            $this->session->getSection('carSection')->vehicle = $params['carSelector-vehicleId'];
        }

        $kom = $this->session->getSection('carSection')->komfort;
        $modId = $this->session->getSection('carSection')->model;
        $vehicleId = $this->session->getSection('carSection')->vehicle;

        Debugger::log($this->request->getParameters(), 'params');

        if (!$this->isAjax()) {
            $this['carSelector']->handleSetModel($modId);
            if ($vehicleId) {
                $this['carSelector']->handleSaveData($vehicleId, $kom);
                $this->template->carSelect = true;
            }
        }
    }


    public function renderDefault(){


     // data pro banner
        $b = $this->bannerModel->getBannerData();
        $this->template->b = $b[0];
        $this->template->format = $b[1];
    }

    public function renderAkce()
    {
        // data z banner
        $this->template->b = $this->bannerModel->getBannerData();
    }

    public function renderAbout()
    {
        $data = $this->apiManager->getVendorsData();

        if ($data) {
            // Mam pole objektu ApiVendor[]
            foreach ($data as $vendorContext) {
                $nazev = $vendorContext->nazev;
            }
        }
        bdump($data, 'dataMapy');
        $this->template->mapData = $data;
//        $this->terminate();
    }

    public function renderNosiceMul()
    {
        $this->template->data = $this->apiManager->getNosiceByVyrobceKategorie();
    }
    public function renderNosiceBuzz()
    {
        $this->template->data = $this->apiManager->getNosiceByVyrobceKategorie('BUZZRACK');
    }
    public function renderNosiceWest()
    {
        $this->template->data = $this->apiManager->getNosiceByVyrobceKategorie('Westfalia-Automotive');
    }
    public function renderNosiceYak()
    {
        $this->template->data = $this->apiManager->getNosiceByVyrobceKategorie('Yakima');
    }

    public function render()
    {
        $this->template->setTranslator($this->translator);
    }
}
