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



class DefaultPresenter extends BasePresenter
{
    /** @var BannerModel @inject */
    public $bannerModel;

    /** @var ApiManager @inject */
    public $apiManager;

    /** @var applCache @inject */
    public $cache;
    private ContactFormFactory $contactFormFactory;


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
            if ($carInfo['comfort'] == '') $carInfo['comfort'] = 0;
            $p['calculator']->setPrice($carInfo['vehicleId'], $carInfo['comfort']);
            Debugger::log(print_r($carInfo,true),'selectedCar');
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
            $manufacturer = $p->session->getSection('carSection')->manufacturer;
            $model = $p->session->getSection('carSection')->model;
            $vehicle = $p->session->getSection('carSection')->vehicle;
            $comfort = $p->session->getSection('carSection')->comfort;
            $preference = $p->session->getSection('calculator')->preferencies;



            // defaultne nastavim preference
            if (!$preference) {
                $preference = ['0', '0', '0', '0'];
            }

            $carInfo = ['manufacturerId' => $manufacturer, 'modelId' => $model, 'vehicleId'=> $vehicle,
                'comfort'=> $comfort, 'pref'=> $preference[0], 'koule'=> $preference[1], 'el'=> $preference[2]];
            $dataToReva = ['contact' => $contact, 'carInfo' => $carInfo];

            $p->apiManager->sendDataToApi($dataToReva);
            Debugger::log(print_r($dataToReva,true),'dataToApiManager');

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

        Debugger::barDump($this->request->getParameters(), 'params');

        if (!$this->isAjax()) {
            $this['carSelector']->handleSetModel($modId);
            if ($vehicleId) {
                $this['carSelector']->handleSaveData($vehicleId, $kom);
                $this->template->carSelect = true;
            }
        }
    }


    public function renderDefault(){
        //facebook pixel
        $fbpixel = "
        <script>
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '217382757240771');
            fbq('track', 'PageView');
        </script>
        <noscript><img height=\"1\" width=\"1\" style=\"display:none\"
            src=\"https://www.facebook.com/tr?id=217382757240771&ev=PageView&noscript=1\"
        /></noscript>
        ";
        $this->template->pixel = $fbpixel;

        // google analytics
        $googleanalytics = "
        <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-3514363-11\"></script>
        <script>
                    window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-3514363-11');
        </script>
        ";
        $this->template->googleanalytics = $googleanalytics;


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

}
