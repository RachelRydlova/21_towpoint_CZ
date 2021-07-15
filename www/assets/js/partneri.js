$(document).ready(function(){
	$('#form .cta').click(function(){
		$('#form form').submit();
		return false;
	});
	
	$('#form .email').focus(function(event){
		if ($(this).val()=='') $(this).val('@');
	});
});