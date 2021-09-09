<?php

declare(strict_types=1);

namespace App\Presenters;


use Nette\Application\UI\Presenter;
use App\Model\BannerModel;
use App\Model\ApiManager;


/**
 * Class BasePresenter
 * @package App\Presenters
 */
class BasePresenter extends Presenter
{


    public static $mainMenu = [
        ':Front:Default:' => 'Montáž tažných zařízení',
        ':Front:Default:how' => 'Jak to funguje',
        ':Front:Default:what' => 'Co nabízíme',
        ':Front:Default:service' => 'Servis vozíků',
        ':Front:Default:about' => 'O nás',
        ':Front:Default:partner' => 'Pro partnery'
    ];


    public function beforeRender()
    {
        parent::beforeRender();

        // Zakladni labely
        $this->template->baseTitle = 'TowPoint';
    }

}