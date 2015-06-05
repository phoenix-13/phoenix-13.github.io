
	$(document).ready(function () {

		$('[data-spy="scroll"]').each(function () {
			var $spy = $(this).scrollspy('refresh')
		})



		// $(window).scroll(function () {
		// 	var scrollPos = $(this).scrollTop();
		// 	$('#slider').css({
		// 		'background-position': '50% ' + (-scrollPos / 4) + "px"
		// 	});
		// 	$('#bannertext').css({
		// 		'margin-top': (scrollPos) + "px",
		// 		'opacity': 1 - (scrollPos / 250)
		// 	});
		// });

	

	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 150) {
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	        $('.navbar-brand').show();
	    } else {
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	        $('.navbar-brand').hide();
	    }
	});



	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1500);
	        return false;
	      }
	    }
	  });
	});

	// //jQuery for page scrolling feature - requires jQuery Easing plugin
	// $(function() {
	//     $('a.page-scroll').bind('click', function(event) {
	//         var $anchor = $(this);
	//         $('html, body').stop().animate({
	//             scrollTop: $($anchor.attr('href')).offset().top
	//         }, 1500, 'easeInOutExpo');
	//         event.preventDefault();
	//     });
	// });



	
	});