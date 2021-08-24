<?php

namespace App;


use App\FrontModule\components\CarSelector;

/**
 * Interface ICarSelectorFactory
 * @package App
 */
interface ICarSelectorFactory
{
    /** @return CarSelector */
    public function create(): CarSelector;
}