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

        $router->addRoute('/', 'Front:Default:default');

        // Vlastni routy
        $router[] = new Nette\Application\Routers\Route('/karavany', 'Front:Default:karavany');
        $router[] = new Nette\Application\Routers\Route('/jak-to-funguje', 'Front:Default:how');
        $router[] = new Nette\Application\Routers\Route('/co-nabizime', 'Front:Default:what');
        $router[] = new Nette\Application\Routers\Route('/elektro', 'Front:Default:elektro');
        $router[] = new Nette\Application\Routers\Route('/nosice-kol', 'Front:Default:nosice');
        $router[] = new Nette\Application\Routers\Route('/servis-voziku', 'Front:Default:voziky');
        $router[] = new Nette\Application\Routers\Route('/o-nas', 'Front:Default:about');
        $router[] = new Nette\Application\Routers\Route('/dekujeme', 'Front:Default:thanks');
        $router[] = new Nette\Application\Routers\Route('/dekujemeZaZpravu', 'Front:Default:thanksContact');
        $router[] = new Nette\Application\Routers\Route('/navody', 'Front:Default:navody');

        $router[] = new Nette\Application\Routers\Route('/blog', 'Front:Blog:default');
        $router[] = new Nette\Application\Routers\Route('/clanek-typy-tazneho', 'Front:Blog:typyTazneho');
        $router[] = new Nette\Application\Routers\Route('/clanek-elektroinstalace', 'Front:Blog:elektroinstalace');
        $router[] = new Nette\Application\Routers\Route('/clanek-tahani', 'Front:Blog:tahani');
        $router[] = new Nette\Application\Routers\Route('/clanek-montaz', 'Front:Blog:montaz');
        $router[] = new Nette\Application\Routers\Route('/clanek-pece-o-tazne', 'Front:Blog:peceOTazne');
        $router[] = new Nette\Application\Routers\Route('/clanek-tazne-hybrid', 'Front:Blog:tazneHybrid');
        $router[] = new Nette\Application\Routers\Route('/proc-my', 'Front:Blog:procNas');

        $router[] = new Nette\Application\Routers\Route('/akce-souteze', 'Front:Default:akce');
//        $router[] = new Nette\Application\Routers\Route('/tisicovkaProTebe', 'Front:Default:akce1000montaz');
//        $router[] = new Nette\Application\Routers\Route('/vybavSeNaZimu', 'Front:Default:akceZima');
        $router[] = new Nette\Application\Routers\Route('/slevaNaNosice', 'Front:Default:akceNosice');

        $router->addRoute('<module>/<presenter>/<action>/[<id>/]', 'Front:Default:default');



        return $router;
    }
}
