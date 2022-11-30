<?php


namespace App\Model\Context;


/**
 * Object udrzuje datovou strukturu z Api Requestu
 * Class ApiNomen
 * @package App\Model\Context
 */
class ApiNomen
{

    public $id;
    public $nazev;
    public $popis;
    public $vyrobce;
    public $sklad;
    public $kategorie;
    public $cena;

    public $prilohy = [];

}