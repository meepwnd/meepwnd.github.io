$(document).ready(function(){

		// adding styles to navbar when scroll
		$(window).scroll(function(){
			
		    if ($(window).scrollTop() >= 1) {
		       $('.nav').addClass('scroll');
		    }
		    else {
		       $('.nav').removeClass('scroll');
		    }
		}).scroll();
	    

	    // // page scroll to images

	    $('a[href^="#scrollspy"]').on('click', function(event) {
	        var target = $(this.getAttribute('href'));
	        if( target.length ) {
	            event.preventDefault();
	            $('html, body').stop().animate({
	                scrollTop: target.offset().top
	            }, 1000);
	        }
	    });

	   // Cache selectors
	   var lastId,
	       topMenu = $(".nav-menu"),
	       topMenuHeight = topMenu.outerHeight()+15,
	       // All list items
	       menuItems = topMenu.find("a"),
	       // Anchors corresponding to menu items
	       scrollItems = menuItems.map(function(){
	         var item = $($(this).attr("href"));
	         if (item.length) { return item; }
	       });



	   // Bind to scroll
	   $(window).scroll(function(){
	      // Get container scroll position
	      var fromTop = $(this).scrollTop()+topMenuHeight;
	      
	      // Get id of current scroll item
	      var cur = scrollItems.map(function(){
	        if ($(this).offset().top < fromTop)
	          return this;
	      });
	      // Get the id of the current element
	      cur = cur[cur.length-1];
	      var id = cur && cur.length ? cur[0].id : "";
	      
	      if (lastId !== id) {
	          lastId = id;
	          // Set/remove active class
	          menuItems
	            .parent().removeClass("active")
	            .end().filter("[href='#"+id+"']").parent().addClass("active");
	      }                   
	   });

	       // responsive nav hide

	   		$(".nav-menu-trigger").click(function(){
	   			$(".nav-menu").fadeToggle(function(){
	   				$(this).toggleClass("menu-expanded").css("display", "");
	   			});
	   			$('.bar1, .bar2, .bar3').toggleClass('change');
	   		});



	
	    
	})