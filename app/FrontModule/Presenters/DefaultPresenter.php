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
            Debugger::barDump($carInfo);
        };

//        $selMan = $this->session->getSection('carSection')->manufacturer;
//        $selMod = $this->session->getSection('carSection')->model;
//        $this['carSelector']['form']['manufacturer']->setDefaultValue($selMan);
//        Debugger::barDump($selMod, 'zvoleneAutoVComponente');

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
            $manufacturer = $p->session->getSection('carSection')->manufacturer;
            $model = $p->session->getSection('carSection')->model;
            $vehicle = $p->session->getSection('carSection')->vehicle;
            $comfort = $p->session->getSection('carSection')->comfort;
            $preference = $p->session->getSection('calculator')->preferencies;

            $carInfo = ['manufacturerId' => $manufacturer, 'modelId' => $model, 'vehicleId'=> $vehicle,
                'comfort'=> $comfort, 'pref'=> $preference[0], 'koule'=> $preference[1], 'el'=> $preference[2]];
//            Debugger::barDump($carInfo, 'InfoCoPosilamZOrderFormu');
            $dataToReva = ['contact' => $contact, 'carInfo' => $carInfo];
            $this->apiManager->sendDataToApi($dataToReva);
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
            ->setRequired('Vyplňte svoji e-mailovou adresu ve správném formátu.');
        $form->addText('message')
            ->setHtmlAttribute('placeholder', 'Vzkaz')
            ->setRequired('Vyplňte vzkaz.');
        $form->addSubmit('send', 'Odeslat')
            ->setHtmlAttribute('class', 'cta');
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
        $this->flashMessage('Zpráva byla úspěšně odeslána.', 'success');
        $this->apiManager->getPartnerData($data);
        $this->redirect('this');
    }

    public function actionDefault()
    {

//        $this->template->selMan = $this->session->getSection('carSelector')->manufacturer;
    }


    public function renderDefault(){
        // data pro banner
        $this->template->b = $this->bannerModel->getBannerData();
    }

}
