<?php

declare(strict_types=1);

namespace App\FrontModule\Forms;

use App\Forms\FormFactory;
use App\Model\ApiManager;
use Nette;
use Nette\Application\UI\Form;
use Nette\Security\User;
use Tracy\Debugger;


final class ContactFormFactory
{
	use Nette\SmartObject;

	private FormFactory $factory;

	private User $user;
    private ApiManager $apiManager;


    public function __construct(FormFactory $factory, User $user, ApiManager $apiManager)
	{
		$this->factory = $factory;
		$this->user = $user;
        $this->apiManager = $apiManager;
    }


	public function create(callable $onSuccess): Form
	{
		$form = $this->factory->create();

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

        $form->onSuccess[] = function (Form $form, array $values) use ($onSuccess): void {
            $dataToReva = ['contact' => $values, 'carInfo' => []];

            $this->apiManager->sendDataToApi($dataToReva);

//            $this->apiManager->sendContactForm($values);
            Debugger::log(print_r($values, true), 'kontaktniFormular');
            $onSuccess();
        };
        return $form;
	}

}

