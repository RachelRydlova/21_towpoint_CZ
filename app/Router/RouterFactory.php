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
        $router[] = new Nette\Application\Routers\Route('/jak-to-funguje', 'Front:Default:how');
        $router[] = new Nette\Application\Routers\Route('/co-nabizime', 'Front:Default:what');
        $router[] = new Nette\Application\Routers\Route('/o-nas', 'Front:Default:about');
        $router[] = new Nette\Application\Routers\Route('/servis-voziku', 'Front:Default:service');
        $router[] = new Nette\Application\Routers\Route('/pro-partnery', 'Front:Default:partner');
        $router[] = new Nette\Application\Routers\Route('/dekujeme', 'Front:Default:thanks');

        $router->addRoute('<module>/<presenter>/<action>/[<id>/]', 'Front:Default:default');




        return $router;
	}
}
