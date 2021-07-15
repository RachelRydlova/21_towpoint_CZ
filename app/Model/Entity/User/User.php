<?php

namespace App\Model\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * Class Test
 * @package App\Model\Entity
 * @ORM\Entity
 * @ORM\Table(name="kolize")
 */
class User
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @var int
     */
    private $id;
}