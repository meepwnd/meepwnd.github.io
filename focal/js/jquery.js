
	$(document).ready(function(){

		// page scroll 

		$('a[href^="#"]').on('click', function(event) {
		    var target = $(this.getAttribute('href'));
		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').stop().animate({
		            scrollTop: target.offset().top - 68
		        }, 1000);
		    }
		});

		// sticky nav

		var navOffset = $('#nav').offset().top;

		$("#nav").wrap('<div class="nav-placeholder"></div>');
		$(".nav-placeholder").height($("#nav").outerHeight());

		$(window).scroll(function(){
			
		    if ($(window).scrollTop() >= navOffset) {
		       $('#nav').addClass('fixed');
		    }
		    else {
		       $('#nav').removeClass('fixed');
		    }
		}).scroll();
	      
	});


    
