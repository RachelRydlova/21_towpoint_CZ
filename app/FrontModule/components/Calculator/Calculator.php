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


          // pole data obsahuje 8 moznych variant cen, ktere se posilaji do sablony a zpracovavaji v js
          $data = [];

          if ($prices->cena->pevne->tazne !== false) {
              // v prvni moznosti pocitam preference > cena + pevne + 7pin + montaz
              $data['cenaPevne7'] = $prices->cena->pevne->tazne->price_moc_dph + $prices->cena->pevne->elektro->E7->price_moc_dph + $prices->cena->pevne->montaz_cena_7_dph;
              // v druhe moznosti pocitam preference > cena + pevne + 13pin + montaz
              $data['cenaPevne13'] = $prices->cena->pevne->tazne->price_moc_dph + $prices->cena->pevne->elektro->E13->price_moc_dph + $prices->cena->pevne->montaz_cena_13_dph;
            $this->template->data = $data;
          }
          if ($prices->cena->odnimatelne->tazne !== false) {
              // v druhe moznosti pocitam preference > cena + odnimatelne + 7pin + montaz
              $data['cenaOdnimatelne7'] = $prices->cena->odnimatelne->tazne->price_moc_dph + $prices->cena->odnimatelne->elektro->E7->price_moc_dph + $prices->cena->odnimatelne->montaz_cena_7_dph;
              // v druhe moznosti pocitam preference > cena + odnimatelne + 13pin + montaz
              $data['cenaOdnimatelne13'] = $prices->cena->odnimatelne->tazne->price_moc_dph + $prices->cena->pevne->elektro->E13->price_moc_dph + $prices->cena->pevne->montaz_cena_13_dph;
            $this->template->data = $data;
          }
          if ($prices->kvalita->pevne->tazne !== false){
              // v druhe moznosti pocitam preference > kvalita + pevne + 7pin + montaz
              $data['kvalitaPevne7'] = $prices->kvalita->pevne->tazne->price_moc_dph + $prices->kvalita->pevne->elektro->E7->price_moc_dph + $prices->kvalita->pevne->montaz_cena_7_dph;
          // v druhe moznosti pocitam preference > kvalita + pevne + 13pin + montaz
          $data['kvalitaPevne13'] = $prices->kvalita->pevne->tazne->price_moc_dph + $prices->kvalita->pevne->elektro->E13->price_moc_dph + $prices->kvalita->pevne->montaz_cena_13_dph;
            $this->template->data = $data;
          }
          if ($prices->kvalita->odnimatelne->tazne !== false) {
              // v druhe moznosti pocitam preference > kvalita + odnimatelne + 7pin + montaz
              $data['kvalitaOdnimatelne7'] = $prices->kvalita->odnimatelne->tazne->price_moc_dph + $prices->kvalita->odnimatelne->elektro->E7->price_moc_dph + $prices->kvalita->odnimatelne->montaz_cena_7_dph;
              // v druhe moznosti pocitam preference > kvalita + odnimatelne + 13pin + montaz
              $data['kvalitaOdnimatelne13'] = $prices->kvalita->odnimatelne->tazne->price_moc_dph + $prices->kvalita->odnimatelne->elektro->E13->price_moc_dph + $prices->kvalita->odnimatelne->montaz_cena_13_dph;
            $this->template->data = $data;
          }

        Debugger::barDump($data, 'variantyCen');



        $this->redrawControl('summaryBox');
        return false;
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
        $this->redirect('this');

    }


    /**
     * @param $preference
     */
    public function handleSetPref(string $preference): void
    {

        Debugger::log(print_r($preference,true),'debug-pref');
//        Debugger::barDump($preference, 'prefererVHandleru');
        $arrPref = json_decode($preference);
//        Debugger::barDump($arrPref,'arrayVHnd');

        // ulozeni preferenci do session
        $this->saveValue('preferencies', $arrPref);
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