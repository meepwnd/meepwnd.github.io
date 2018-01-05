
	$(document).ready(function(){

		// page scroll to images

		$('a[href^="#scroll-spy"]').on('click', function(event) {
		    var target = $(this.getAttribute('href'));
		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').stop().animate({
		            scrollTop: target.offset().top
		        },1000, 'easeOutCirc');
		    }
		});

	      
	});


    
