<?php

declare(strict_types=1);

namespace App\Router;

use Nette;
use Nette\Application\Routers\RouteList;


final class RouterFactory
{
    use Nette\StaticClass;

    public static function createRouter(): RouteList
    {
        $router = new RouteList;

        $langsToDomains = [
            RouterConfig::LOCAL_DOMAIN => "cz",
            RouterConfig::LOCAL_DOMAIN_SK => "sk",
            RouterConfig::LOCAL_DOMAIN_HU => "hu",
        ];

        $localMask = '//towpoint.<lang>.local';

        $router->addRoute($localMask, 'Front:Default:default');

        // Vlastni routy
        $router[] = new Nette\Application\Routers\Route($localMask.'/karavany', 'Front:Default:karavany');
        $router[] = new Nette\Application\Routers\Route($localMask.'/jak-to-funguje', 'Front:Default:how');
        $router[] = new Nette\Application\Routers\Route($localMask.'/co-nabizime', 'Front:Default:what');
        $router[] = new Nette\Application\Routers\Route($localMask.'/elektro', 'Front:Default:elektro');
        $router[] = new Nette\Application\Routers\Route($localMask.'/nosice-kol', 'Front:Default:nosice');
        $router[] = new Nette\Application\Routers\Route($localMask.'/nosice-kol-multipa', 'Front:Default:nosiceMul');
        $router[] = new Nette\Application\Routers\Route($localMask.'/nosice-kol-westfalia', 'Front:Default:nosiceWest');
        $router[] = new Nette\Application\Routers\Route($localMask.'/nosice-kol-buzzrack', 'Front:Default:nosiceBuzz');
        $router[] = new Nette\Application\Routers\Route($localMask.'/nosice-kol-yakima', 'Front:Default:nosiceYak');
        $router[] = new Nette\Application\Routers\Route($localMask.'/servis-voziku', 'Front:Default:voziky');
        $router[] = new Nette\Application\Routers\Route($localMask.'/o-nas', 'Front:Default:about');
        $router[] = new Nette\Application\Routers\Route($localMask.'/pro-partnery', 'Front:Default:about');
        $router[] = new Nette\Application\Routers\Route($localMask.'/dekujeme', 'Front:Default:thanks');
        $router[] = new Nette\Application\Routers\Route($localMask.'/dekujemeZaZpravu', 'Front:Default:thanksContact');
        $router[] = new Nette\Application\Routers\Route($localMask.'/navody', 'Front:Default:navody');

        $router[] = new Nette\Application\Routers\Route($localMask.'/kodovani-elektroinstalace', 'Front:Blog:kodovani');
        $router[] = new Nette\Application\Routers\Route($localMask.'/vyplneni-formulare', 'Front:Blog:jakNaFormular');
        $router[] = new Nette\Application\Routers\Route($localMask.'/blog', 'Front:Blog:default');
        $router[] = new Nette\Application\Routers\Route($localMask.'/clanek-typy-tazneho', 'Front:Blog:typyTazneho');
        $router[] = new Nette\Application\Routers\Route($localMask.'/clanek-elektroinstalace', 'Front:Blog:elektroinstalace');
        $router[] = new Nette\Application\Routers\Route($localMask.'/clanek-tahani', 'Front:Blog:tahani');
        $router[] = new Nette\Application\Routers\Route($localMask.'/clanek-montaz', 'Front:Blog:montaz');
        $router[] = new Nette\Application\Routers\Route($localMask.'/clanek-pece-o-tazne', 'Front:Blog:peceOTazne');
        $router[] = new Nette\Application\Routers\Route($localMask.'/clanek-tazne-hybrid', 'Front:Blog:tazneHybrid');
        $router[] = new Nette\Application\Routers\Route($localMask.'/proc-my', 'Front:Blog:procNas');
        $router[] = new Nette\Application\Routers\Route($localMask.'/zaruka-po-montazi', 'Front:Blog:zaruka');
        $router[] = new Nette\Application\Routers\Route($localMask.'/vyber-tz-elektroinstalace', 'Front:Blog:vyberTzAEl');

        $router[] = new Nette\Application\Routers\Route($localMask.'/akce-souteze', 'Front:Default:akce');
        $router[] = new Nette\Application\Routers\Route($localMask.'/darkove-poukazy', 'Front:Default:akcePoukazy');
        $router[] = new Nette\Application\Routers\Route($localMask.'/sleva-na-nosice', 'Front:Default:akceNosice');
        $router[] = new Nette\Application\Routers\Route($localMask.'/vanocni-soutez', 'Front:Default:akceSoutez');
        $router[] = new Nette\Application\Routers\Route($localMask.'/akce-souteze', 'Front:Default:akce');
//        $router[] = new Nette\Application\Routers\Route('/tisicovkaProTebe', 'Front:Default:akce1000montaz');
//        $router[] = new Nette\Application\Routers\Route('/vybavSeNaZimu', 'Front:Default:akceZima');
        $router[] = new Nette\Application\Routers\Route($localMask.'/slevaNaNosice', 'Front:Default:akceNosice');

        $router->addRoute('<module>/<presenter>/<action>/[<id>/]', 'Front:Default:default');



        return $router;
    }
}
