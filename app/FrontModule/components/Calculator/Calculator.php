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
     * @param $comfort
     * @return mixed|null
     */
      public function setPrice($vehicleId, $comfort)
    {

        $prices = $this->apiManager->getTowpointPrices($vehicleId, $comfort);
        Debugger::barDump($prices, 'cenyAPI');

        // defaultni nastaveni nejlevnejsi varianty montaze
        $koule = 'pevne';
        $el = 'E7';

        // preference zakaznika
        $pref = $this->loadValue('preference');
        if (isset($pref)){
            return $pref;
        } else {
            $pref = 'cena';
        }

        Debugger::barDump($pref, 'prefvSetPrice');

        if ($prices->$pref->$koule->tazne !== false)
        {

            $summaryPrice = 0;

            // cena tazneho
            $summaryPrice += $prices->$pref->$koule->tazne->price_moc_dph;

            // cena elektriky
            $summaryPrice += $prices->$pref->$koule->elektro->$el->price_moc_dph;

            // cena montaze
            $summaryPrice += $prices->$pref->$koule->montaz_cena_7_dph;


            $this->template->summaryPrice = $summaryPrice;
            $this->redrawControl('summaryBox');
        return $summaryPrice;
        }

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


    /**
     * @param Form $form
     */
    public function onFormSuccess(Form $form): void
    {
        $values = $form->getValues();
        Debugger::barDump($values, 'calculatorform');
    }


    /**
     * @param $pref
     */
    public function handleSetPref($pref): void
    {
        $this->saveValue('preference', $pref);
    }

    public function render(): void
    {
        $this->template->setFile(__DIR__ . '/Calculator.latte');
        $this->template->render();

    }


    /**
     * @param string $key
     * @param string $value
     */
    public function saveValue($key,$value): void
    {
        $this->session->getSection('calculator')->$key = $value;
    }


    /**
     * @param string $key
     * @return mixed
     */
    public function loadValue($key)
    {
        return $this->session->getSection('calculator')->$key;
    }


}