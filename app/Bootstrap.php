<?php

declare(strict_types=1);

namespace App;

use Nette\Bootstrap\Configurator;


class Bootstrap
{
	public static function boot(): Configurator
	{

        // Configure application
        $configurator = new Configurator;


		$appDir = dirname(__DIR__);

        $configurator->enableTracy($appDir . '/log');
        // Enable Nette Debugger for error visualisation & logging
        $configurator->setDebugMode('93.89.111.34'); // Vapol IP

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
