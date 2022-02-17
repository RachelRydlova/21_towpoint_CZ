<?php

declare(strict_types=1);

namespace App;

use Nette\Bootstrap\Configurator;
use Tracy\Debugger;


class Bootstrap
{
	public static function boot(): Configurator
	{

        // Configure application
        $configurator = new Configurator;


		$appDir = dirname(__DIR__);

//         Enable Nette Debugger for error visualisation & logging
        $configurator->setDebugMode(array('93.89.111.34')); // Vapol IP
        $configurator->enableTracy($appDir . '/log');

		$configurator->setTimeZone('Europe/Prague');
		$configurator->setTempDirectory($appDir . '/temp');

		$configurator->createRobotLoader()
			->addDirectory(__DIR__)
			->register();

		$configurator->addConfig($appDir . '/config/common.neon');
		$configurator->addConfig($appDir . '/config/local.neon');


		return $configurator;
	}
}
