<?php

declare(strict_types=1);

namespace App\FrontModule\Presenters;

use App\FrontModule\components\Calculator;
use App\FrontModule\components\CarSelector;
use App\FrontModule\components\OrderForm;
use App\ICarSelectorFactory;
use App\Model\applCache;
use App\Presenters\BasePresenter;
use Doctrine\Common\Util\Debug;
use Nette\Application\UI\Form;
use App\Model\BannerModel;
use App\Model\ApiManager;
use Nette\Http\Session;
use Tracy\Debugger;



class DefaultPresenter extends BasePresenter
{
    /** @var BannerModel @inject */
    public $bannerModel;

    /** @var ApiManager @inject */
    public $apiManager;

    /** @var applCache @inject */
    public $cache;

    /** @var ICarSelectorFactory @inject */
    public $carSelectorFactory;


    /**
     * formular pro vyber vozu
     * @return CarSelector
     */
     protected function createComponentCarSelector()
     {
        $comp = new CarSelector($this->apiManager, $this->session);
        $p = $this;
        $comp->onSuccess[] = function ($carInfo) use ($p) {
            $p['calculator']->setPrice($carInfo['vehicleId'], $carInfo['comfort']);
//            Debugger::barDump($carInfo);
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
     * @return OrderForm
     */
    protected function createComponentOrderForm(){
        $comp = new OrderForm($this->apiManager, $this->session);
        $p = $this;
        $comp->onSuccess[] = function ($contact) use ($p) {
            bdump($contact, 'coPosilamZOrderFormu');
            $manufacturer = $p->session->getSection('carSection')->manufacturer;
            $model = $p->session->getSection('carSection')->model;
            $vehicle = $p->session->getSection('carSection')->vehicle;
            $comfort = $p->session->getSection('carSection')->comfort;
            $preference = $p->session->getSection('calculator')->preferencies;
            $email = $p->session->getSection('contact')->email;

            $carInfo = ['manufacturerId' => $manufacturer, 'modelId' => $model, 'vehicleId'=> $vehicle,
                'comfort'=> $comfort, 'pref'=> $preference[0], 'koule'=> $preference[1], 'el'=> $preference[2]];
            $dataToReva = ['contact' => $contact, 'carInfo' => $carInfo];
            $this->apiManager->sendDataToApi($dataToReva);
            $this->apiManager->sendPreRequest($email);
        };
        return $comp;
    }

    /**
     * formular do sekce "pro partnery"
     * @return Form
     */
    protected function createComponentPartnerForm(): Form
    {
        $form = new Form;
        $form->addText('name')
            ->setHtmlAttribute('placeholder', 'Jméno')
            ->setRequired('Vyplňte prosím své jméno');
        $form->addText('surname')
            ->setHtmlAttribute('placeholder', 'Příjmení')
            ->setRequired('Vyplňte prosím své příjmení');
        $form->addText('position')
            ->setHtmlAttribute('placeholder', 'Pozice');
        $form->addText('company')
            ->setHtmlAttribute('placeholder', 'Název firmy');
        $form->addText('city')
            ->setHtmlAttribute('placeholder', 'Město');
        $form->addText('zipcode')
            ->setHtmlAttribute('placeholder', 'PSČ');
        $form->addEmail('email')
            ->setHtmlAttribute('placeholder', 'E-mail')
            ->setHtmlType('email')
            ->setRequired('Vyplňte svoji e-mailovou adresu ve správném formátu.')
            ->setOption('description', 'Vyplňte svoji e-mailovou adresu ve správném formátu.');
        $form->addText('message')
            ->setHtmlAttribute('placeholder', 'Vzkaz')
            ->setRequired('Vyplňte vzkaz.')
            ->setHtmlAttribute('class', 'last');

        $form->addSubmit('send', 'Odeslat')
            ->setAttribute('class', 'cta');
        $form->onSuccess[] = [$this, 'PartnerFormSucceeded'];
        return $form;
    }

    /**
     * @param Form $form
     * @param $data
     * @throws Nette\Application\AbortException
     */
    public function partnerFormSucceeded(Form $form, $data): void
    {
        $this->apiManager->sendPartnerData($data);
        bdump($data, 'dataVPartnerFormSucceeded');
        $this->redirect('this');
    }

    /**
     * @throws \Throwable
     */
    public function actionDefault(): void
    {
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
        // data pro banner
        $this->template->b = $this->bannerModel->getBannerData();
    }

}
