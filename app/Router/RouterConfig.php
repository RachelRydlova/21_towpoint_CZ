<?php

declare(strict_types=1);

namespace App\Router;

/**
 * Class RouterFactory
 * @package App\Router
 */
final class RouterConfig
{

    public static array $localDomains = [
        'cz' => self::LOCAL_DOMAIN,
        'sk' => self::LOCAL_DOMAIN_SK,
        'hu' => self::LOCAL_DOMAIN_HU
    ];

    public const LOCAL_DOMAIN  = 'towpoint.cz.local';
    public const LOCAL_DOMAIN_SK  = 'towpoint.sk.local';
    public const LOCAL_DOMAIN_HU  = 'towpoint.hu.local';
}
