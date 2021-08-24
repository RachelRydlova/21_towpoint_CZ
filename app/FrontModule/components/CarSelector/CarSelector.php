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

    public const SESS_LAST_SEL_KEY = 'carSelectorLastSelect';


    /** @var ApiManager */
    private $apiManager;

    public $onSuccess;

    /** @var Session */
    public $session;

    /**
     * form selector constructor
     * @param ApiManager $apiManager
//     * @param applCache $cache
     */
    public function __construct(ApiManager $apiManager)
    {
        $this->apiManager = $apiManager;
    }


    /**
     * @param $manId
     * @throws \Throwable
     */
    public function handleSetManufacturer($manId): void
    {
        if (!$manId) {
            $this['carSelector']['model']->setItems([]);
            $this['carSelector']['model']->setDisabled();
            $this['carSelector']['vehicle']->setItems([]);
            $this['carSelector']['vehicle']->setDisabled();
//            $this->template->progress = 0;
            $this->redrawControl('carSelectorWrapper');
//            $this->redrawControl('progress');
//            $this->redrawControl('img');
            $this->redrawControl('model');
            $this->redrawControl('vehicle');
//            $this->redrawControl('manuImg');
        } else {
            if ($manRow = $this->apiManager->getManufacturerApiRow($manId)) {
                $this->template->manuImg = $manRow->imageurl;
                $this->template->manRow = $manRow;
                Debugger::barDump($manRow, 'manRow');
                $this->redrawControl('manuImg');
                $this->redrawControl('img');
            }

            $modelsItems = [];
            if ($models = $this->apiManager->getCarManufacturerModels($manId)) {
                foreach ($models as $model) {
                    $modelsItems[$model->tcmodel] = $model->fullname;
                }
            }
            $this['carSelector']['manufacturer']->setDefaultValue($manId);
            $this['carSelector']['model']->setItems($modelsItems);
            $this['carSelector']['model']->setDisabled(false);
            $this->redrawControl('model');
           // $this->redrawControl('carSelectorWrapper');
        }
    }


    /**
     * @param $modId
     * @param $manId
     * @throws \Throwable
     */
    public function handleSetModel($modId): void
    {
//        $this->session->hasSection('manufacturer');

        //        $this->handleSetManufacturer($manRow);
//        Debugger::barDump($manRow, 'debugHandleSetModel');
        if (!$modId) {
            $this['carSelector']['vehicle']->setItems([]);
            $this['carSelector']['vehicle']->setDisabled();
            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('vehicle');
            $this->redrawControl('img');
//            $this->template->progress = 33;
//            $this->redrawControl('progress');
        } else {
            $vehicleItems = [];
            if ($vehicles = $this->apiManager->getCarModelVehicles($modId)) {
                foreach ($vehicles as $category => $vehiclesInCategory) {
                    $vehicleItems[$category] = [];
                    foreach ($vehiclesInCategory as $vehicle) {
                        $vehicleItems[$category][$vehicle->vozidlo_id] = $vehicle->fullname;
                    }
                }
            }
            $this['carSelector']['vehicle']->setItems($vehicleItems);
            $this['carSelector']['vehicle']->setDisabled(false);
           // $this['carSelector']['manufacturer']->setDefaultValue($manRow);
            // Hidden prvky
            $this['carSelector']['modelId']->setDefaultValue($modId);
            $this['carSelector']['vehicleId']->setDefaultValue(null);

            // Image modelu
            if ($img = $this->apiManager->getModelImage($modId)) {
                $this->template->img = $img;
                $this->redrawControl('img');
            }

//            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('vehicle');
            $this->redrawControl('hiddenData');
        }
    }


    /**
     * Obnovená posledního výběru auta
     * @param $manId
     * @param $modId
     * @param $carId
     */
    public function handleSetLastSelect($manId, $modId, $carId): void
    {
        $this->handleSetManufacturer($manId);
        $this['carSelector']['manufacturer']->setDefaultValue($manId);
        $this->redrawControl('manuf');
        $this->handleSetModel($modId);
        $this['carSelector']['model']->setDefaultValue($modId);
        $this['carSelector']['vehicle']->setDefaultValue($carId);
        $this->onSuccess($manId, $modId, $carId);
    }


    /**
     * @return Form
     * @throws \Throwable
     */
    public function createComponentCarSelector(): Form
    {
        $form = new Form();

        $form->getElementPrototype()->setAttribute('id', 'sel');

        $manItems = ['Preferované' => [], 'Ostatní' => []];
        if ($mans = $this->apiManager->getCarManufacturers()) {
            foreach ($mans as $man) {
                $manItems['Preferované'][$man->tcznacka] = $man->name;
            }
        }
        if ($mans = $this->apiManager->getCarManufacturers(0)) {
            foreach ($mans as $man) {
                if ($man->preferovana === 0) {
                    $manItems['Ostatní'][$man->tcznacka] = $man->name;
                }
            }
        }

        $form->addSelect('manufacturer', 'manufacturer', $manItems)
            ->setPrompt('Značka vozu')
            ->setAttribute('id', 'carSelectorManId');

        $form->addSelect('model', 'model')
            ->setPrompt('Model vozu')
            ->setAttribute('id', 'carSelectorModId')
            ->setDisabled();
        $form->addHidden('modelId');

        $form->addSelect('vehicle', 'vehicle')
            ->setPrompt('Motorizace')
            ->setAttribute('id', 'carSelectorVehicleId')
            ->setDisabled();

        $form->addHidden('vehicleId')
            ->setAttribute('id', 'carSelectorVehicleIdHidden');
        $form->addCheckbox('komfort', 'Vozidlo s prvky komfortní výbavy');


        $form->onSuccess[] = [$this, 'onFormSuccess'];

        return $form;
    }


    /**
     * @param Form $form
     */
    public function onFormSuccess(Form $form): void
    {
        $values = $form->getValues();
        Debugger::barDump($values, 'csValues');
        if ($model = $this->apiManager->getModelApiRow($values->manufacturer,$values->modelId)) {
            $name = $model->fullname;
        }
//        $this->saveValue(self::SESS_LAST_SEL_KEY, $name.'_'.$values->manufacturer.'_'.$values->modelId.'_'.$values->vehicleId);
        $this->onSuccess($values->manufacturer, $values->modelId, $values->vehicleId);
    }


    public function render(): void
    {
        $this->template->setFile(__DIR__ . '/CarSelector.latte');

//        if ($last = $this->loadValue(self::SESS_LAST_SEL_KEY)) {
//            $parts = explode('_', $last);
//            $this->template->lastParts = $parts;
//        }
        $this->template->render();
    }



}