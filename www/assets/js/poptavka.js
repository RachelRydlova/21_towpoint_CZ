$(document).ready(function(){
	$('a.mailbox').click(function(){
		$(this).addClass('sent');
		$.get(pprefix+'helpers/poptavka-email.php');
		return false;
	});
});