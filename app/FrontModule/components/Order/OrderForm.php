<?php


namespace App\FrontModule\components;


use Nette;
use Nette\Application\UI\Control;
use Nette\Application\UI\Form;
use Tracy\Debugger;
use App\Model\ApiManager;
use Nette\Http\Session;

class OrderForm extends Control
{
    public $onSuccess;
    public $onMailSuccess;

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

        $form->getElementPrototype()->setAttribute('class', 'inputs');

        $staty = ['Česká republika', 'Slovensko'];

        $form->addText('name', "Jméno")
            ->setHtmlAttribute('placeholder', 'Jméno');
        $form->addText('surname', "Příjmení")
            ->setHtmlAttribute('placeholder', 'Příjmení');
        $form->addEmail('email', "E-mail")
            ->setHtmlAttribute('placeholder', 'E-mail');
        $form->addText('tel', "Telefon")
            ->setHtmlAttribute('placeholder', 'Telefon');
        $form->addText('psc', "PSČ")
            ->setHtmlAttribute('placeholder', 'PSČ');
        $form->addText('mesto', "Obec / město")
            ->setHtmlAttribute('placeholder', 'Obec / město');
        $form->addTextArea('note', "Poznámky")
            ->setHtmlAttribute('placeholder', 'Poznámky');
        $form->addSelect('state', 'Stát', $staty);
        $form->addCheckbox('gdpr');
        $form->addHidden('type');

        $form->addSubmit('success', 'Odeslat');


        $form->onSuccess[] = [$this, 'OrderFormSucceeded'];

        return $form;
    }


    /**
     * @param string $email
     */
    public function handleSendMail(string $email)
    {
        Debugger::log(print_r($email,true),'uncomplete_order');

        // ulozeni preferenci do session
        $this->saveValue('email', $email);
        $this->onMailSuccess($email);
    }



    /**
     * @param Form $form
     * @throws \Throwable
     */
    public function orderFormSucceeded(Form $form): void
    {
        $contact = $form->getValues();
        $this->onSuccess($contact);
    }



    public function render(): void
    {
        $this->template->setFile(__DIR__ . '/OrderForm.latte');
        $this->template->render();
    }


    /**
     * @param string $key
     * @param string $value
     */
    public function saveValue($key,$value): void
    {
        $this->session->getSection('contact')->$key = $value;
    }


    /**
     * @param string $key
     * @return mixed
     */
    public function loadValue($key)
    {
        return $this->session->getSection('contact')->$key;
    }



}