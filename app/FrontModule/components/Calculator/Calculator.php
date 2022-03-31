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

        // pole data obsahuje 8 moznych variant cen, ktere se posilaji do sablony a zpracovavaji v js
        $data = [];


        /*   CENA    */
        if ($prices->cena->pevne->tazne !== false) {

            // v prvni moznosti pocitam preference > cena + pevne + 7pin + montaz
            if ($prices->cena->pevne->elektro->E7 !== false){
                $data['cenaPevne7'] = $prices->cena->pevne->tazne->price_moc_dph + $prices->cena->pevne->elektro->E7->price_moc_dph + $prices->cena->pevne->montaz_cena_7_dph;
            } else { $data['cenaPevne7'] = '0'; }

            if ($prices->cena->pevne->elektro->E13 !== false) {
                // v druhe moznosti pocitam preference > cena + pevne + 13pin + montaz
                $data['cenaPevne13'] = $prices->cena->pevne->tazne->price_moc_dph + $prices->cena->pevne->elektro->E13->price_moc_dph + $prices->cena->pevne->montaz_cena_13_dph;
            } else { $data['cenaPevne13'] = '0'; }
        } else {
            $data['cenaPevne7'] = '0';
            $data['cenaPevne13'] = '0';
        }

        if ($prices->kvalita->odnimatelne->tazne !== false) {

            // v druhe moznosti pocitam preference > kvalita + odnimatelne + 7pin + montaz
            if ($prices->kvalita->pevne->elektro->E7 !== false) {
                $data['kvalitaOdnimatelne7'] = $prices->kvalita->odnimatelne->tazne->price_moc_dph + $prices->kvalita->odnimatelne->elektro->E7->price_moc_dph + $prices->kvalita->odnimatelne->montaz_cena_7_dph;
            } else { $data['kvalitaOdnimatelne7'] = '0'; }

            // v druhe moznosti pocitam preference > kvalita + odnimatelne + 13pin + montaz
            if ($prices->kvalita->pevne->elektro->E13 !== false) {
                $data['kvalitaOdnimatelne13'] = $prices->kvalita->odnimatelne->tazne->price_moc_dph + $prices->kvalita->odnimatelne->elektro->E13->price_moc_dph + $prices->kvalita->odnimatelne->montaz_cena_13_dph;
            } else { $data['kvalitaOdnimatelne13'] = '0'; }
        } else {
            $data['kvalitaOdnimatelne7'] = '0';
            $data['kvalitaOdnimatelne13'] = '0';
        }


        if ($prices->cena->odnimatelne->tazne !== false) {

            // v druhe moznosti pocitam preference > cena + odnimatelne + 7pin + montaz
            if ($prices->cena->pevne->elektro->E7 !== false){
                $data['cenaOdnimatelne7'] = $prices->cena->odnimatelne->tazne->price_moc_dph + $prices->cena->odnimatelne->elektro->E7->price_moc_dph + $prices->cena->odnimatelne->montaz_cena_7_dph;
            } else { $data['cenaOdnimatelne7'] = '0'; }

            // v druhe moznosti pocitam preference > cena + odnimatelne + 13pin + montaz
            if ($prices->cena->pevne->elektro->E13 !== false){
                $data['cenaOdnimatelne13'] = $prices->cena->odnimatelne->tazne->price_moc_dph + $prices->cena->pevne->elektro->E13->price_moc_dph + $prices->cena->pevne->montaz_cena_13_dph;
            } else { $data['cenaOdnimatelne13'] = '0'; }
        } else {
            $data['cenaOdnimatelne7'] = '0';
            $data['cenaOdnimatelne13'] = '0';
        }




        /*   KVALITA  */
        if ($prices->kvalita->pevne->tazne !== false){
            // v druhe moznosti pocitam preference > kvalita + pevne + 7pin + montaz
            if ($prices->kvalita->pevne->elektro->E7 !== false){
                $data['kvalitaPevne7'] = $prices->kvalita->pevne->tazne->price_moc_dph + $prices->kvalita->pevne->elektro->E7->price_moc_dph + $prices->kvalita->pevne->montaz_cena_7_dph;
            } else { $data['kvalitaPevne7'] = '0'; }

            // v druhe moznosti pocitam preference > kvalita + pevne + 13pin + montaz
            if ($prices->kvalita->pevne->elektro->E13 !== false) {
                $data['kvalitaPevne13'] = $prices->kvalita->pevne->tazne->price_moc_dph + $prices->kvalita->pevne->elektro->E13->price_moc_dph + $prices->kvalita->pevne->montaz_cena_13_dph;
            } else { $data['kvalitaPevne13'] = '0'; }
        } else {
            $data['kvalitaPevne7'] = '0';
            $data['kvalitaPevne13'] = '0';
        }

        bdump($data, 'dostupneVariantyMontaze');


        $this->template->data = $data;
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
            ->setDisabled(true)
            ->setDefaultValue('0');
        $form->addRadioList('koule', "Upevnění koule:", ['Pevné','Odnímatelné'])
            ->setAttribute('id', 'koule')
            ->setDisabled(true)
            ->setDefaultValue('0');
        $form->addRadioList('zasuvka', "Zásuvka:", ['7pinová','13pinová'])
            ->setAttribute('id', 'el')
            ->setDisabled(true)
            ->setDefaultValue('0');
        $form->addRadioList('redukce', "Redukce zdarma:", ['7→13','13→7'])
            ->setAttribute('id', 'redukce')
            ->setDisabled(true)
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

        bdump($preference, 'preference');
        $arrPref = json_decode($preference);
        Debugger::log(print_r($arrPref,true),'debug-pref');

        // ulozeni preferenci do session
        $this->saveValue('preferencies', $arrPref);
        $this->presenter->sendPayload();
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