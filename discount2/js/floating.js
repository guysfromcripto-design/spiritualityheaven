	$('.video-cover').on('click', function() {

		$(".video-overlay").show();

		$('#homevideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');    

	});

	$('.video-overlay').on('click', function() {

		$('#homevideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); 

		$(".video-overlay").hide();		

	});

	$(document).ready(function()
	{
		$(document).on('click', '#add-to-cart-btn, #add-to-cart-btn-1, #add-to-cart-btn-2, #instant-download-link, #book-img', function(e){
			var is_helpbox_open = $("#helpbox").css('display');
			if( is_helpbox_open != "block") {
				e.preventDefault();
    			$("#helpbox").show();
			}
		});

		$(document).on('click', '.help-close-btn', function(e){
			e.preventDefault();
			$("#helpbox").hide();
		});	


		var vdoWrapHt  = $('.videoWrapper2').outerHeight(true);

		var vdoWrapTop = $('.videoWrapper2').offset().top + (vdoWrapHt/2);

		$(window).scroll(function()

		{

			if(!$('.videoWrapper2').hasClass('closedvdo') && $(window).width() > 600)

			{

				if($(window).scrollTop() > vdoWrapTop){


				}else{

				}

			}

		});

		$('a.closeyt-vdo').click(function(){

			$(".videoWrapper2").removeClass('empty');

			$(".videoWrapper2").addClass('closedvdo');

		});

	});
