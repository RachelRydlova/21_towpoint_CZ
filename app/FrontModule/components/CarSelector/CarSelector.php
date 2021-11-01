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
     * funkce pro zachyceni zvolene znacky vozu ve formulari
     * @param $manId
     * @throws \Throwable
     */
    public function handleSetManufacturer($manId): void
    {
        if (!$manId) {
            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('img');
            $this->redrawControl('model');
            $this->redrawControl('vehicle');

        } else {

            $manItems = [];
            if ($mans = $this->apiManager->getCarManufacturers(0)) {
                foreach ($mans as $man) {
                    $manItems['Ostatní'][$man->tcznacka] = $man->name;
                }
            }

            $this['carSelector']['manufacturer']->setDefaultValue($manItems['Ostatní'][$manId]);
            $this['carSelector']['model']->setDisabled(false);
            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('manufacturer');
            $this->redrawControl('img');
            $this->redrawControl('model');

            $this->redrawControl('vehicle');

            // prekresluju snippet pro list modelů
            $this->redrawControl('modelyList');
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
    public function handleSetModel($modId): void
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


            $this->redrawControl('carSelectorWrapper');
            $modInfo = $this->apiManager->getModelApiRow($manId, $modId);
            $this['carSelector']['model']->setDefaultValue($modInfo->fullname);
            $this['carSelector']['vehicle']->setDisabled(false);
            $this->redrawControl('model');
            $this->redrawControl('vehicle');

        }
        // prekresluju snippet pro list motorů
        $this->redrawControl('motoryList');
        // ulozeni zvoleneho modelu do session
        $this->saveValue('model', $modId);
        $this->saveValue('vehicle', null);

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
            ->setHtmlAttribute('data-confirm', 'coTuMaByt')
            ->setHtmlAttribute('placeholder', 'Značka vozu');
        $form->addHidden('manufacturerId');

        $form->addText('model', 'model')
            ->setHtmlAttribute('id', 'imodel')
            ->setHtmlAttribute('placeholder', 'Model vozu')
            ->setDisabled();
        $form->addHidden('modelId');

        $form->addText('vehicle', 'vehicle')
            ->setHtmlAttribute('id', 'imotor')
            ->setHtmlAttribute('placeholder', 'Motorizace')
            ->setDisabled();

        $form->addHidden('vehicleId')
            ->setHtmlAttribute('id', 'carSelectorVehicleIdHidden');

        $form->addCheckbox('komfort');
        $form->addSubmit('success', 'confirm');

        $form->onSuccess[] = [$this, 'handleSaveData'];

        return $form;
    }

    /**
     * @param Form $form
     * @throws \Throwable
     */
    public function onCarSelectSuccess(Form $form): void
    {
        $carInfo = $form->getValues();
        $this->onSuccess($carInfo);
    }


    public function render(): void
    {
        $this->template->setFile(__DIR__ . '/CarSelector.latte');

        // vytvoreni promennych se seznamem znacek
        $preferovane = $this->apiManager->getCarManufacturers(1);
        $ostatni = $this->apiManager->getCarManufacturers(0);

        // nastavuji promenne do template
        $this->template->preferovane = $preferovane;
        $this->template->ostatni = $ostatni;

        // vytvoreni promenne se seznamem modelu
        $manId = $this->loadValue('manufacturer');
        $models = $this->apiManager->getCarManufacturerModels($manId);
        $this->template->modely = $models;

        // vytvoreni promenne se seznamem motoru
        $modId = $this->loadValue('model');
        $motors = $this->apiManager->getCarModelVehicles($modId);
        $this->template->motory = $motors;
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