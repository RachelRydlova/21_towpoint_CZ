<?php


namespace App\FrontModule\components;


use App\Model\ApiManager;
//use App\Model\applCache;
use Doctrine\Common\Util\Debug;
use Doctrine\ORM\Mapping\Cache;
use Nette;
use Nette\Application\UI\Control;
use Nette\Application\UI\Form;
use Tracy\Debugger;
use Nette\Http\Session;

class CarSelector extends Control
{

    /** @var ApiManager */
    private $apiManager;

    public $onSuccess;

    private $search;

    /** @var Nette\Http\Session - kompletni session pro nette */
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
     * vyhledavani v inputu carSelectoru - znacka vozu
     * @param $search
     */
    public function handleSearchManuf($search)
    {
        $this->search = strtoupper($search);
        // vytvoreni promennych se seznamem znacek
        $preferovane = $this->apiManager->getCarManufacturers(1);
        $ostatni = $this->apiManager->getCarManufacturers(0);

        // pokud je neco v search, tak plnim pole autami obsahujici co je v search
        if ($this->search) {
            foreach ($preferovane as $key => $pref){
                if (!Nette\Utils\Strings::contains($pref->name,$this->search)){
                    unset($preferovane[$key]);
                }
            }
            foreach ($ostatni as $key => $os) {
                if (!Nette\Utils\Strings::contains($os->name,$this->search)) {
                    unset($ostatni[$key]);
                }
            }
        }

        // nastavuji promenne do template a prekresluji znacky
        $this->template->preferovane = $preferovane;
        $this->template->ostatni = $ostatni;
        $this->redrawControl('manuf');
    }


    /**
     * funkce pro zachyceni zvolene znacky vozu ve formulari
     * @param $manId
     * @throws \Throwable
     */
    public function handleSetManufacturer($manId, $search = null): void
    {
        if (!$manId) {
            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('img');
            $this->redrawControl('model');
            $this->redrawControl('vehicle');
        } else {
            $manItems['Ostatní'] = [];
            if ($mans = $this->apiManager->getCarManufacturers(0)) {
                foreach ($mans as $man) {
                    $manItems['Ostatní'][$man->tcznacka] = $man->name;
                }
            }

            // poslu si manId do sablony
            $this->template->manId = $manId;
            $this->redrawControl('manId');

            // prekresluju snippet pro list modelů
            $models = $this->apiManager->getCarManufacturerModels($manId);
            $search = strtoupper($search);
                // pokud je neco v search, tak plnim pole autami obsahujici co je v search
                if ($search) {
                    foreach ($models as $key => $mod){
                        $modelName = strtoupper($mod->fullname);
                        if (!Nette\Utils\Strings::contains($modelName,$search)){
                            unset($models[$key]);
                        }
                    }
                }

            // nastavuji promenne do template a prekresluji znacky
            $this->template->modely = $models;

            $this['carSelector']['manufacturer']->setDefaultValue($manItems['Ostatní'][$manId]);
            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('model');
            $this->redrawControl('modelyList');
            $this->redrawControl('vehicle');

            $this['carSelector']['model']->setDisabled(false);

            // ulozeni zvolene znacky do session
            $this->saveValue('manufacturer', $manId);
            $this->saveValue('model', null);
            $this->saveValue('vehicle', null);
        }
    }


    /**
     * funkce pro zachyceni zvolene hodnoty modelu vozu ve formulari
     * @param $modId
     * @throws \Throwable
     */
    public function handleSetModel($modId, $search = null): void
    {
        if (!$modId) {
            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('model');
            $this->redrawControl('vehicle');
            $this->redrawControl('img');
        } else {
            // Nastavim spravne znacku
            $manId = $this->loadValue('manufacturer');
            $this->handleSetManufacturer($manId);

            // Image modelu
            if ($img = $this->apiManager->getModelImage($modId)) {
                $this->template->img = $img;
                $this->redrawControl('img');
            }

            // poslu si modId do sablony
            $this->template->modId = $modId;
            $this->redrawControl('modId');

            // prekresluju snippet pro list motoru
            $motors = $this->apiManager->getCarModelVehicles($modId);
            $search = strtoupper($search);
            // pokud je neco v search, tak plnim pole autami obsahujici co je v search
            if ($search) {
                $motors = (array) $motors;
                foreach ($motors as $key => $category){
                    foreach ($category as $motInCat => $motor){
                        $motorName = strtoupper($motor->fullname);
                        if (!Nette\Utils\Strings::contains($motorName,$search)){
                            unset($motors[$key][$motInCat]);
                        }
                    }
                }
            }
            // nastavuji promenne do template a prekresluji motory
            $this->template->motory = $motors;

            $modInfo = $this->apiManager->getModelApiRow($manId, $modId);
            $this['carSelector']['model']->setDefaultValue($modInfo->fullname);
            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('model');
            // prekresluju snippet pro list motorů
            $this->redrawControl('motoryList');
            $this->redrawControl('vehicle');

            $this['carSelector']['vehicle']->setDisabled(false);

            // ulozeni zvoleneho modelu do session
            $this->saveValue('model', $modId);
            $this->saveValue('vehicle', null);
        }
    }

    /**
     * zachyceni hodnoty zvoleneho motoru a zaroven odeslani dat
     * data se vytahuji ze session, protoze samotny formular se neodesila
     * @param $vehicleId
     * @param $comfort
     * @throws \Throwable
     */
    public function handleSaveData($vehicleId, $comfort): void
    {
        // Nastavim spravne model
        $modId = $this->loadValue('model');
        $this->handleSetModel($modId);

        $vehInfo = $this->apiManager->getVehicleApiRow($modId,$vehicleId);
        $this['carSelector']['vehicle']->setDefaultValue($vehInfo->fullname);
        // ulozeni motoru a komfortu do session
        $this->saveValue('vehicle', $vehicleId);
        // nacteni dat ze session
        $vehicle = $this->loadValue('vehicle');
        $model = $this->loadValue('model');
        $manufacturer = $this->loadValue('manufacturer');


        $carInfo = ['manufacturerId' => $manufacturer, 'modelId' => $model, 'vehicleId'=> $vehicle, 'comfort'=> $comfort];
        $this->onSuccess($carInfo);
    }


    /**
     * @param $comfort
     */
    public function handleSetComfort($comfort): void
    {
        $vehicleId = $this->loadValue('vehicle');
        $this->saveValue('comfort', $comfort);
//
        if ($vehicleId == null){
            // pokud se meni comfort ale v session neni vehicle_id nestane se nic
            $this->presenter->sendPayload();

        } else {
            //pokud je vehicle_id v session
            $this->handleSaveData($vehicleId, $comfort);
        }
    }


    /**
     * @return Form
     * @throws \Throwable
     */
    public function createComponentCarSelector(): Form
    {
        $form = new Form();

        $manItems = [];
        if ($mans = $this->apiManager->getCarManufacturers(0)) {
            foreach ($mans as $man) {
                $manItems['Ostatní'][$man->tcznacka] = $man->name;
            }
        }

        $form->addText('manufacturer', 'manufacturer')
            ->setHtmlAttribute('id', 'imark')
            ->setHtmlAttribute('autocomplete', 'off')
            ->setHtmlAttribute('name', 'search')
            ->setHtmlAttribute('placeholder', 'Značka vozu');

        $form->addText('model', 'model')
            ->setHtmlAttribute('id', 'imodel')
            ->setHtmlAttribute('autocomplete', 'off')
            ->setHtmlAttribute('placeholder', 'Model vozu')
            ->setDisabled();

        $form->addText('vehicle', 'vehicle')
            ->setHtmlAttribute('id', 'imotor')
            ->setHtmlAttribute('autocomplete', 'off')
            ->setHtmlAttribute('placeholder', 'Motorizace')
            ->setDisabled();

        $form->addCheckbox('komfort');
        $form->addSubmit('success', 'confirm');

        $form->onSuccess[] = [$this, 'handleSaveData'];

        return $form;
    }

    public function render(): void
    {
        $this->template->setFile(__DIR__ . '/CarSelector.latte');

        // vytvoreni promennych se seznamem znacek
        $preferovane = $this->apiManager->getCarManufacturers(1);
        $ostatni = $this->apiManager->getCarManufacturers(0);

        // nastavuji promenne do template
        if (!$this->search) {
            $this->template->preferovane = $preferovane;
            $this->template->ostatni = $ostatni;
        }

        $this->template->render();
    }


    /**
     * @param string $key
     * @param string $value
     */
    public function saveValue($key,$value): void
    {
        $this->session->getSection('carSection')->$key = $value;
    }


    /**
     * @param string $key
     * @return mixed
     */
    public function loadValue($key)
    {
        return $this->session->getSection('carSection')->$key;
    }


}