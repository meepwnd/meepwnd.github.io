	$(document).ready(function(){

		// SCROLL BUTTONS

		$('a[href^="#"]').on('click', function(event) {
		    var target = $(this.getAttribute('href'));
		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').stop().animate({
		            scrollTop: target.offset().top
		        }, 1000);
		    }
		});

		// CUSTOMIZING SLICK SLIDER

		$('.slick-slider').slick({
		  arrows: false,
		  dots: true,
		  mobileFirst: true,
		  slidesToScroll: 3,
		  speed: 900,

		  responsive: [
		  	{
		  	  breakpoint: 1200,
		  	  settings:  {
		  	  	variableWidth: true,
		  	  	slidesToShow: 3,
		  	  	slidesToScroll: 3,
		  	  }
		  	}, 
		  	{
		        breakpoint: 991,
		        settings: {
		          slidesToShow: 3,
		          slidesToScroll: 3,
		        }
		      }, {

		        breakpoint: 575,
		        settings: {
		          slidesToShow: 2,
		          slidesToScroll: 2,
		      }
		      }, {

		        breakpoint: 0,
		        settings: {
		          slidesToShow: 1,
		          slidesToScroll: 1,
		        }

		      }]
		});

		// animations on scroll
		$(window).scroll(function (){
		        $('.animated').each(function (){
		            var offsetTop = $(this).offset().top;
		            var scrollTop = $(window).scrollTop();
		            var windowHeight = $(window).height();
		            var scrollBottom = windowHeight + scrollTop;

		            if (scrollBottom > offsetTop) {
		                $(this).addClass($(this).data('animation'));
		            }
		        });
		    }).scroll();
	      
	     $('.menu-icon').click(function(){
	     	$('.nav-list').slideToggle('slow');
	     	$('.menu-icon').toggleClass('active');
	     })

	    
	});