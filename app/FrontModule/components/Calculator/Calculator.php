<?php


namespace App\FrontModule\components;


use Nette;
use Nette\Application\UI\Control;
use Nette\Application\UI\Form;
use Tracy\Debugger;

class Calculator extends Control
{

    /**
     * @var mixed
     */
    private $session;



    /**
     * @return Form
     * @throws \Throwable
     */
    public function createComponentCalculator(): Form
    {
        $form = new Form();

        // $form->getElementPrototype()->setAttribute('id', 'form2');

        $form->addRadioList('pref', "Preference:", ['kvalita','cena']);
        $form->addRadioList('koule', "Upevnění koule:", ['Pevné','Odnímatelné']);
        $form->addRadioList('zasuvka', "Zásuvka:", ['7pinová','13pinová']);
        $form->addRadioList('redukce', "Redukce zdarma:", ['7→13','13→7']);


        $form->onSuccess[] = [$this, 'onFormSuccess'];

        return $form;
    }


    /**
     * @param Form $form
     */
    public function onFormSuccess(Form $form): void
    {
        $values = $form->getValues();
        Debugger::barDump($values, 'calculatorform');
    }


    public function render(): void
    {
        $this->template->setFile(__DIR__ . '/Calculator.latte');
        $this->template->render();
    }


}