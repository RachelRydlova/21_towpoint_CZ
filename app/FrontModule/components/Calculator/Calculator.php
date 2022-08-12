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
     * @param $isUni
     * @return mixed|null
     */
    public function setPrice($vehicleId, $comfort, $isUni)
    {
        $prices = $this->apiManager->getTowpointPrices($vehicleId, $comfort, $isUni);

        // pole data obsahuje 8 moznych variant cen, ktere se posilaji do sablony a zpracovavaji v js
        $data = [];

        if ($prices && is_object($prices) && isset($prices->cena)) {
            $cenaPevne = $prices->cena->pevne;
            $kvalitaOdminatelne = $prices->kvalita->odnimatelne;
            $cenaOdnimatelne = $prices->cena->odnimatelne;
            $kvalitaPevne = $prices->kvalita->pevne;

            /*   CENA    */
            // v prvni moznosti pocitam preference > cena + pevne + 7pin + montaz
            $data['cenaPevne7'] = $cenaPevne->tazne->price_moc_dph + $cenaPevne->elektro->E7->price_moc_dph + $cenaPevne->montaz_cena_7_dph;

            // v druhe moznosti pocitam preference > cena + pevne + 13pin + montaz
            $data['cenaPevne13'] = $cenaPevne->tazne->price_moc_dph + $cenaPevne->elektro->E13->price_moc_dph + $cenaPevne->montaz_cena_13_dph;

            // v druhe moznosti pocitam preference > kvalita + odnimatelne + 7pin + montaz
            $data['kvalitaOdnimatelne7'] = $kvalitaOdminatelne->tazne->price_moc_dph + $kvalitaOdminatelne->elektro->E7->price_moc_dph + $kvalitaOdminatelne->montaz_cena_7_dph;

            // v druhe moznosti pocitam preference > kvalita + odnimatelne + 13pin + montaz
            $data['kvalitaOdnimatelne13'] = $kvalitaOdminatelne->tazne->price_moc_dph + $kvalitaOdminatelne->elektro->E13->price_moc_dph + $kvalitaOdminatelne->montaz_cena_13_dph;

            // v druhe moznosti pocitam preference > cena + odnimatelne + 7pin + montaz
            $data['cenaOdnimatelne7'] = $cenaOdnimatelne->tazne->price_moc_dph + $cenaOdnimatelne->elektro->E7->price_moc_dph + $cenaOdnimatelne->montaz_cena_7_dph;

            // v druhe moznosti pocitam preference > cena + odnimatelne + 13pin + montaz
            $data['cenaOdnimatelne13'] = $cenaOdnimatelne->tazne->price_moc_dph + $cenaOdnimatelne->elektro->E13->price_moc_dph + $cenaOdnimatelne->montaz_cena_13_dph;

            /*   KVALITA  */
            // v druhe moznosti pocitam preference > kvalita + pevne + 7pin + montaz
            $data['kvalitaPevne7'] = $kvalitaPevne->tazne->price_moc_dph + $kvalitaPevne->elektro->E7->price_moc_dph + $kvalitaPevne->montaz_cena_7_dph;

            // v druhe moznosti pocitam preference > kvalita + pevne + 13pin + montaz
            $data['kvalitaPevne13'] = $kvalitaPevne->tazne->price_moc_dph + $kvalitaPevne->elektro->E13->price_moc_dph + $kvalitaPevne->montaz_cena_13_dph;
        };


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