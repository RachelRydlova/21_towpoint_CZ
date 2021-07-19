<?php

declare(strict_types=1);

namespace App\FrontModule\Presenters;

use App\Presenters\BasePresenter;
use Nette\Application\UI\Presenter;
use Nette\Application\UI\Form;



class DefaultPresenter extends BasePresenter
{
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


    public function partnerFormSucceeded(Form $form, Data $data): void
    {

        // tady zpracujeme data odeslaná formulářem
        // $data->name obsahuje jméno
        // $data->surname obsahuje prijmeni
        $this->flashMessage('Zpráva byla úspěšně odeslána.');
        $this->redirect('Default:');
    }


}
