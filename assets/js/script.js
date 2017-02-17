$('document').ready(function(){

	$('.img_portifolio').hover(function(){
		$(this).children().toggle();

	});

	$( $('html, body')).scroll(function() {
	  alert('sss')
	});

	$(".descer").click(function(){
		var topSobre = $(sobre).position().top;
		$('html, body').animate({scrollTop:topSobre}, 'slow');
		location.href="#sobre"
	})

	$('#myNavbar>ul>li>a').click(function(){
		var targetID = '#'+$(this).data('target');
		 topDiv = $(targetID).position().top;
		 //$("a.link").attr("href", "http://www.codigosnaweb.com");
		 //alert( topDiv+'- #'+targetID)
		$('html, body').animate({scrollTop:topDiv}, 'slow');
		$(this).attr("href", targetID);
	})


});