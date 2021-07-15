var uint;
var ucint;
var conf_query;
var reqmotor;
var lastformparams;
var search_mark_req,search_mod_req,search_eng_req;
var frompreflist,frommodlist,fromenglist;
var vsechny_modely_zal,vsechny_motory_zal;

$(document).ready(function(){
	$('#form > div > div p, #form2 > div > div p').click(function(event){
		event.stopPropagation();
	});
	
/*	
	$('#form > div > div').not('.inputs').click(function(){
		$(this).toggleClass('sel');
		update_form();
		return false;
	});
*/

	$('.poptavka .yesno div, .poptavka .yesno a').click(function(){
		$(this).parent().toggleClass('sel');
		$.get(pprefix+'helpers/form.php?souhlas='+($('.poptavka .yesno').hasClass('sel')?1:0),function(data){
			aktivita();
		});
		return false;
	});
	
	$('.radios > div').not('.redukce > div').click(function(){
		if (!$(this).hasClass('sel'))
		{
			$(this).parent().find('div').removeClass('sel');
			$(this).addClass('sel');
			var co=$(this).attr('data');
			
			// preference prepina vse
/*			if ($(this).parent().hasClass('pref'))
			{
				if (co=='qnormal') $('.radios.koule, .radios.el').find('div:first-of-type a').click();
				if (co=='qbest') $('.radios.koule, .radios.el').find('div:last-of-type a').click();
			}
			*/
			// zasuvka prepina redukci
			if ($(this).parent().hasClass('el'))
			{
				$('.redukce > div').removeClass('sel');
				$('.redukce > div').each(function(){
					if ($(this).attr('data')==co) $(this).addClass('sel');
				});
			}
			
			update_conf();
		}
		
		return false;
	});
	
	$('.step1').click(function(){
		$('#form').addClass('shown');
		$('html, body').animate({ scrollTop: $("#form").offset().top }, 250);
		return false;
	});
	
	$('#form .inputs input').on('change keyup',function(event){
		if (event.keyCode==13) $(this).next().focus();
		update_form();
	});
	
	$('#form .inputs textarea').on('change keyup',function(event){
		update_form();
	});
	
	$('#form .inputs .email').focus(function(event){
		if ($(this).val()=='') $(this).val('@');
	});
	
	$('#form .cta').click(function(){
		if (uint) clearTimeout(uint);
		if (!$(this).hasClass('loading'))
		{
			do_user_form_update(true);
			$(this).addClass('loading');
		}
		return false;
	});

	$('#form2 .cta').click(function(){
//		clearTimeout(uint);
		if (!$(this).hasClass('loading'))
		{
			$(this).addClass('loading');
			$('.final_loader').stop(true).delay(1000).fadeIn(200);
			$('#form .yesno, #form .inputs > div, .poptavka .yesno').removeClass('error');
			$.get(pprefix+'helpers/inquiry.php?isf=1',function(data){
				if (data!='')
				{
					$('.final_loader').stop(true).fadeOut(200);
					pole=data.split('***');
					$('.poptavka .yesno').each(function(){
						if (pole.indexOf($(this).attr('data'))>=0) $(this).addClass('error');
					});
					$('#form input').each(function(){
						if (pole.indexOf($(this).attr('data'))>=0) $(this).parent().addClass('error');
					});
					if (pole.includes('full-data')) $('#form .inputs p.complete').show().addClass('error');
					if ($(".error").length>0) $('html, body').animate({ scrollTop: $(".error").offset().top }, 250);
					
					if (pole=='req_api'||pole=='reqid') alert('Vyskytla se chyba při předávání poptávky. Zkuste odeslat formulář později.');
				} else window.location.href=pprefix+'poptavka-prijata';
				$('#form2 .cta').removeClass('loading');
			});
		}
		return false;
	});
/*	
	$(document).on('change','#mark',function(){
		$('#model, #engine').prop('disabled',true).val(0).addClass('dis');
		$('#form, #form2').removeClass('shown');
		$('#nabidka').html('');
		$('#sel figure').slideUp(200);
		$('#sel').addClass('loading');
		sel=$(this).val();
		reqmotor=$.get(pprefix+'helpers/set_mark.php?mark='+sel,function(data){
			$('#sel').removeClass('loading');
			if (data!='')
			{
				$('#model').prop('disabled',false).html(data).removeClass('dis').val(0);
				$('#engine').prop('disabled',true).val(0).addClass('dis');
			}
		})
	});
	*/
	
	$(document).on('change','#mark',function(){
		set_mark($(this).val());
	});
	
	$(document).on('focus','#imark',function(){
		$('#selmodely, #selmotory').slideUp(300);
		$('#preffered').slideDown(300);
		mark_zal=$(this).val();
		$(this).val('');
	});
	
	$(document).on('focus','#imodel',function(){
		$('#preffered, #selmotory').slideUp(300);
		$('#selmodely').slideDown(300);
		model_zal=$(this).val();
		$(this).val('');
	});
	
	$(document).on('focus','#imotor',function(){
		$('#preffered, #selmodely').slideUp(300);
		$('#selmotory').slideDown(300);
		motor_zal=$(this).val();
		$(this).val('');
	});
	
	var vsechny_znacky_zal=$('#preffered').html();
	$(document).on('blur','#imark',function(){
		$(this).val(mark_zal);
		mb_to=setTimeout(function(){
			$('#preffered').html(vsechny_znacky_zal);
		},500);
	});
	
	vsechny_modely_zal=$('#selmodely').html();
	$(document).on('blur','#imodel',function(){
		$(this).val(model_zal);
		mb_to=setTimeout(function(){
			$('#selmodely').html(vsechny_modely_zal);
		},500);
	});
	
	vsechny_motory_zal=$('#selmotory').html();
	$(document).on('blur','#imotor',function(){
		$(this).val(motor_zal);
		mb_to=setTimeout(function(){
			$('#selmotory').html(vsechny_motory_zal);
		},500);
	});
	
	$(document).on('keyup','#imark',function(){
		if (search_mark_req) search_mark_req.abort();
		$('#imark').addClass('loading');
		search_mark_req=$.get(pprefix+'helpers/mark_search.php?q='+$(this).val(),function(data){
			$('#preffered').html(data);
			$('#imark').removeClass('loading');
		})
	});
	
	$(document).on('keyup','#imodel',function(){
		if (search_mod_req) search_mod_req.abort();
		$('#imodel').addClass('loading');
		search_mod_req=$.get(pprefix+'helpers/mod_search.php?q='+$(this).val(),function(data){
			$('#selmodely').html(data);
			$('#imodel').removeClass('loading');
		})
	});
	
	$(document).on('keyup','#imotor',function(){
		if (search_eng_req) search_eng_req.abort();
		$('#imotor').addClass('loading');
		search_eng_req=$.get(pprefix+'helpers/eng_search.php?q='+$(this).val(),function(data){
			$('#selmotory').html(data);
			$('#imotor').removeClass('loading');
		})
	});
/*	
	$(document).on('click','#preffered a',function(){
		$('#model, #engine').prop('disabled',true).val(0).addClass('dis');
		$('#form, #form2').removeClass('shown');
		$('#nabidka').html('');
		$('#sel figure').slideUp(200);
		$('#sel').addClass('loading');
		sel=$(this).attr('data-id');
		$('#imark').val($(this).attr('title'));
		reqmotor=$.get(pprefix+'helpers/set_mark.php?mark='+sel,function(data){
			$('#sel').removeClass('loading');
			if (data!='')
			{
				$('#model').prop('disabled',false).html(data).removeClass('dis').val(0);
				$('#engine').prop('disabled',true).val(0).addClass('dis');
				$('#preffered').slideUp(300);
				$('html, body').animate({ scrollTop: $(".subn.step11").offset().top }, 250);
			}
		})
		return false;
	});
	*/

	
	$(document).on('click','#preffered a',function(){
		frompreflist=true;
		set_mark($(this).attr('data-id'));
		return false;
	});
	
	$(document).on('click','#selmodely a',function(){
		frommodlist=true;
		set_model($(this).attr('data-id'));
		return false;
	});
	
	$(document).on('click','#selmotory a',function(){
		fromenglist=true;
		set_engine($(this).attr('data-id'));
		return false;
	});
	
	$(document).on('change','#model',function(){
		frommodlist=false;
		set_model($(this).val());
	});
	
	$(document).on('change','#engine',function(){
		set_engine($(this).val());
	});

	$(document).on('click', '#komfort a', function () {
		$(this).toggleClass('sel');
		$.get(pprefix + 'helpers/set_komfort.php?stav=' + $(this).hasClass('sel'), function () {
			if ($('#engine').val() > 0) set_engine($('#engine').val());
		});
		return false;
	});


	$('#topSlide .next, #topSlide .prev').click(function () {
		return false;
	});
});



function set_mark(mid)
{
	$('#mark').val(mid);
	$('#imark').val($('#preffered a.mark'+mid).attr('title'));
	$('#model, #engine').prop('disabled',true).val(0).addClass('dis');
	$('#imodel, #imotor').prop('disabled',true).val('').addClass('dis');
	$('#form, #form2').removeClass('shown');
	$('#nabidka').html('');
	$('#sel figure').slideUp(200);
	$('#selmodely').slideUp(300);
	$('#sel').addClass('loading');
	sel=mid;
	reqmotor=$.get(pprefix+'helpers/set_mark.php?mark='+sel,function(data){
		$('#sel').removeClass('loading');
		if (data!='')
		{
			pole=data.split(String.fromCharCode(0,0,0));
			$('#model').prop('disabled',false).html(pole[0]).removeClass('dis').val(0);
			$('#selmodely').html(pole[1]);
			vsechny_modely_zal=pole[1];
			$('#imodel').prop('disabled',false).val('').removeClass('dis');
			$('#engine').prop('disabled',true).val(0).addClass('dis');
			$('#preffered').slideUp(300);
			$('html, body').animate({ scrollTop: $(".subn.step11").offset().top }, 250);
			if (frompreflist) $('#imodel').focus();
		}
	});
}


function set_model(mid)
{
	$('#model').val(mid);
	$('#imodel').val($('#selmodely a.model'+mid).attr('title'));
	$('#engine').prop('disabled',true).val(0).addClass('dis');
	$('#imotor').prop('disabled',true).val('').addClass('dis');
	$('#form, #form2').removeClass('shown');
	$('#nabidka').html('');
	$('#sel, #sel figure').addClass('loading');
	$('#sel figure img').animate({opacity: 0},200);
	sel=mid;
	if (reqmotor) reqmotor.abort();
	reqmotor=$.get(pprefix+'helpers/set_model.php?model='+sel,function(data){
		$('#sel').removeClass('loading');
		if (data!='')
		{
			pole=data.split(String.fromCharCode(0,0,0));
			$('#engine').prop('disabled',false).html(pole[0]).removeClass('dis').val(0);
			$('#imotor').prop('disabled',false).removeClass('dis');
			$('#preffered, #selmodely').slideUp(300);
			if (pole[1]!='')
			{
				$('#sel figure').show();
				var alt=$('#imark').val()+' '+$('#imodel').val();
				$('#sel figure img').attr('src',pole[1]).attr('alt',alt).on('load',function(){
					$('#sel figure img').stop().animate({opacity: 1},200);
					$('#sel figure').removeClass('loading');
				});
			} else $('#sel figure').hide();
			$('#selmotory').html(pole[2]);
			vsechny_motory_zal=pole[2];
			if (frommodlist) $('#imotor').focus();
		} else $('#sel figure').slideUp(200);
	})
	$('html, body').animate({ scrollTop: $(".subn.step11").offset().top }, 250);
}


function set_engine(mid)
{
	$('#engine').val(mid);
	$('#imotor').val($('#selmotory a.motor'+mid).attr('title'));
	$('#sel').addClass('loading');
	$('#selmotory').slideUp(300);
	sel=mid;
	
	if (sel==0)
	{
		$('#form, #form2').removeClass('shown');
		$('#nabidka').html('');
	}
	
	if (reqmotor) reqmotor.abort();
	reqmotor=$.get(pprefix+'helpers/set_motor.php?motor='+sel,function(data){
          // Pro test
		console.log(data);
          if (data == '101') {
              window.location.href = 'https://towpoint.cz/test';
          }
          update_conf();
		$('#sel').removeClass('loading');
		if (sel==0) $('#form, #form2').removeClass('shown');
		pole=data.split('***');
		if (pole[0]=='1')
		{
			$('#form').addClass('shown');
//			$('html, body').animate({ scrollTop: $("#form").offset().top }, 250);
			if (pole[1]=='1') $('#form2').addClass('shown'); else $('#form2').removeClass('shown');
		} else $('#form, #form2').removeClass('shown');
	})
}


$(window).load(function(){
	
	if ($('.iosSlider .slider .item').length>=1)
	{
		$('.iosSlider').iosSlider({
			snapToChildren: true,
			infiniteSlider: true,
			desktopClickDrag: true,
			navNextSelector: $('#topSlide .next'),
			navPrevSelector: $('#topSlide .prev'),
			autoSlide: true,
			autoSlideTimer: 5000,
			onSlideChange: schange
		});

		$('#topSlide .item').fadeIn(200);
	}

	if ($('.iosSlider .slider .item').length > 1) $('#topSlide .next, #topSlide .prev').fadeIn(200);
});


function schange(arg)
{
	if (arg.currentSlideObject.hasClass('video')) $(arg.currentSlideObject).find('video').get(0).play();
}


function update_form()
{
	clearTimeout(uint);
	uint=setTimeout('do_user_form_update(false)',200);
}

function update_conf_form()
{
	clearTimeout(ucint);
	uint=setTimeout('update_conf()',200);
}


function do_user_form_update(isf)
{
	var req='';
	$('#form .inputs p.complete').removeClass('error').hide();
/*	$('#form .yesno, #form2 .yesno, .poptavka .yesno').each(function(){
		req=req+$(this).attr('data')+'='+($(this).hasClass('sel')?1:0)+'&';
	});
	req=req+'kvalita='+$('#form2 .radios.pref .sel').attr('data')+'&';
	req=req+'koule='+$('#form2 .radios.koule .sel').attr('data')+'&';
	req=req+'el='+$('#form2 .radios.el .sel').attr('data')+'&';*/
	$('#form .inputs input, #form .inputs textarea').each(function(){
		req=req+$(this).attr('data')+'='+encodeURIComponent($(this).val())+'&';
	});
	
	if (isf) $('#form .inputs > div, .poptavka .yesno').removeClass('error');
	
	if (lastformparams!=req||isf)
	{
		$.get(pprefix+'helpers/form.php?'+req,function(data){
			$('#form .cta').removeClass('loading');
			
			if (isf)
			{
				if (data!='')
				{
					pole=data.split('***');
					$('#form .yesno, .poptavka .yesno').each(function(){
						if (pole.indexOf($(this).attr('data'))>=0) $(this).addClass('error');
					});
					$('#form input').each(function(){
						if (pole.indexOf($(this).attr('data'))>=0) $(this).parent().addClass('error');
					});
					if ($(".error").length>0) $('html, body').animate({ scrollTop: $(".error").offset().top }, 250);
					$('#form2').removeClass('shown');
					$('#nabidka').html('');
				} else
				{
					$('#form2').addClass('shown');
					$('html, body').animate({ scrollTop: $("#form2").offset().top }, 250);
					update_conf();
				}
			}
			aktivita();
		});
		lastformparams=req;
	}
	
//	alert(req);
//	console.log(req);
}




function do_send_inquiry()
{
	var req='';
	$('#form .yesno, #form2 .yesno, .poptavka .yesno').each(function(){
		req=req+$(this).attr('data')+'='+($(this).hasClass('sel')?1:0)+'&';
	});
	req=req+'kvalita='+$('#form2 .radios.pref .sel').attr('data')+'&';
	req=req+'koule='+$('#form2 .radios.koule .sel').attr('data')+'&';
	req=req+'el='+$('#form2 .radios.el .sel').attr('data')+'&';
	$('#form .inputs input, #form .inputs textarea').each(function(){
		req=req+$(this).attr('data')+'='+encodeURIComponent($(this).val())+'&';
	});
	
	if (isf)
	{
		req=req+'final=1';
	}
	
	$.get(pprefix+'helpers/form.php?'+req,function(data){
		$('#form .cta').removeClass('loading');
		if (isf)
		{
			$('#form .yesno, #form .inputs > div, .poptavka .yesno').removeClass('error');
			if (data!='')
			{
				pole=data.split('***');
				$('#form .yesno, .poptavka .yesno').each(function(){
					if (pole.indexOf($(this).attr('data'))>=0) $(this).addClass('error');
				});
				$('#form input').each(function(){
					if (pole.indexOf($(this).attr('data'))>=0) $(this).parent().addClass('error');
				});
				if ($(".error").length>0) $('html, body').animate({ scrollTop: $(".error").offset().top }, 250);
				
				if (pole=='req_api'||pole=='reqid') alert('Vyskytla se chyba při předávání poptávky. Zkuste odeslat formulář později.');
			} else window.location.href=pprefix+'poptavka-prijata';
		}
	});
	
//	alert(req);
//	console.log(req);
}


function update_conf()
{
	$('#nabidka').addClass('loading');
	if (conf_query) conf_query.abort();
	conf_query=$.get(pprefix+'helpers/get_conf.php?carid='+$('#engine').val()+'&pref='+$('.radios.pref .sel').attr('data')+'&koule='+$('.radios.koule .sel').attr('data')+'&el='+$('.radios.el .sel').attr('data'),function(data){
		$('#nabidka').removeClass('loading');
		$('#nabidka').replaceWith(data);
		aktivita();
	});
}




function aktivita()
{
	$.get(pprefix+'helpers/inquiry.php');
}