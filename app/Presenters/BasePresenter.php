<?php

declare(strict_types=1);

namespace App\Presenters;


use Nette\Application\UI\Presenter;


/**
 * Class BasePresenter
 * @package App\Presenters
 */
class BasePresenter extends Presenter
{


    public static $mainMenu = [
        ':Front:Default:' => 'Montáž tažných zařízení',
        ':Front:Default:how' => 'Jak to funguje',
        ':Front:Default:what' => 'Co nabízíme',
        ':Front:Default:about' => 'O nás',
        ':Front:Default:partner' => 'Pro partnery'
    ];



    public function beforeRender()
    {
        parent::beforeRender();

        // Zakladni labely
        $this->template->baseTitle = 'TowPoint';
    }

    //$ds = '<div style="color: white; background-color: black; font-size: 15px; padding: 10px;">SQ / MQ debug: <b>';
    //$dsend = '</b></div>';
    //$gdebug = 0;

    public function d($var)
    {
        echo "<pre style=\"background: #efefef; padding: 10px; margin: 5px; font-size: 11px; clear: both; color: black; text-align: left\">";
        print_r($var);
        echo "</pre>";
    }

    public function toupper($s)
    {
        $ret = mb_strtoupper($s, 'UTF-8');
//		$ret=strtr($ret,'ěščřžýáíéóúůťďňľ','ĚŠČŘŽÝÁÍÉÓÚŮŤĎŇĽ');
        return $ret;
    }

    public function tolower($s)
    {
        $ret = mb_strtolower($s, 'UTF-8');
//		$ret=strtr($ret,'ĚŠČŘŽÝÁÍÉÓÚŮŤĎŇĽ','ěščřžýáíéóúůťďňľ');
        return $ret;
    }

    public function date2stamp($datum)
    {
        list($d, $m, $y) = explode(".", $datum);
        return (mktime(0, 0, 0, $m, $d, $y));
    }

    public function adv_sort($pole, $klic, $how = true)
    {
        if (is_array($pole)) {
            $pomocne = array();
            $res = array();
            foreach ($pole as $id => $value) $pomocne[$id] = $value[$klic];
            if ($how) asort($pomocne); else arsort($pomocne);
            foreach ($pomocne as $id => $value) $res[] = $pole[$id];
            return $res;
        }
    }

    public function upravcenu($c)
    {
        list($celek, $des) = explode('.', $c);

        $cn = '';
        $slc = strlen($celek) - 1;
        for ($i = $slc; $i >= 0; $i--) $cn = (($i - $slc - 1) % 3 == 0 ? '.' : '') . $celek[$i] . $cn;
        if ($cn[0] == '.') $cn = substr($cn, 1, strlen($cn) - 1);
        if ($cn[0] == '-' && $cn[1] == '.') $cn = '-' . substr($cn, 2, strlen($cn) - 2);

        if (strlen($des) == 1) $des .= '0';
        if ($des == 0) $des = '-';

        $cenaok = $cn . ',' . $des;
        return ($cenaok);
    }

    public function upravcenu2($c)
    {
        if (strpos($c, '.')) {
            list($celek, $des) = explode('.', $c);
        } else {
            $celek = (string)$c;
            $des = NULL;
        }

        $cn = '';
        $slc = strlen($celek) - 1;
        for ($i = $slc; $i >= 0; $i--) {
            $cn = (($i - $slc - 1) % 3 == 0 ? '.' : '') . $celek[$i] . $cn;
        }
        if ($cn[0] == '.') {
            $cn = substr($cn, 1, strlen($cn) - 1);
        }
        if ($cn[0] == '-' && $cn[1] == '.') {
            $cn = '-' . substr($cn, 2, strlen($cn) - 2);
        }

        if (strlen($des) == 1) {
            $des .= '0';
        }
        //if ($des==0) $des='-';

        $cenaok = $cn . ',' . $des;
        if ($des == 0) {
            $cenaok = $cn;
        }
        return ($cenaok);
    }


    public function upravcenu3($c)
    {
        list($celek, $des) = explode('.', $c);

        $cn = '';
        $slc = strlen($celek) - 1;
        for ($i = $slc; $i >= 0; $i--) $cn = (($i - $slc - 1) % 3 == 0 ? ' ' : '') . $celek[$i] . $cn;
        if ($cn[0] == '.') $cn = substr($cn, 1, strlen($cn) - 1);
        if ($cn[0] == '-' && $cn[1] == '.') $cn = '-' . substr($cn, 2, strlen($cn) - 2);

        if (strlen($des) == 1) $des .= '0';
        //if ($des==0) $des='-';

        $cenaok = $cn . ',' . $des;
        if ($des == 0) $cenaok = $cn;
        return (str_replace(' ', '&nbsp;', trim($cenaok)));
    }


    public function pad_l($s, $num = 1)
    {
        while (strlen($s) < $num) $s = '0' . $s;
        return ($s);
    }

    public function nl2br2($s)
    {
        $s = str_replace("\r\n", '<br>', $s);
        $s = str_replace("\n", '<br>', $s);
        return $s;
    }


    public function get_unique_name($dir, $name)
    {
        $out = str_replace(' ', '-', tolower(trim_diacritics($name)));
        $out = strtr($out, '[]%', '   ');
        $out = str_replace(' ', '', $out);

        $temp = explode('.', $out);
        $suffix = end($temp);
        array_pop($temp);
        $out = implode('-', $temp) . '.' . $suffix;

        while (file_exists($dir . $out)) $out = substr(md5(microtime()), 0, 5) . $out;
        return $out;
    }

    public function resize_jpg_to_fit($input, $output, $tx, $ty, $q = 90, $interlaced = true, $position = 50)
    {
        $pos = $position / 100;

        $im = imagecreatefromjpeg($input);
        $sx = imagesx($im);
        $sy = imagesy($im);
        $ratio = $tx / $ty;
        $dst = imagecreatetruecolor($tx, $ty);
        imageinterlace($dst, $interlaced);

        $navysku = ($sy * $ratio > $sx);
        if ($navysku) {
            $srcx = 0;
            $srcy = round($sy * $pos - ($sx / $ratio * $pos));
        } else {
            $srcx = round($sx * $pos - ($sy * $ratio * $pos));;
            $srcy = 0;
        }

        if ($navysku) imagecopyresampled($dst, $im,    // na vysku
            0, 0,                                                // dst x,y
            $srcx, $srcy,                             // src x,y
            $tx, $ty,                                            // dst w,h
            $sx, $sx / $ratio);                                    // src w,h
        else imagecopyresampled($dst, $im,  // na sirku
            0, 0,                                                // dst x,y
            $srcx, $srcy,                             // src x,y
            $tx, $ty,                                            // dst w,h
            $sy * $ratio, $sy);                                    // src w,h

        imagejpeg($dst, $output, $q);
        imagedestroy($im);
        imagedestroy($dst);
        return file_exists($output);
    }

    public function resize_to_fit($input, $output, $tx, $ty, $q = 90, $interlaced = true, $position = 'center center')
    {
        return resize_jpg_to_fit($input, $output, $tx, $ty, $q, $interlaced, $position);
    }

    // corrected version (wide images are right now)
    public function resize_jpg_to_fit2($input, $output, $tx, $ty, $q = 60, $interlaced = true, $position = 50, $bgr = 255, $bgg = 255, $bgb = 255)
    {
        $pos = $position / 100;

        $im = imagecreatefromjpeg($input);
        $sx = imagesx($im);
        $sy = imagesy($im);
        $ratio = $tx / $ty;
        $dst = imagecreatetruecolor($tx, $ty);
        $colour = imagecolorallocate($dst, $bgr, $bgg, $bgb);
        imagefill($dst, 0, 0, $colour);
        imageinterlace($dst, $interlaced);

        $navysku = ($sy * $ratio > $sx);
        if ($navysku) {
            $dstx = ceil(($tx - ($sx * $ty / $sy)) * $pos);
            $dsty = 0;
        } else {
            $dstx = 0;
            $dsty = ceil($ty * $pos - ($tx / $sx * $sy * $pos));
        }

        if ($navysku) imagecopyresampled($dst, $im,
            $dstx, $dsty,
            0, 0,
            $sx * $ty / $sy, $ty,
            $sx, $sy);
        else imagecopyresampled($dst, $im,
            $dstx, $dsty,
            0, 0,
            $tx, ($tx / $sx) * $sy,
            $sx, $sy);
        imagejpeg($dst, $output, $q);
        imagedestroy($im);
        imagedestroy($dst);
        return file_exists($output);
    }

    public function resize_gif_to_fit($input, $output, $tx, $ty, $q = 60, $interlaced = true)
    {
        $im = imagecreatefromgif($input);
        $sx = imagesx($im);
        $sy = imagesy($im);
        $ratio = $tx / $ty;
        $dst = imagecreatetruecolor($tx, $ty);
        imageinterlace($dst, $interlaced);
        if ($sy * $ratio > $sx) imagecopyresampled($dst, $im, 0, 0, 0, $sy / 2 - ($sx / $ratio / 2), $tx, $ty, $sx, $sx / $ratio); else imagecopyresampled($dst, $im, 0, 0, $sx / 2 - ($sy * $ratio / 2), 0, $tx, $ty, $sy * $ratio, $sy);
        imagejpeg($dst, $output, $q);
        imagedestroy($im);
        imagedestroy($dst);
        return file_exists($output);
    }

    public function resize_png_to_fit($input, $output, $tx, $ty, $q = 60, $interlaced = true)
    {
        $im = imagecreatefrompng($input);
        $sx = imagesx($im);
        $sy = imagesy($im);
        $ratio = $tx / $ty;
        $dst = imagecreatetruecolor($tx, $ty);
        imagealphablending($dst, false);
        imagesavealpha($dst, true);
        if ($sy * $ratio > $sx) imagecopyresampled($dst, $im, 0, 0, 0, $sy / 2 - ($sx / $ratio / 2), $tx, $ty, $sx, $sx / $ratio); else imagecopyresampled($dst, $im, 0, 0, $sx / 2 - ($sy * $ratio / 2), 0, $tx, $ty, $sy * $ratio, $sy);
        imagepng($dst, $output);
        imagedestroy($im);
        imagedestroy($dst);
        return file_exists($output);
    }

    public function resize_to_max($input, $output, $mx, $my, $q = 60, $interlaced = true)
    {
        $im = imagecreatefromjpeg($input);
        $sx = imagesx($im);
        $sy = imagesy($im);
        if ($sx > $mx || $sy > $my) {
            if ($sx > $mx) {
                $dx = $mx;
                $dy = $sy * ($mx / $sx);
            } else {
                $dx = $sx;
                $dy = $sy;
            }
            if ($dy > $my) {
                $dy = $my;
                $dx = $sx * ($my / $sy);
            }
            $dst = imagecreatetruecolor($dx, $dy);
            imagecopyresampled($dst, $im, 0, 0, 0, 0, $dx, $dy, $sx, $sy);
        } else $dst = $im;
        imageinterlace($dst, $interlaced);
        imagejpeg($dst, $output, $q);
        imagedestroy($im);
        if ($dst != $im) imagedestroy($dst);
        return file_exists($output);
    }


    public function resize_gif_to_max($input, $output, $mx, $my, $q = 60, $interlaced = true)
    {
        $im = imagecreatefromgif($input);
        $sx = imagesx($im);
        $sy = imagesy($im);
        if ($sx > $mx || $sy > $my) {
            if ($sx > $mx) {
                $dx = $mx;
                $dy = $sy * ($mx / $sx);
            }
            if ($dy > $my) {
                $dy = $my;
                $dx = $sx * ($my / $sy);
            }
            $dst = imagecreatetruecolor($dx, $dy);
            imagecopyresampled($dst, $im, 0, 0, 0, 0, $dx, $dy, $sx, $sy);
        } else $dst = $im;
        imageinterlace($dst, $interlaced);
        imagejpeg($dst, $output, $q);
        imagedestroy($im);
        if ($dst != $im) imagedestroy($dst);
        return file_exists($output);
    }


    public function resize_png_to_max($input, $output, $mx, $my, $q = 60, $interlaced = true)
    {
        $im = imagecreatefrompng($input);
        $sx = imagesx($im);
        $sy = imagesy($im);
        if ($sx > $mx || $sy > $my) {
            if ($sx > $mx) {
                $dx = $mx;
                $dy = $sy * ($mx / $sx);
            }
            if ($dy > $my) {
                $dy = $my;
                $dx = $sx * ($my / $sy);
            }
            $dst = imagecreatetruecolor($dx, $dy);
            imagealphablending($dst, false);
            imagesavealpha($dst, true);
            imagecopyresampled($dst, $im, 0, 0, 0, 0, $dx, $dy, $sx, $sy);
        } else $dst = $im;
        imagepng($dst, $output);
        imagedestroy($im);
        if ($dst != $im) imagedestroy($dst);
        return file_exists($output);
    }

    public function trim_diacritics($txt)
    {
        $a = array('A', 'Á', 'Â', 'A', 'Ä', 'A', 'A', 'Ç', 'E', 'É', 'E', 'Ë', 'I', 'Í', 'Î', 'I', '?', 'N', 'O', 'Ó', 'Ô', 'O', 'Ö', 'O', 'U', 'Ú', 'U', 'Ü', 'Ý', 'ß', 'a', 'á', 'â', 'a', 'ä', 'a', 'a', 'ç', 'e', 'é', 'e', 'ë', 'i', 'í', 'î', 'i', 'n', 'o', 'ó', 'ô', 'o', 'ö', 'o', 'u', 'ú', 'u', 'ü', 'ý', 'y', 'A', 'a', 'Ă', 'ă', 'Ą', 'ą', 'Ć', 'ć', 'C', 'c', 'C', 'c', 'Č', 'č', 'Ď', 'ď', 'Đ', 'đ', 'E', 'e', 'E', 'e', 'E', 'e', 'Ę', 'ę', 'Ě', 'ě', 'G', 'g', 'G', 'g', 'G', 'g', 'G', 'g', 'H', 'h', 'H', 'h', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', '?', '?', 'J', 'j', 'K', 'k', 'Ĺ', 'ĺ', 'L', 'l', 'Ľ', 'ľ', '?', '?', 'Ł', 'ł', 'Ń', 'ń', 'N', 'n', 'Ň', 'ň', '?', 'O', 'o', 'O', 'o', 'Ő', 'ő', 'O', 'o', 'Ŕ', 'ŕ', 'R', 'r', 'Ř', 'ř', 'Ś', 'ś', 'S', 's', 'Ş', 'ş', 'Š', 'š', 'Ţ', 'ţ', 'Ť', 'ť', 'T', 't', 'U', 'u', 'U', 'u', 'U', 'u', 'Ů', 'ů', 'Ű', 'ű', 'U', 'u', 'W', 'w', 'Y', 'y', 'Y', 'Ź', 'ź', 'Ż', 'ż', 'Ž', 'ž', '?', 'f', 'O', 'o', 'U', 'u', 'A', 'a', 'I', 'i', 'O', 'o', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', '?', '?', '?', '?', '?', '?');
        $b = array('A', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'D', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'Y', 's', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'n', 'o', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'y', 'A', 'a', 'A', 'a', 'A', 'a', 'C', 'c', 'C', 'c', 'C', 'c', 'C', 'c', 'D', 'd', 'D', 'd', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'G', 'g', 'G', 'g', 'G', 'g', 'G', 'g', 'H', 'h', 'H', 'h', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'L', 'l', 'L', 'l', 'L', 'l', 'l', 'l', 'N', 'n', 'N', 'n', 'N', 'n', 'n', 'O', 'o', 'O', 'o', 'O', 'o', 'O', 'o', 'R', 'r', 'R', 'r', 'R', 'r', 'S', 's', 'S', 's', 'S', 's', 'S', 's', 'T', 't', 'T', 't', 'T', 't', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'W', 'w', 'Y', 'y', 'Y', 'Z', 'z', 'Z', 'z', 'Z', 'z', 's', 'f', 'O', 'o', 'U', 'u', 'A', 'a', 'I', 'i', 'O', 'o', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'A', 'a', 'A', 'a', 'O', 'o');
        return str_replace($a, $b, $txt);
    }

    public function email_valid($email)
    {
        return preg_match("#^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$#i", $email);
    }

    public function phone_valid($tel)
    {
        $result = preg_match("#^\+*[0-9| ]{9,}$#", $tel);
        return $result;
    }


    public function win1250_to_iso8859($s)
    {
        $s = strtr($s,
            chr(0xC1) . chr(0xC8) . chr(0xCF) . chr(0xC9) . chr(0xCC) . chr(0xCD) . chr(0xD2) . chr(0xD3) . chr(0xD8) . chr(0x8A) . chr(0x8D) . chr(0xDA) . chr(0xD9) . chr(0xDD) . chr(0x8E) . chr(0xE1) . chr(0xE8) . chr(0xEF) . chr(0xE9) . chr(0xEC) . chr(0xED) . chr(0xF2) . chr(0xF3) . chr(0xF8) . chr(0x9A) . chr(0x9D) . chr(0xFA) . chr(0xF9) . chr(0xFD) . chr(0x9E),
            chr(0xC1) . chr(0xC8) . chr(0xCF) . chr(0xC9) . chr(0xCC) . chr(0xCD) . chr(0xD2) . chr(0xD3) . chr(0xD8) . chr(0xA9) . chr(0xAB) . chr(0xDA) . chr(0xD9) . chr(0xDD) . chr(0xAE) . chr(0xE1) . chr(0xE8) . chr(0xEF) . chr(0xE9) . chr(0xEC) . chr(0xED) . chr(0xF2) . chr(0xF3) . chr(0xF8) . chr(0xB9) . chr(0xBB) . chr(0xFA) . chr(0xF9) . chr(0xFD) . chr(0xBE));
        return $s;
    }


    public function iso8859_to_win1250($s)
    {
        $s = strtr($s,
            chr(0xC1) . chr(0xC8) . chr(0xCF) . chr(0xC9) . chr(0xCC) . chr(0xCD) . chr(0xD2) . chr(0xD3) . chr(0xD8) . chr(0xA9) . chr(0xAB) . chr(0xDA) . chr(0xD9) . chr(0xDD) . chr(0xAE) . chr(0xE1) . chr(0xE8) . chr(0xEF) . chr(0xE9) . chr(0xEC) . chr(0xED) . chr(0xF2) . chr(0xF3) . chr(0xF8) . chr(0xB9) . chr(0xBB) . chr(0xFA) . chr(0xF9) . chr(0xFD) . chr(0xBE),
            chr(0xC1) . chr(0xC8) . chr(0xCF) . chr(0xC9) . chr(0xCC) . chr(0xCD) . chr(0xD2) . chr(0xD3) . chr(0xD8) . chr(0x8A) . chr(0x8D) . chr(0xDA) . chr(0xD9) . chr(0xDD) . chr(0x8E) . chr(0xE1) . chr(0xE8) . chr(0xEF) . chr(0xE9) . chr(0xEC) . chr(0xED) . chr(0xF2) . chr(0xF3) . chr(0xF8) . chr(0x9A) . chr(0x9D) . chr(0xFA) . chr(0xF9) . chr(0xFD) . chr(0x9E));
        return $s;
    }


    public function utf8_to_win1250($s)
    {
        $tr = array(
            'Ăˇ' => 'á',
            'ÄŤ' => 'č',
            'ÄŹ' => 'ď',
            'Ă©' => 'é',
            'Ä›' => 'ě',
            'Ă­' => 'í',
            'Äľ' => 'ľ',
            'Ĺ' => 'ň',
            'Ăł' => 'ó',
            'Ĺ™' => 'ř',
            'Ĺˇ' => 'š',
            'ĹĄ' => 'ť',
            'Ăş' => 'ú',
            'ĹŻ' => 'ů',
            'Ă˝' => 'ý',
            'Ĺľ' => 'ž',
            'Ă' => 'Á',
            'ÄŚ' => 'Č',
            'ÄŽ' => 'Ď',
            'Ă‰' => 'É',
            'Äš' => 'Ě',
            'ĂŤ' => 'Í',
            'Ä˝' => 'Ľ',
            'Ĺ‡' => 'Ň',
            'Ă“' => 'Ó',
            'Ĺ' => 'Ř',
            'Ĺ ' => 'Š',
            'Ĺ¤' => 'Ť',
            'Ăš' => 'Ú',
            'Ĺ®' => 'Ů',
            'Ăť' => 'Ý',
            'Ĺ˝' => 'Ž',
            'Ă¶' => 'ö'
        );

        foreach ($tr as $utf => $cz) $s = str_replace($utf, $cz, $s);
        return $s;
    }


    public function win1250_to_utf8($s)
    {
        $utf = array(
            'Ăˇ',
            'ÄŤ',
            'ÄŹ',
            'Ă©',
            'Ä›',
            'Ă­',
            'Äľ',
            'Ĺ',
            'Ăł',
            'Ĺ™',
            'ĹĄ',
            'Ăş',
            'ĹŻ',
            'Ă˝',
            'Ĺľ',
            'Ă',
            'ÄŚ',
            'ÄŽ',
            'Ă‰',
            'Äš',
            'ĂŤ',
            'Ä˝',
            'Ĺ‡',
            'Ă“',
            'Ĺ',
            'Ĺ ',
            'Ĺ¤',
            'Ăš',
            'Ĺ®',
            'Ăť',
            'Ĺ˝',
            'Ă¶',
            'Ĺˇ',
            chr(0xc3) . chr(0xbc),
            chr(0xc3) . chr(0xab),
            chr(0xc3) . chr(0xa4)
        );
        $win = array(
            'á',
            'č',
            'ď',
            'é',
            'ě',
            'í',
            'ľ',
            'ň',
            'ó',
            'ř',
            'ť',
            'ú',
            'ů',
            'ý',
            'ž',
            'Á',
            'Č',
            'Ď',
            'É',
            'Ě',
            'Í',
            'Ľ',
            'Ň',
            'Ó',
            'Ř',
            'Š',
            'Ť',
            'Ú',
            'Ů',
            'Ý',
            'Ž',
            'ö',
            'š',
            'ü',
            'ë',
            'ä'
        );

        $ds = '';

        for ($i = 0; $i <= strlen($s); $i++) {
            $chr = $s[$i];
            if (!in_array($chr, $win)) $ds .= $chr; else {
                foreach ($win as $id => $value) if ($chr == $value) $ds .= $utf[$id];
            }
        }

        return $ds;
    }


    public  function reget($items)
    {
        global $_GET;
        if (!is_array($items)) $items = explode(',', $items);

        if (count($items) > 0) foreach ($items as $item)
            $out .= $item . '=' . $_GET[$item] . '&amp;';

        return $out;
    }


    public function reget2($items)
    {
        global $_GET;
        if (!is_array($items)) $items = explode(',', $items);

        if (count($_GET) > 0) foreach ($_GET as $var => $value) if (!in_array($var, $items))
            $out .= $var . '=' . $value . '&amp;';

        return $out;
    }


    public function nlreplace($str)
    {
        //bb codes
        $bbreplace = array(
            '/\[(url|URL)=([^\]]+)\]([^\]]+)\[\/(url|URL)\]/', //url
            '/\[(img|IMG)=([^\]]+)\]([^\]]+)\[\/(img|IMG)\]/', //image
            '/\[(aimg|AIMG)=([^\]]+)\]([^\[]+)\[(url|URL)=([^\]]+)\]\[\/(aimg|AIMG)\]/', //image with link
            '/\[[Uu]\]([^\[]+)\[\/[Uu]\]/',
            '/\[[Bb]\]([^\[]+)\[\/[Bb]\]/',
            '/\[(TITLE|title)\]([^\[]+)\[\/(TITLE|title)\]/',
            '/\[[Ii]\]([^\[]+)\[\/[Ii]\]/',
            '/\[ITEM\]([^\[]+)\[\/ITEM\](\r\n)+/',
            '/\[(LIST|list)\](\r\n)*([^\[]*)\[\/(LIST|list)\](\r\n)*/',
            '/\[(eml|EML)=([^\]]+)\]([^\]]+)\[\/(eml|EML)\]/' //eml url
        );
        $bbreplacements = array(
            '<a href="\\2" title="\\2">\\3</a>', //url
            '<img src="\\2" title="\\3" alt="\\3" border="0">', //image
            '<a class="nodeco" href="\\5"><img src="\\2" title="\\3" alt="\\3" border="0"></a>', //image with link
            '<span style="text-decoration: underline">\\1</span>',
            '<strong>\\1</strong>',
            '<span class="h3">\\2</span>',
            '<em>\\1</em>',
            '<li>\\1</li>',
            '<ul>\\3</ul>',
            '<a href="mailto:\\2">\\2</a>' //eml url
        );
        $str = preg_replace($bbreplace, $bbreplacements, $str);
        //linebreaks na br
        $str = nl2br2($str);
        return $str;
    }


    public function seo_prepare($txt)
    {
        $chars = '_-–0123456789aábcčdďeěéfghiíjklľmnňoópqrřsštťuúůvwxyýzžAÁBCČDĎEĚÉFGHIÍJKLĽMNŇOÓPQRŘSŠTŤUÚŮVWXYÝZŽ ';
        $to = '---0123456789aabccddeeefghiijkllmnnoopqrrssttuuuvwxyyzzaabccddeeefghiijkllmnnoopqrrssttuuuvwxyyzz-';
        for ($i = 0; $i < strlen($txt); $i++) if (strpos($chars, $txt[$i]) !== false) $out .= $txt[$i];
        $out = mb_strtr($out, $chars, $to);
        $out = preg_replace('#-+#', '-', $out);

        return ($out);
    }

    public function mb_strtr($str, $from, $to)
    {
        return str_replace(mb_str_split($from), mb_str_split($to), $str);
    }

    public function mb_str_split($str)
    {
        return preg_split('~~u', $str, null, PREG_SPLIT_NO_EMPTY);;
    }


    public function find_url($txt)
    {
        $txt = preg_replace("#[[:alpha:]]+://[^<>[:space:]]+[[:alnum:]/]#", "<a href=\"\\0\" title=\"\\0\" target=\"_blank\">{odkaz}</a>", $txt);
        return ($txt);
    }


    public function flash_object($movie, $w, $h, $alternative = '')
    {
        $out = '
        <!--[if !IE]> -->
        <object type="application/x-shockwave-flash"
          data="' . $movie . '" width="' . $w . '" height="' . $h . '">
        <!-- <![endif]-->
        
        <!--[if IE]>
        <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
          codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"
          width="' . $w . '" height="' . $h . '">
          <param name="movie" value="' . $movie . '">
        <!--><!---->
          <param name="menu" value="false">
          <param name="wmode" value="transparent">
          <param name="quality" value="high">
          <param name="allowFullScreen" value="true">
        
          ' . $alternative . '
        </object>
        <!-- <![endif]-->';

        return $out;
    }

    public function extract_array($array, $field)
    {
        if (is_array($array)) {
            $out = array();
            foreach ($array as $item) $out[] = $item[$field];
        } else $out = false;
        return $out;
    }


    public function getid($s)
    {
        $temp = explode('-', $s);
        return $temp[count($temp) - 1] + 0;
    }


    public function lang($cz, $en = '', $de = '')
    {
        global $_SESSION;
        $out = '';
        $out = $cz;
        if ($_SESSION['lang'] == 'en') $out = $en;
        if ($_SESSION['lang'] == 'de') $out = $de;
        return $out;
    }


    public function br2p($text)
    {
        $content = trim($text);
        $odstavce = explode("\r\n\r\n", $content);

        $out = '<p>' . implode('</p><p>', $odstavce) . '</p>';
        $out = nl2br2($out);

        return $out;
    }


    public function center_div($w, $h, $obsah)
    {
        $out = '<div style="width: 100%; height: 100%; position: relative; text-align: center">
		<div style="position: absolute; top: 50%; left: 50%">
			<div style="width: ' . $w . 'px; height: ' . $h . 'px; margin: 0px auto 0px auto; position: absolute; top: -' . (round($h / 2)) . 'px; left: -' . (round($h / 2)) . 'px;">' . $obsah . '</div>
		</div>
	</div>';

        return $out;
    }


    public function subnodes($node)
    {
        $out = array();
        $items = mq("select * from `tree` where `parent`=$node");
        if (is_array($items)) {
            $items = extract_array($items, 'id');
            foreach ($items as $item) {
                $out[] = $item;
                $out = array_merge($out, subnodes($item));
            }
        }

        return $out;
    }


    public function pwd($delka = 5)
    {
        $symbols = '0123456789abcdefghijklmnopqrstuvwxyz';
        $size = strlen($symbols) - 1;
        $heslo = '';
        while (strlen($heslo) < $delka) {
            $pozice = mt_rand(0, $size);
            $heslo .= $symbols[$pozice];
        }

        return $heslo;
    }


    public function predlozky($s)
    {
        $s = str_replace(' v ', ' v&nbsp;', $s);
        $s = str_replace('(v ', '(v&nbsp;', $s);
        $s = str_replace(' V ', ' V&nbsp;', $s);
        $s = str_replace(' U ', ' U&nbsp;', $s);
        $s = str_replace(' i ', ' i&nbsp;', $s);
        $s = str_replace(' a ', ' a&nbsp;', $s);
        $s = str_replace(' A ', ' A&nbsp;', $s);
        $s = str_replace(' %', '&nbsp;%', $s);
        $s = str_replace(' (a ', ' (a&nbsp;', $s);
        $s = str_replace(' o ', ' o&nbsp;', $s);
        $s = str_replace(' s ', ' s&nbsp;', $s);
        $s = str_replace(' S ', ' S&nbsp;', $s);
        $s = str_replace(' z ', ' z&nbsp;', $s);
        $s = str_replace(' Z ', ' Z&nbsp;', $s);
        $s = str_replace(' u ', ' u&nbsp;', $s);
        $s = str_replace(' K ', ' K&nbsp;', $s);
        $s = str_replace(' k ', ' k&nbsp;', $s);
        return $s;
    }


    public function safe_out($s)
    {
        return htmlspecialchars2(stripslashes($s));
    }

    public function htmlspecialchars2($s)
    {
//		return iconv('utf-8','cp1250',htmlspecialchars(iconv('cp1250','utf-8',$s)));
        return htmlspecialchars($s);
    }


    public function capitalize($s)
    {
        $s = tolower($s);
//	    $s[0]=toupper($s[0]);
//		$first=mb_ereg_match();
//		$s=mb_ereg_replace('#^.{1}#',);
        return mb_ucfirst($s, 'utf-8');
    }

    public function mb_ucfirst($string, $encoding)
    {
        $strlen = mb_strlen($string, $encoding);
        $firstChar = mb_substr($string, 0, 1, $encoding);
        $then = mb_substr($string, 1, $strlen - 1, $encoding);
        return mb_strtoupper($firstChar, $encoding) . $then;
    }

    public function capitalize2($s)
    {
        return mb_ucfirst($s, 'utf-8');
    }


    public function insert($table, $pole)
    {
        if (is_array($pole)) {
            foreach ($pole as $key => $value) {
                $sloupce[] = "`" . $key . "`";
                $hodnoty[] = "'" . addslashes($value) . "'";
            }
            $sql = "insert into `$table` (" . implode(', ', $sloupce) . ") values (" . implode(', ', $hodnoty) . ")";
            if (!mysql_query($sql)) d(mysql_error());
        }

        return mysql_insert_id();
    }


    public function create_url($url)
    {
        if ($url == '') $url = '0';
        $url0 = $url;
        while (sq("select * from `url` where `url`='$url'")) {
            $i++;
            $url = $url0 . '-' . $i;
        }
        return $url;
    }


    public function words($w1, $w2, $w3, $count)
    {
        if ($count == 1) $out = $w1;
        if ($count >= 2 && $count <= 4) $out = $w2;
        if ($count >= 5 || $count == 0) $out = $w3;

        return $out;
    }

    public function swap(&$var1, &$var2)
    {
        $tmp = $var1;
        $var1 = $var2;
        $var2 = $tmp;
    }


    public function get_secret($params)
    {
        $hour = date('H');
        $paramsString = implode(':', $params);
        $token = urlencode(base64_encode(hash_hmac('sha1', $hour . $paramsString, 'VapolIT', true)));
//		$token=12345;
        return ($token);
    }

    /**
     * zkontroluje data kontaktniho formulare
     * @param array $pole
     * @param int $level 0 - nic se nekontroluje, 1 email a tel vyzadovan, 2 vyzadovany vsechny udaje
     * @return string
     */
    public function check_user_data($pole, $level = 1)    // vyssi level = prisnejsi
    {
        $errors = array();
        //print_r($pole);
//		if (!$pole['souhlas']) $errors[]='souhlas';
        if (!isset($pole['name'])) {
            $pole['name'] = '';
        }//notice init
        if (!isset($pole['surname'])) {
            $pole['surname'] = '';
        }//notice init

        /**
         * prozatim povinne udaje pouze email a telefon
         */

//        if ($level==2&&strlen(trim($pole['name']))<2||preg_match('#[0-9]#',$pole['name'])){ $errors[]='name';}
//        if ($level==2&&strlen(trim($pole['surname']))<2||preg_match('#[0-9]#',$pole['surname'])){ $errors[]='surname';}
        if ($level >= 1 && !email_valid($pole['email'])) {
            $errors[] = 'email';
        }
        if ($level >= 1 && !phone_valid($pole['tel'])) {
            $errors[] = 'tel';
        }
//        if ($level==2&&strlen(trim($pole['psc']))<4){ $errors[]='psc';}
//        if ($level==2&&strlen(trim($pole['mesto']))<2){ $errors[]='mesto';}

        return $errors;
    }

}
