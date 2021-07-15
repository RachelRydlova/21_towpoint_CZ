<?php
	Header('Content-type: text/css');
	for ($i=1;$i<=80;$i++)
	{
		$d=rand(-40,0);
		echo '#map .img > div.m'.$i.'::after
{
	animation-delay: '.$d.'s;
	-webkit-animation-delay: '.$d.'s;
}

';
	}
?>