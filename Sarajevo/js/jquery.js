$(document).ready(function(){

		// adding styles to navbar when scroll
		
	    $(window).on('scroll', function() {
	        $('.navbar-inverse').toggleClass('scroll', $(document).scrollTop() > 0);
	    }).scroll();
	})