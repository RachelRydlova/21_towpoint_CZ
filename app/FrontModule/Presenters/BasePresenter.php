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
        ':Front:Default:karavany' => 'Montáž pro karavany',
        ':Front:Default:how' => 'Jak to funguje',
        ':Front:Default:what' => 'Co nabízíme',
        ':Front:Default:nosice' => 'Nosiče kol',
        ':Front:Default:voziky' => 'Servis vozíků',
        ':Front:Default:about' => 'O nás',
        ':Front:Default:partner' => 'Pro partnery'
    ];


    public function beforeRender(): void
    {

        // Zakladni labely
        $this->template->baseTitle = 'TowPoint';

    }

}