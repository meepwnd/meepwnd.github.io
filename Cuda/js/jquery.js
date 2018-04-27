$( document ).ready(function () {

	// navbar navigation

	// $("section").scroll2Section({
	// 	  	menu:'nav' 
	// 	});

	// load more button
    
    $(".btn-load").css('display', 'inline-block');
	$("#loadMore").on('click', function (e) {
	  e.preventDefault();
	  $(".portfolio__item:hidden").slice(0, 2).slideDown();
	  if ($(".portfolio__item:hidden").length == 0) {
	    $("#loadMore").fadeOut('fast');
	  }
    });

	// responsive menu trigger

    $(".nav-trigger").click(function(){
    	$(".nav__menu").fadeToggle(function(){
    		$(this).toggleClass("menu-expanded").css("display", "");
    	});
    	$('.bar1, .bar2, .bar3').toggleClass('open');
    });


     // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });

    // Activate progress animation on scroll
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');


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
        topMenu = $(".nav__menu"),
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

    $("#form").validate({
 
       rules: {
       	email: {
       	 required: true,
       	 email: true
       	 },
       	name: "required",
        message: "required"
   

       }, //end rules
       messages: {
       	email: {
       	 required: "Please supply your e-mail address",
       	 email: "This is not a valid e-mail address."
       	 },
       	 name: "Please give us your name",
         message: "This field is required"

       	} // end messages

    });



});