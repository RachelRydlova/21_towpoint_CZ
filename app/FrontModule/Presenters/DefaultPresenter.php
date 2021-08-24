<?php

declare(strict_types=1);

namespace App\FrontModule\Presenters;

use App\FrontModule\components\Calculator;
use App\FrontModule\components\CarSelector;
use App\FrontModule\components\ContactForm;
use App\ICarSelectorFactory;
use App\Model\applCache;
use App\Presenters\BasePresenter;
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
//         $section = $this->getSession('manufacturer');
//         $selMan = $section->selMan;
//
//
        return new CarSelector($this->apiManager);
    }


    /**
     * konfigurator s kalkulackou
     * @return Calculator
     */
    protected function createComponentCalculator(){
         return new Calculator();
    }

    /**
     * kontaktni formular
     * @return ContactForm
     */
    protected function createComponentContactForm(){
         return new ContactForm();
    }


    /**
     * test vypsani dat vozidel
     */
    public function actionDefault()
    {
        Debugger::barDump($this->apiManager->getCarManufacturers(14), 'carData');
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
            ->setHtmlAttribute('placeholder', 'PSČ')
            ->addRule($form::MIN_LENGTH, 'PSČ musí být zapsána bez mezer.', 6);
        $form->addEmail('email')
            ->setHtmlAttribute('placeholder', 'E-mail')
            ->setHtmlType('email')
            ->setRequired('Vyplňte svoji e-mailovou adresu ve správném formátu.');
        $form->addText('message')
            ->setHtmlAttribute('placeholder', 'Vzkaz')
            ->setRequired('Vyplňte vzkaz.');
        $form->addSubmit('send', 'Odeslat');
        $form->onSuccess[] = [$this, 'PartnerFormSucceeded'];

        return $form;
    }

    /**
     * @param Form $form
     * @param \stdClass $data
     * @throws Nette\Application\AbortException
     */
    public function partnerFormSucceeded(Form $form, \stdClass $data): void
    {

        // tady zpracujeme data odeslaná formulářem
        // $data->name obsahuje jméno
        // $data->surname obsahuje prijmeni
        $this->flashMessage('Zpráva byla úspěšně odeslána.', 'success');
        $this->redirect('Default:');
    }

    public function renderDefault(){
        // data pro banner
        $this->template->b = $this->bannerModel->getBannerData();
        $this->template->format = $this->bannerModel->getBannerData();

        // vypsani v tracy, co posilame do banneru
        Debugger::barDump($this->template->b[0], 'banner');
        // Debugger::barDump($this->session->mainForm, 'sessions');
    }

}
