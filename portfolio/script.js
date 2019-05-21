$(document).ready(function() {
	var slider = $.fn.fsvs({
		speed : 700,
		bodyID : 'fsvs-body',
		selector : '> .slide',
		mouseSwipeDisance : 40,
		afterSlide : function(){},
		beforeSlide : function(){},
		endSlide : function(){},
		mouseWheelEvents : true,
		mouseWheelDelay : false,
		scrollableArea : 'scrollable',
		mouseDragEvents : false,
		touchEvents : false,
		arrowKeyEvents : true,
		pagination : true,
		nthClasses : false,
		detectHash : true
	});
	
	var linked = $(location).attr('href');
	
	/*if (linked.indexOf("slide-1") != -1) {
		alert("slide-1");
	} else if(linked.indexOf("slide-2") != -1) {
		alert("slide-2"); 
	} else {
		alert("Not Found!!");
	}*/
	
	var url = "https://junbeul.github.io/portfolio/index.html";
	
	$('.facebook').click(function(){
		window.open("http://www.facebook.com/sharer.php?u="+url, 300, 250);
	});
	$('.twitter').click(function(){
		window.open("http://twitter.com/intent/tweet?text="+url, 300, 250);
	});
	$('.Google_plus').click(function(){
		window.open("https://plus.google.com/share?url="+url, 300, 250);
	});
});
