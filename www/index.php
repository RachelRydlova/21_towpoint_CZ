<?php


// absolute filesystem path to this web root
define('WWW_DIR', __DIR__);


require __DIR__ . '/../vendor/autoload.php';

App\Bootstrap::boot()
    ->createContainer()
    ->getByType(Nette\Application\Application::class)
    ->run();
