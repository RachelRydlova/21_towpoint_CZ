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

        bdump($prices, 'cenyZApi');
        // pole data obsahuje 8 moznych variant cen, ktere se posilaji do sablony a zpracovavaji v js
        $data = [];

        if ($prices && is_object($prices) && isset($prices->cena)) {
            $cenaPevne = $prices->cena->pevne;
            $cenaPevneTazne = $cenaPevne->tazne ? $cenaPevne->tazne->price_moc_dph : 0;
            $cenaPevneE7 = $cenaPevne->elektro->E7 ? $cenaPevne->elektro->E7->price_moc_dph : 0;
            $cenaPevneE13 = $cenaPevne->elektro->E13 ? $cenaPevne->elektro->E13->price_moc_dph : 0;
            $cenaOdnimatelne = $prices->cena->odnimatelne;
            $cenaOdnimatelneTazne = $cenaOdnimatelne->tazne ? $cenaOdnimatelne->tazne->price_moc_dph : 0;
            $cenaOdnimatelneE7 = $cenaOdnimatelne->elektro->E7 ? $cenaOdnimatelne->elektro->E7->price_moc_dph : 0;
            $cenaOdnimatelneE13 = $cenaOdnimatelne->elektro->E13 ? $cenaOdnimatelne->elektro->E13->price_moc_dph : 0;

            $kvalitaPevne = $prices->kvalita->pevne;
            $kvalitaPevneTazne = $kvalitaPevne->tazne ? $kvalitaPevne->tazne->price_moc_dph : 0;
            $kvalitaPevneE7 =  $kvalitaPevne->elektro->E7 ? $kvalitaPevne->elektro->E7->price_moc_dph : 0;
            $kvalitaPevneE13 = $kvalitaPevne->elektro->E13 ? $kvalitaPevne->elektro->E13->price_moc_dph : 0;
            $kvalitaOdminatelne = $prices->kvalita->odnimatelne;
            $kvalitaOdminatelneTazne = $kvalitaOdminatelne->tazne ? $kvalitaOdminatelne->tazne->price_moc_dph : 0;
            $kvalitaOdminatelneE7 = $kvalitaOdminatelne->elektro->E7 ? $kvalitaOdminatelne->elektro->E7->price_moc_dph : 0;
            $kvalitaOdminatelneE13 = $kvalitaOdminatelne->elektro->E13 ? $kvalitaOdminatelne->elektro->E13->price_moc_dph : 0;


            /*   CENA   -> pokud alespon jedna hodnota chybi, neposilame cenu, ale zobrazujeme, ze kalkulace neni k dispozi */
            // v prvni moznosti pocitam preference > cena + pevne + 7pin + montaz
            if (empty($cenaPevneTazne) || empty($cenaPevneE7) || empty($cenaPevne->montaz_cena_7_dph)){
                $data['cenaPevne7'] = 0;
            } else {
                $data['cenaPevne7'] = $cenaPevneTazne + $cenaPevneE7 + $cenaPevne->montaz_cena_7_dph;
            }


            // v druhe moznosti pocitam preference > cena + pevne + 13pin + montaz
            if (empty($cenaPevneTazne) || empty($cenaPevneE13) || empty($cenaPevne->montaz_cena_13_dph)){
                $data['cenaPevne13'] = 0;
            } else {
                $data['cenaPevne13'] = $cenaPevneTazne + $cenaPevneE13 + $cenaPevne->montaz_cena_13_dph;
            }

            // pocitam preference > kvalita + odnimatelne + 7pin + montaz
            if (empty($kvalitaOdminatelneTazne) || empty($kvalitaOdminatelneE7) || empty($kvalitaOdminatelne->montaz_cena_7_dph)){
                $data['kvalitaOdnimatelne7'] = 0;
            } else {
                $data['kvalitaOdnimatelne7'] = $kvalitaOdminatelneTazne + $kvalitaOdminatelneE7 + $kvalitaOdminatelne->montaz_cena_7_dph;
            }

            // pocitam preference > kvalita + odnimatelne + 13pin + montaz
            if (empty($kvalitaOdminatelneTazne) || empty($kvalitaOdminatelneE13) || empty($kvalitaOdminatelne->montaz_cena_13_dph)){
                $data['kvalitaOdnimatelne13'] = 0;
            } else {
                $data['kvalitaOdnimatelne13'] = $kvalitaOdminatelneTazne + $kvalitaOdminatelneE13 + $kvalitaOdminatelne->montaz_cena_13_dph;
            }

            // pocitam preference > cena + odnimatelne + 7pin + montaz
            if (empty($cenaOdnimatelneTazne) || empty($cenaOdnimatelneE7) || empty($cenaOdnimatelne->montaz_cena_7_dph)){
                $data['cenaOdnimatelne7'] = 0;
            } else {
                $data['cenaOdnimatelne7'] = $cenaOdnimatelneTazne + $cenaOdnimatelneE7 + $cenaOdnimatelne->montaz_cena_7_dph;
            }

            // pocitam preference > cena + odnimatelne + 13pin + montaz
            if (empty($cenaOdnimatelneTazne) || empty($cenaOdnimatelneE13) || empty($cenaOdnimatelne->montaz_cena_13_dph)){
                $data['cenaOdnimatelne13'] = 0;
            } else {
                $data['cenaOdnimatelne13'] = $cenaOdnimatelneTazne + $cenaOdnimatelneE13 + $cenaOdnimatelne->montaz_cena_13_dph;
            }

            /*   KVALITA  */
            // pocitam preference > kvalita + pevne + 7pin + montaz
            if (empty($kvalitaPevneTazne) || empty($kvalitaPevneE7) || empty($kvalitaPevne->montaz_cena_7_dph)){
                $data['kvalitaPevne7'] = 0;
            } else {
                $data['kvalitaPevne7'] = $kvalitaPevneTazne + $kvalitaPevneE7 + $kvalitaPevne->montaz_cena_7_dph;
            }

            // pocitam preference > kvalita + pevne + 13pin + montaz
            if (empty($kvalitaPevneTazne) || empty($kvalitaPevneE13) || empty($kvalitaPevne->montaz_cena_13_dph)){
                $data['kvalitaPevne13'] = 0;
            } else {
                $data['kvalitaPevne13'] = $kvalitaPevneTazne + $kvalitaPevneE13 + $kvalitaPevne->montaz_cena_13_dph;
            }
        };

        bdump($data, 'dostupneCeny');

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