<?php


namespace App\FrontModule\components;


use Contributte\Translation\Translator;
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

    /** @var Translator @inject */
    public $translator;

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

        $p = $this->presenter;
        $predvolby = ['+420', '00421', '0036'];

        $form->addText('name', $p->translate('messages.base.name'))
            ->setHtmlAttribute('placeholder',  $p->translate('messages.base.name'));
        $form->addText('surname', $p->translate('messages.base.surname'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.surname'));
        $form->addEmail('email', $p->translate('messages.base.email'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.email'));
        $form->addSelect('predvolba', 'Předvolba', $predvolby);
        $form->addText('tel', $p->translate('messages.base.phone'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.phone'));
        $form->addText('psc', $p->translate('messages.base.psc'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.psc'));
        $form->addText('mesto', $p->translate('messages.base.city'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.city'));
        $form->addTextArea('note', $p->translate('messages.base.note'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.note'));
        $form->addSelect('state',$p->translate('messages.base.state'))
            ->setItems(array(
                'CZ' => $p->translate('Česká republika'),
                'SK' => $p->translate('Slovensko'),
                'HU' => $p->translate('Maďarsko'),
            ));
        $form->addCheckbox('gdpr');
        $form->addHidden('type')
            ->setDefaultValue(1);

        $form->addSubmit('success', $p->translate('messages.base.send'));


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
        // nastavim delku session
        $this->session->getSection('contact')->setExpiration('3 days');
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