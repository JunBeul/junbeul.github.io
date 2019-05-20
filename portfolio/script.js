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
		mouseDragEvents : true,
		touchEvents : false,
		arrowKeyEvents : true,
		pagination : true,
		nthClasses : false,
		detectHash : true
	});
	
	var linked = $(location).attr('href');
	
	/*if (linked.indexOf("slide-1") != -1) {
		  alert("slide-1");
		}
		else if(linked.indexOf("slide-2") != -1) {
		  alert("slide-2"); 
		}
		else {
			alert("Not Found!!");
		}*/
});