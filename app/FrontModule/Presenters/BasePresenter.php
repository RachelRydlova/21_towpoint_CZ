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
        ':Front:Default:' => 'Chci nabídku',
        ':Front:Default:what' => 'Co nabízíme',
//        ':Front:Default:karavany' => 'Montáž pro karavany',
//        ':Front:Default:voziky' => 'Servis vozíků',
//        ':Front:Default:nosice' => 'Nosiče kol',
        ':Front:Default:how' => 'Jak to funguje',
        ':Front:Default:about' => 'O nás',
        ':Front:Default:partner' => 'Blog'
    ];


    public function beforeRender(): void
    {

        // Zakladni labely
        $this->template->baseTitle = 'TowPoint';

    }

}