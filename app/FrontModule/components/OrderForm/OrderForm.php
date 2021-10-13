<?php


namespace App\FrontModule\components;


use Doctrine\Common\Util\Debug;
use Nette;
use Nette\Application\UI\Control;
use Nette\Application\UI\Form;
use Tracy\Debugger;
use App\Model\ApiManager;
use Nette\Http\Session;

class OrderForm extends Control
{
    public $onSuccess;

    /** @var Nette\Http\Session - kompletni session pro nette */
    public $session;


    /** @var ApiManager */
    private $apiManager;

    /**
     * form selector constructor
     * @param ApiManager $apiManager
     * @param Session $session
     */
    public function __construct(ApiManager $apiManager, Session $session)
    {
        $this->apiManager = $apiManager;
        $this->session    = $session;
    }


    /**
     * @return Form
     * @throws \Throwable
     */
    public function createComponentOrderForm(): Form
    {
        $form = new Form();

        $form->getElementPrototype()->setAttribute('div', 'inputs');

        $staty = ['Česká republika', 'Slovensko', 'Maďarsko'];

        $form->addText('name', "Jméno")
            ->setDisabled()
            ->setAttribute('placeholder', 'Jméno');
        $form->addText('surname', "Příjmení")
            ->setDisabled()
            ->setAttribute('placeholder', 'Příjmení');
        $form->addEmail('email', "E-mail")
            ->setDisabled()
            ->setAttribute('placeholder', 'E-mail')
            ->setRequired('Vyplňte svoji e-mailovou adresu ve správném formátu.');
        $form->addText('tel', "Telefon")
            ->setDisabled()
            ->setAttribute('placeholder', 'Telefon')
            ->setRequired('Vyplňte své telefonní číslo nejlépe ve formátu +420 123 456 789.');
        $form->addText('psc', "PSČ")
            ->setDisabled()
            ->setAttribute('placeholder', 'PSČ');
        $form->addText('mesto', "Obec / město")
            ->setDisabled()
            ->setAttribute('placeholder', 'Obec / město');
        $form->addTextArea('note', "Poznámky")
            ->setDisabled()
            ->setAttribute('placeholder', 'Poznámky');
        $form->addSelect('state', 'Stát', $staty)
            ->setDisabled();
        $form->addCheckbox('gdpr')
            ->setDisabled()
            ->setRequired('Pro odeslání poptávky je třeba souhlasit se zpracováním osobních údajů.');

        $form->addSubmit('success', 'Odeslat')
            ->setDisabled()
            ->setAttribute('class', 'cta');


        $form->onSuccess[] = [$this, 'onOrderFormSuccess'];

        return $form;
    }


    public function handleSendMail(string $email)
    {
        Debugger::log(print_r($email,true),'uncomplete_order');
        Debugger::barDump($email, 'emailVHandleru');
//        $arrPref = json_decode($preference);
//        Debugger::barDump($arrPref,'arrayVHnd');

        // ulozeni preferenci do session
        $this->saveValue('email', $email);
    }



    /**
     * @param Form $form
     * @throws \Throwable
     */
    public function onOrderFormSuccess(Form $form): void
    {
        // ulozit kontakty do session

        $contact = $form->getValues();
        $this->onSuccess($contact);
        $this->getPresenter()->redirect('Default:thanks');
    }



    public function render(): void
    {
        $this->template->setFile(__DIR__ . '/OrderForm.latte');
        $this->template->render();
    }


}