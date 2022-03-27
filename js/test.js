$(document).ready(function() {

	//nicescroll 
	$("body").niceScroll();


	$(".carousel-inner > .item > img, .carousel-inner > .item > a > img").css({
		"height":$(window).height(),
		"width":$(window).width()
		})

	$('.carousel').carousel({
	  interval: 1000
	})


	//show color option when click to gear
	$(".gear-check").click(function(){
		$(".option-box .color-option").fadeToggle()
	})

	//change theme color on click
	$(".color-option ul li")
		.eq(0).css("backgroundColor","#E41b17").end()
		.eq(1).css("backgroundColor","#E426D5").end()
		.eq(2).css("backgroundColor","#009AFF").end()
		.eq(3).css("backgroundColor","#FFD500");


	$(".color-option ul li").click(function() {
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	})


	/*$(window).on('load', function(){ 
       $("body").css('overflow','auto');
       $(".loading-overlay").fadeOut(1000);
    });*/


    //show scroll to top button
    var button=$("#scroll-top");
    $(window).scroll(function() {
    	if($(this).scrollTop()>=700){
    		button.show();
    	}else{
    		button.hide();
    	}
    })
    //click in button to scroll top
    button.click(function(){
    		$("html,body").animate({scrollTop:0},600);
    	})

})