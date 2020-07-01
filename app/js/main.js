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

var personas__slider=[];

$('.party-personas__slider .swiper-container').each(function ( index, value) {
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


});