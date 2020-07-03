$('.button-decor').click(function () {
	$(".header__logo").addClass("header__logo--js-active")
});



var party_style = new Swiper('.party-style .swiper-container', {
	// pagination: {
	//     el: '.swiper-pagination',
	//     type: 'fraction',
	//   },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var party_style = new Swiper('.prizes__single-slider .swiper-container', {
	// pagination: {
	//     el: '.swiper-pagination',
	//     type: 'fraction',
	//   },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var personas__slider = [];

$('.party-personas__slider .swiper-container').each(function (index, value) {
	personas__slider[index] = new Swiper(value, {

		navigation: {
			nextEl: $(value).parent().find('.swiper-button-next'),
			prevEl: $(value).parent().find('.swiper-button-prev'),
		},


	});
});

$('.party-personas__image-container--add').click(function () {
	if ($('.party-personas__slider--active').length < 6) {
		var index = $('.party-personas__slider:not(.party-personas__slider--active):not(.party-personas__slider--add):first')
			.addClass('party-personas__slider--active')
			.index();
		setTimeout(function () {
			personas__slider[index].update();
			//personas__slider.destroy(false);
			//personas__slider.init();
		}, 700);

	}
	console.log($('.party-personas__slider--active:not(.party-personas__slider--add)').length);
	if ($('.party-personas__slider--active:not(.party-personas__slider--add)').length == 6) {
		$('.party-personas__slider--add').removeClass('party-personas__slider--add');
	}
});
var party_style = new Swiper('.prizes__three-slider .swiper-container', {
	slidesPerView: 2,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 3,
		},
	}
});


//   $('.prizes__single-slider .swiper-container').each(function(){
//     var prizes__single_slider = new Swiper(this, {

//     navigation: {
//         nextEl: $(this).parent().find('.swiper-button-next'),
//         prevEl: $(this).parent().find('.swiper-button-prev'),
//     },


//   });
//   });

//   document.getElementById("pct").addEventListener("change", function () {
//     if (this.files[0]) {
//       var fr = new FileReader();

//       fr.addEventListener("load", function () {
//         document.getElementById("label-for-pct").style.backgroundImage = "url(" + fr.result + ")";
//       }, false);

//       fr.readAsDataURL(this.files[0]);
//     }
//   });


var wow = new WOW({

});
new WOW().init();


var receptsSlider = new Swiper('.recepts__slider .swiper-container', {
	slidesPerView: 1,
	effect: 'fade',
	loop: true,
	simulateTouch: false,
	navigation: {
		nextEl: '.recept-next',
		prevEl: '.recept-prev',
	},
});

jQuery(document).ready(function () {
	jQuery('.scrollbar-macosx').scrollbar();
	$('#recepts').addClass('hide');
});

$('.recepts__close').click(function () {
	event.preventDefault();
	$('#recepts').addClass('hide');
});

$('.js-show-recepts').click(function () {
	event.preventDefault();
	$('#recepts').removeClass('hide');
	$('.header').removeClass('active');
});




$(document).ready(function () {
	function colRec() {
		$('.recepts__left').each(function () {
			$(this).find('.recepts__col-2 .recepts__ind').addClass('moved');
			var right = $(this).find('.recepts__col-1')
			$(this).find('.moved').appendTo(right);
		});
	};

	function colRecBack() {
		$('.recepts__left').each(function () {
			var right = $(this).find('.recepts__col-2')
			$(this).find('.moved').appendTo(right);
			$(this).find('.recepts__col-2 .recepts__ind').removeClass('moved');
		});
	};


	plansSlider = undefined;
	if ($(window).width() <= 1024) {
		plansSlider = $('.catalog__slider').slick({
			arrows: true,
			dots: false,
			slidesToShow: 2,
			slidesToScroll: 2
		});
		colRec();
	}


	$(window).on('resize', function () {
		if ($(window).width() <= 1024) {
			if (!plansSlider) {
				plansSlider = $('.catalog__slider').slick({
					arrows: true,
					dots: false,
					slidesToShow: 2,
					slidesToScroll: 2
				});
				colRec();
			}
		} else {
			if (plansSlider) {
				$('.catalog__slider').slick('unslick');
				plansSlider = undefined;
				colRecBack();
			}
		}
	});

	$('.header__burger').click(function () {
		$('.header').addClass('active');
	});
	$('.header__close').click(function () {
		$('.header').removeClass('active');
	});

	$('.js-dot').click(function () {
		$(this).closest('.dot').toggleClass('active');
	});


	/* Отображение кнопки на первой странице */
	if ($('input[name="radio1"]:checked').length == 1 && $('input[name="radio2"]:checked').length == 1) {
		$('.first-step-next-btn--disabled').removeClass('first-step-next-btn--disabled');
	}

	$('input[name="radio1"], input[name="radio2"]').change(function () {
		if ($('input[name="radio1"]:checked').length == 1 && $('input[name="radio2"]:checked').length == 1) {
			$('.first-step-next-btn--disabled').removeClass('first-step-next-btn--disabled');
		}
	});
	/* Конец Отображение кнопки на первой странице */


	///////////////Код страницы с коллажами

	if ($('.js-collage-page').length > 0) {
		/*console.log(localStorage.getItem("party_settings"));
			{"sauce":"sauce-2","mazik":"mazik-4","party_style":"gatsby","selectedPersonas":[["img/personas/1.png","m-1","мика"],["img/personas/1.png","m-1","миклухо"],["img/personas/1.png","m-1","Фёдор"],["img/personas/1.png","m-1","Иван"],["img/personas/2.png","w-1","Анька"],["img/personas/2.png","w-1","Алёна"]]}


		*/
		var party_settings = JSON.parse(localStorage.getItem("party_settings"));
		//console.log(party_settings);
		if (party_settings) {
			$('.collage-recipe-pics__pic--sauce').attr('src', 'img/sau_and_maz/' + (party_settings['sauce']) + '.png');
			$('.collage-recipe-pics__pic--mayonnaise').attr('src', 'img/sau_and_maz/' + (party_settings['mazik']) + '.png');
		}
		var party_style = party_settings['party_style'];
		$('.wrapper--collage').removeClass('.wrapper--collage-hawaii').addClass(party_styles[party_style]);

		var recipe = $('.collage-recipe-pics__pic--pizza');
		recipe.attr('src', recipe.attr('src') + party_recipe[party_style]);

		$('.collage-recipe-info__name').html(party_recipe_name[party_style]);

		$('.collage-recipe-info__view').attr('href', party_recipe_link[party_style]);

		$('.collage-info__go-link').attr('href', party_box_link[party_style]);




		setTimeout(function () {
			$('.wrapper--collage').addClass('wrapper--collage-visible');
		}, 200);



	}
});

function makeLocalStorageAndGo() {
	var sauce = $('input[name="radio1"]:checked').val(),
		mazik = $('input[name="radio2"]:checked').val();
	var party_style = $('.party-style__slider .swiper-slide.swiper-slide-active .party-style__slide-name').attr('data-party-stile-id');


	var selectedPersonas = [];
	$('.party-personas__slider.party-personas__slider--active .swiper-slide.swiper-slide-active img').each(function (index, element) {
		selectedPersonas[index] = [];
		selectedPersonas[index][0] = $(this).attr('src');
		selectedPersonas[index][1] = $(this).attr('data-head-id');
		selectedPersonas[index][2] = $(this).closest('.party-personas__slider').find('.party-personas__name').val();
	});

	var party_settings = {
		sauce: sauce,
		mazik: mazik,
		party_style: party_style,
		selectedPersonas: selectedPersonas
	};

	localStorage.setItem('party_settings', JSON.stringify(party_settings));
	document.location.href = "/collage.html";
	/*party_settings = JSON.parse(localStorage.getItem("party_settings"));
	console.log(party_settings);*/

	return true;
}