$(document).ready(function(){

	$('#mmenu').click(function(){
		$(this).toggleClass('sel');
		if ($(this).hasClass('sel')) $('header nav').slideDown(250); else $('header nav').slideUp(250,function(){
			$(this).attr('style','');
		});
		return false;
	});

});