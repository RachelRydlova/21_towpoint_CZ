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
            $this->template->progress = 0;
            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('progress');
            $this->redrawControl('img');
            $this->redrawControl('model');
            $this->redrawControl('vehicle');
            $this->redrawControl('manuImg');
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
            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('model');

        }
    }


    /**
     * @param $modId
     * @throws \Throwable
     */
    public function handleSetModel($modId): void
    {
        if (!$modId) {
            $this['carSelector']['vehicle']->setItems([]);
            $this['carSelector']['vehicle']->setDisabled();
            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('vehicle');
            $this->redrawControl('img');
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
            // Hidden prvky
            $this['carSelector']['modelId']->setDefaultValue($modId);
            $this['carSelector']['vehicleId']->setDefaultValue(null);

            // Image modelu
            if ($img = $this->apiManager->getModelImage($modId)) {
                $this->template->img = $img;
                $this->redrawControl('img');
            }

            $this->redrawControl('carSelectorWrapper');
            $this->redrawControl('vehicle');
            $this->redrawControl('hiddenData');
        }
    }

    /**
     * @param $vehicleId
     * @throws \Throwable
     */
    public function handleSetMotor($vehicleId): void
    {
        $this->onSuccess($vehicleId);
    }


    /**
     * @return Form
     * @throws \Throwable
     */
    public function createComponentCarSelector(): Form
    {
        $form = new Form();

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

        $form->addSelect('manufacturer', '', $manItems)
            ->setPrompt('Značka vozu')
            ->setAttribute('id', 'imark');

        $form->addSelect('model', '')
            ->setPrompt('Model vozu')
            ->setAttribute('id', 'imodel')
            ->setDisabled();
        $form->addHidden('modelId');

        $form->addSelect('vehicle', 'vehicle')
            ->setPrompt('Motorizace')
            ->setAttribute('id', 'imotor')
            ->setDisabled();

        $form->addHidden('vehicleId')
            ->setAttribute('id', 'carSelectorVehicleIdHidden');

        $form->addCheckbox('komfort');


        $form->onSuccess[] = [$this, 'onFormSuccess'];

        return $form;
    }


    /**
     * @param Form $form
     */
    public function onFormSuccess(Form $form): void
    {
//        $values = $form->getValues();
//        Debugger::barDump($values, 'csValues');
//        if ($model = $this->apiManager->getModelApiRow($values->manufacturer,$values->modelId)) {
//            $name = $model->fullname;
//        }
//        $this->saveValue(self::SESS_LAST_SEL_KEY, $name.'_'.$values->manufacturer.'_'.$values->modelId.'_'.$values->vehicleId);
//        $this->onSuccess($values->manufacturer, $values->modelId, $values->vehicleId);
    }


    public function render(): void
    {
        $this->template->setFile(__DIR__ . '/CarSelector.latte');

        if ($last = $this->loadValue(self::SESS_LAST_SEL_KEY)) {
            $parts = explode('_', $last);
            $this->template->lastParts = $parts;
        }
        $this->template->render();
    }
    /**
     * @param string $key
     * @param string $value
     */
    public function saveValue($key,$value): void
    {
        $this->session->getSection('userSection')->$key = $value;
    }


    /**
     * @param string $key
     * @return mixed
     */
    public function loadValue($key)
    {
        return $this->session->getSection('userSection')->$key;
    }


}