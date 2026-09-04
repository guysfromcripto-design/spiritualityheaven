$(window).scroll(function () {

	var scroll = $(window).scrollTop();

/*	if (scroll > '20') {

		$('.navbar-light').addClass('nav-white');

	} else if (scroll < '20') {

		$('.navbar-light').removeClass('nav-white');

	}
*/
});

$(".SlickCarousel").slick({

	prevArrow: $(".slick-arrow-left"),

		nextArrow: $(".slick-arrow-right"),

	autoplay: false,

	autoplaySpeed: 5000, //  Slide Delay

	speed: 800, // Transition Speed

	slidesToShow: 1, // Number Of Carousel

	slidesToScroll: 1, // Slide To Move

	arrows: true,

	centerMode: true,

    centerPadding: '20%',

	responsive: [

	    {

			breakpoint: 1600,

			settings: {

				centerPadding: '10%',

			}

		},

		{

			breakpoint: 1024,

			settings: {

				centerMode: false,

				slidesToShow: 1,

			}

		},

		{

			breakpoint: 767,

			settings: {

				slidesToShow: 1,

				centerMode: false

			}

		},

	],

});

/* ============= Page ScrollSpy =========*/

$(document).ready(function () {

	'use strict';

	$(window).on('load', function () {

		$('body').scrollspy({

			target: '#nav-main',

			offset: 70

		});

	});

	$('.page-scroll').bind('click', function (event) {

		var $anchor = $(this);

		if ($(window).width() > 768) {

			$('html, body').stop().animate({

				scrollTop: $($anchor.attr('href')).offset().top - 65

			}, 1500, 'easeInOutExpo');

			event.preventDefault();

		} else {



			if ($(window).width() < 768) {

				$(".navbar-toggler").click();

				$('html, body').stop().animate({

					scrollTop: $($anchor.attr('href')).offset().top - 50

				}, 1500, 'easeInOutExpo');



				event.preventDefault();

			}

		}



	});



});

