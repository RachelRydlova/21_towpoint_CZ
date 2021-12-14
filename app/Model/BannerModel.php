<?php


namespace App\Model;


/**
 * Class BannerModel
 * @package App\Model
 */

class BannerModel
{

    /**
     * vyberu nazvy souboru ve ftp/cz bez pripon
     * @return array $b, $link
     */
    public function getBannerData(){

        $d = opendir('../www/ftp/cz/');

        while ($file = readdir($d)) if ($file != '.' && $file != '..') {
            preg_match('#([0-9]{2})(-sml)?\.(jpg|mp4)#', $file, $pole);

            if ($pole) {
                $b[] = $pole[1];
                $link[$pole[1]] = $pole[3];
            }
        }
        if (is_array($b))
        {
            $b=array_unique($b);
            sort($b);
        }

        return [$b, $link];
    }


}