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
            ->setAttribute('placeholder', 'Jméno');
        $form->addText('surname', "Příjmení")
            ->setAttribute('placeholder', 'Příjmení');
        $form->addEmail('email', "E-mail")
            ->setAttribute('placeholder', 'E-mail');
//            ->setRequired();
        $form->addText('tel', "Telefon")
            ->setAttribute('placeholder', 'Telefon');
//            ->setRequired();
        $form->addText('psc', "PSČ")
            ->setAttribute('placeholder', 'PSČ');
        $form->addText('mesto', "Obec / město")
            ->setAttribute('placeholder', 'Obec / město');
        $form->addTextArea('note', "Poznámky")
            ->setAttribute('placeholder', 'Poznámky');
        $form->addSelect('state', 'Stát', $staty);
        $form->addCheckbox('gdpr', 'Souhlasím se zpracováním osobních údajů pro potřeby kontaktování zákaznickým centrem v souvislosti s nabídkou montáže tažného zařízení');
//            ->setRequired();

        $form->addSubmit('success', 'Odeslat')
            ->setAttribute('class', 'cta');


        $form->onSuccess[] = [$this, 'onOrderFormSuccess'];

        return $form;
    }

    /**
     * @param Form $form
     * @throws \Throwable
     */
    public function onOrderFormSuccess(Form $form): void
    {
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