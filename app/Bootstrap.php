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

        $configurator->enableTracy($appDir . '/log');
        $configurator->enableTracy(Debugger::$productionMode);
        // Enable Nette Debugger for error visualisation & logging
        $configurator->setDebugMode('93.89.111.34'); // Rachel VPN
        $configurator->setDebugMode('79.170.255.230'); // enable for your remote IP

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
