<?php

declare(strict_types=1);

namespace App\FrontModule\Forms;

use App\Forms\FormFactory;
use App\Model\ApiManager;
use Contributte\Translation\Translator;
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

    /** @var Translator @inject */
    public Translator $translator;


    public function __construct(FormFactory $factory, User $user, ApiManager $apiManager, Translator $translator)
	{
		$this->factory = $factory;
		$this->user = $user;
        $this->apiManager = $apiManager;
        $this->translator = $translator;
    }


	public function create(callable $onSuccess): Form
	{
		$form = $this->factory->create();

        $form->getElementPrototype()->setAttribute('class', 'inputs');
        $p = $this->translator;

        $form->addText('name', $p->translate('messages.base.name'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.name'));
        $form->addText('surname', $p->translate('messages.base.surname'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.surname'));
        $form->addEmail('email', $p->translate('messages.base.email'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.email'));
        $form->addText('tel', $p->translate('messages.base.phone'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.phone'));
        $form->addText('psc', $p->translate('messages.base.psc'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.psc'));
        $form->addText('mesto', $p->translate('messages.base.city'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.city'));
        $form->addTextArea('note', $p->translate('messages.base.note'))
            ->setHtmlAttribute('placeholder', $p->translate('messages.base.contactNote'));
        $form->addSelect('state',$p->translate('messages.base.state'))
            ->setItems(array(
                'CZ' => $p->translate('Česká republika'),
                'SK' => $p->translate('Slovensko'),
                'HU' => $p->translate('Maďarsko'),
            ));;
        $form->addCheckbox('gdpr');
        $form->addHidden('type');


        $form->addSubmit('success', $p->translate('messages.base.send'));

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

