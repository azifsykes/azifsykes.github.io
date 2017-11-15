$(document).ready(function(){

	// nav
	$('.nav-slide').click(function(e){
		var linkHref = $(this).attr('href');
		//console.log($(linkHref).offset().top);
		
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		});

		e.preventDefault();
	});

	// scrolltop
	// check if window is on top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200){
			$('.scroll-top').show();
		} else {
			$('.scroll-top').hide();
		}
	});

	// click top scroll top
	$('.scroll-top').click(function(){
		$('html, body').animate({scrollTop : 0}, 800);
		return false;
	})




	// slider
	// variables
	var btnList = $('.btns-wrapper > li');
	var clickedBtn = $('.btns-wrapper > .active-btn');
	var imgWrapper = $('.img-wrapper');
	var imgList = $('.img-wrapper > li');
	var activeImg  = imgWrapper.find('.active');

	// show active img on page load
	activeImg.show();

	btnList.on('click', function(){
		// remove class from active btn
		btnList.removeClass('active-btn');
		// add class to clicked btn
		$(this).addClass('active-btn');

		// update clicked btn variable
		clickedBtn = $('.btns-wrapper .active-btn');

		// fadeout active img
		activeImg.fadeOut(550, function(){
			// remove current active img
			imgList.removeClass('active');

			// get index of clicked btn
			var clickedBtnIndex = clickedBtn.index();

			// add class active to corresponding img
			imgList.eq(clickedBtnIndex).addClass('active');

			// update new active img
			activeImg = $('.img-wrapper .active');

			// fadein active img
			activeImg.fadeIn(550);
		});
	});
});