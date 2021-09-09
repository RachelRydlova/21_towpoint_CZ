<?php


namespace App\FrontModule\components;


use App\Model\ApiManager;
use Nette;
use Nette\Application\UI\Control;
use Nette\Application\UI\Form;
use Nette\Http\Session;
use Tracy\Debugger;

class Calculator extends Control
{
    public $vehicleId;

    /** @var ApiManager */
    private $apiManager;

    /**
     * @var Nette\Http\Session - kompletni session pro nette
     */
    protected $session;

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
     * zjisteni ID zvoleneho motoru a ziskani cen
     * @param $vehicleId
     * @param bool $comfort
     * @return mixed|null
     */
      public function getPrice($vehicleId, $komfort = true)
    {
        $prices = $this->apiManager->getTowpointPrices($vehicleId, 'CZ');
        Debugger::barDump($prices, 'cenyAPI');

        $summaryPrice = 0;

        // cena tazneho
        $summaryPrice += $prices->cena->pevne->tazne->price_moc_dph;

        // cena elektriky
        $summaryPrice += $prices->cena->pevne->elektro->E7->price_moc_dph;

        // cena montaze
        $summaryPrice += $prices->cena->pevne->montaz_cena_7_dph;

        // komfortni vybava
//        if ($comfort){
//            $summaryPrice +=
//        }


        $this->template->summaryPrice = $summaryPrice;
        $this->redrawControl('summaryBox');
        Debugger::barDump($summaryPrice, 'vypocetCeny');

        return $summaryPrice;
    }





    /**
     * @return Form
     * @throws \Throwable
     */
    public function createComponentCalculator(): Form
    {
        $form = new Form();

        $form->addRadioList('pref', "Preference:", ['Cena','Kvalita'])
            ->setAttribute('id', 'pref')
            ->setDefaultValue('0');
        $form->addRadioList('koule', "Upevnění koule:", ['Pevné','Odnímatelné'])
            ->setAttribute('id', 'koule')
            ->setDefaultValue('0');
        $form->addRadioList('zasuvka', "Zásuvka:", ['7pinová','13pinová'])
            ->setAttribute('id', 'el')
            ->setDefaultValue('0');
        $form->addRadioList('redukce', "Redukce zdarma:", ['7→13','13→7'])
            ->setAttribute('id', 'redukce')
            ->setDisabled()
            ->setDefaultValue('0');


        $form->onSuccess[] = [$this, 'onFormSuccess'];

        return $form;
    }


    public function handleSetParam($param): void
    {

        $this->redrawControl('calculatorWrapper');
        $this->redrawControl('summaryPrice');
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