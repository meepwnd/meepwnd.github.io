$(document).ready(function(){

	// fixing bug with borders in ie
	 $("img").css("border-color", "#fff");


	// side menu

    $(".primary-list li").click(function(){
        $(this).children(".secondary-list").slideToggle();
        $(this).siblings().children("ul:visible").hide(); 
    });


    // responsive nav hide

		$(".header-menu-trigger").click(function(){
			$("header nav").slideToggle(function(){
				$(this).toggleClass("menu-expanded").css("display", "");
			})
		})


    var navOffset = $(".top-menu").offset().top;

    // $(".top-menu").wrap('<div class="nav-placeholder"></div>');
    // $(".nav-placeholder").height($(".top-menu").outerHeight());

    $(".top-menu").wrapInner('<div class="nav-inner"></div>');
    $(window).scroll(function() {
    	var scrollPos = $(window).scrollTop();

    	if (scrollPos >= navOffset) {
    		$(".top-menu").addClass("fixed");
    	} else {
    		$(".top-menu").removeClass("fixed");
    	}
    });

      
});

	

    
