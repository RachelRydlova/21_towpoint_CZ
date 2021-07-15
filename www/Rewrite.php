<?php
$servername=$_SERVER['HTTP_HOST'];
$req_uri=$_SERVER['REQUEST_URI'];
$qs=explode('/',$req_uri);
array_shift($qs);

if (in_array($servername,array('localhost','192.168.2.103','towpoint.local')))
{





    if ($servername=='' or $servername=='towpoint.local'){//like server testing variant
        $pprefix='http://'.$servername.'/';
    }else{
        $pprefix='http://'.$servername.'/towpoint/';
        array_shift($qs);//if not like server local more, need one more shift to debug
    }
    $mode='testing';
} else
{
    $pprefix='https://www.towpoint.cz/';
    $mode='production';
}
$qs_=$qs;


$qscount=count($qs);
$lastqs=$qs[$qscount-1];
if (preg_match("#\?#",$lastqs))
{
    list($qs[$qscount-1],$getstring)=explode('?',$lastqs);
}
?>