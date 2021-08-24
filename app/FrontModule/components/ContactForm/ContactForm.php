<?php


namespace App\FrontModule\components;


use Nette;
use Nette\Application\UI\Control;
use Nette\Application\UI\Form;
use Tracy\Debugger;

class ContactForm extends Control
{
    /**
     * @return Form
     * @throws \Throwable
     */
    public function createComponentContactForm(): Form
    {
        $form = new Form();

        $form->getElementPrototype()->setAttribute('div', 'inputs');

        $staty = ['Česká republika', 'Slovensko', 'Maďarsko'];

        $form->addText('name', "Jméno")
            ->setAttribute('placeholder', 'Jméno');
        $form->addText('surname', "Příjmení")
            ->setAttribute('placeholder', 'Příjmení');
        $form->addEmail('email', "E-mail")
            ->setAttribute('placeholder', 'E-mail')
            ->setRequired('Vyplňte svoji e-mailovou adresu ve správném formátu.');
        $form->addText('tel', "Telefon")
            ->setAttribute('placeholder', 'Telefon')
            ->setRequired('Vyplňte své telefonní číslo – nejlépe ve formátu +420 123 456 789.');
        $form->addText('psc', "PSČ")
            ->setAttribute('placeholder', 'PSČ');
        $form->addText('mesto', "Obec / město")
            ->setAttribute('placeholder', 'Obec / město');
        $form->addTextArea('note', "Poznámky")
            ->setAttribute('placeholder', 'Poznámky');
        $form->addSelect('state', 'Stát', $staty);
        $form->addCheckbox('gdpr', 'Souhlasím se zpracováním osobních údajů pro potřeby kontaktování zákaznickým centrem v souvislosti s nabídkou montáže tažného zařízení');
//            ->setAttribute('class', 'yesno sel');
        $form->addSubmit('success', 'Odeslat')
            ->setAttribute('class', 'cta');



        $form->onSuccess[] = [$this, 'onContactFormSuccess'];

        return $form;
    }


    /**
     * @param Form $form
     */
    public function onContactFormSuccess(Form $form): void
    {
        $values = $form->getValues();
        Debugger::barDump($values, 'contactform');
    }


    public function render(): void
    {
        $this->template->setFile(__DIR__ . '/ContactForm.latte');
        $this->template->render();
    }


}