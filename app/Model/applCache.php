<?php

namespace App\Model;


use Nette\Caching\Cache,
    Nette;

/**
 * sluzba pro vyuzivani cache v aplikaci
 * vrati systemovou cache z aplikacniho namaspace pro cache, nebo si umozni vyzadat libovolnou cache
 */
class applCache extends Cache {

    CONST applCacheName = 'htmlFront';

    /**
     *
     * @var Nette\Caching\Storages\FileStorage
     */
    protected $cacheStorage;

    /**
     * @var Nette\Caching\Cache
     */
    public $cache;

    /**
     *
     * @param \Nette\Caching\Storages\FileStorage $cacheStorage
     * @return \Nette\Caching\Cache
     */
    public function __construct(Nette\Caching\IStorage $cacheStorage) {
        $this->cacheStorage = $cacheStorage;
        return parent::__construct($this->cacheStorage, self::applCacheName);
        //$this->cache = new Cache($this->cacheStorage,  self::applCacheName);
    }

    /**
     * vrati novou Cache pro pro danou section
     * @param string $section - nazev sekce
     * @return \Nette\Caching\Cache
     */
    public function getCache($section){
        $cache = new Cache($this->cacheStorage,$section);
        return $cache;
    }

}//end class applCache...................