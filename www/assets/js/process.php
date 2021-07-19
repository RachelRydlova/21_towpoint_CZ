<?php
	switch (implode('/',$qs))
	{
		case '':
			$secret=get_secret(array('onlyFavorities'=>'0'));
			$url='http://www.vapol.cz/remote-cars/manufacturers?onlyFavorities=0&secret='.$secret;
//			d($url);
			$data=json_decode(file_get_contents($url));
			$znacky=$data->data;
		
			if ($_SESSION['znacka']>0)
			{
				$secret=get_secret(array('tcznacka'=>$_SESSION['znacka']));
				$url='http://www.vapol.cz/remote-cars/models-by-manufacturer?tcznacka='.$_SESSION['znacka'].'&secret='.$secret;
				$data=json_decode(file_get_contents($url));
				$modely=$data->data;
				foreach ($modely as $key=>$value) if ((int)substr($value->from,0,4)<1990) unset($modely[$key]);
			}
			
			if ($_SESSION['model']>0)
			{
				$motory=array();
				$secret=get_secret(array('tcmodel'=>$_SESSION['model']));
				$url='http://www.vapol.cz/remote-cars/vehicles-by-model/?tcmodel='.$_SESSION['model'].'&secret='.$secret;
				$data=json_decode(file_get_contents($url));
				$motory0=$data->data;
				foreach ($motory0 as $typ=>$item)
				{
					foreach ($item as $item0) $motory[]=$item0;
				}
				$ismotory=(count($motory)>0);
			}
		break;
		
		case 'pro-partnery':
			$post=$_POST;
//			d($_POST);
			$errors=array();
			
			if (is_array($post['form_data']))
			{
				$pole=$post['form_data'];
				if (strlen(trim($pole['name']))<2||preg_match('#[0-9]#',$pole['name'])) $errors[]='name';
				if (strlen(trim($pole['surname']))<2||preg_match('#[0-9]#',$pole['surname'])) $errors[]='surname';
				if (!email_valid($pole['email'])) $errors[]='email';
				if (strlen(trim($pole['vzkaz']))<2) $errors[]='vzkaz';
//				if (strlen(trim($pole['psc']))<4) $errors[]='psc';
//				if (strlen(trim($pole['mesto']))<2) $errors[]='mesto';

				if (count($errors)==0)
				{
					$pole2=array('fullname'=>$pole['name'].' '.$pole['surname'],
					'position'=>$pole['position'],
					'firma'=>$pole['nazev'],
					'mesto'=>$pole['mesto'],
					'psc'=>$pole['psc'],
					'email'=>$pole['email'],
					'vzkaz'=>$pole['vzkaz']);
					$url='https://reva.vapol.cz/api/api/request-towpoint-partner-contact/?token='.get_secret(array($rqid));
					$ch = curl_init();
					curl_setopt($ch, CURLOPT_URL,$url);
					curl_setopt($ch, CURLOPT_POST, 1);
					curl_setopt($ch, CURLOPT_POSTFIELDS, ($pole2));
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
				//	curl_setopt($ch, CURLINFO_HEADER_OUT, true);
					$html = curl_exec($ch);
				//	$info = curl_getinfo($ch,CURLINFO_HEADER_OUT);
					curl_close ($ch);
					
					$odp=json_decode($html);
					$sentok=($odp->response->code==200);
//					d($sentok);
				}
			}
		break;
	}
?>