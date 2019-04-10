$( document ).ready(function(){
	$( window ).scroll( function() {
		if ($( this ).scrollTop() > 300) {
			$('.top').css("opacity", 1);
		} else {
			$('.top').css("opacity", 0);
		}
	});
	$( '.top' ).click( function() {
		$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
		return false;
	});
	var a = 1;
	$('.navIcon').click(function(){
		if(a == 0) {
			$('.navIcon').removeAttr("style");
			$('.icon1').removeAttr("style");
			$('.icon3').removeAttr("style");
			$('.navList').removeAttr("style");
			a++;
		}
		else if(a == 1){
		   $('.navIcon').css({
            "transform": "rotate(270deg)",
			});
			$('.icon1').css({
				"transform": "rotate(45deg)",
				"width": "20px",
				"top": "40%"
			});
			$('.icon3').css({
				"transform": "rotate(-45deg)",
				"width": "20px",
				"top": "25%"
			});
			$('.navList').css({
				"display": "block",
				"height": "100%"
			});
			a = 0
		}
	});
});
