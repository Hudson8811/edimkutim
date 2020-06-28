


$('.button-decor').click(function(){
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



  $('.party-personas__slider .swiper-container').each(function(){
    var personas__slider = new Swiper(this, {
     
    navigation: {
        nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
    },
    

  });
  });

  var party_style = new Swiper('.prizes__three-slider .swiper-container', {
    slidesPerView:3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
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
    slidesPerView:1,
    effect: 'fade',
    loop: true,
    simulateTouch: false,
    navigation: {
        nextEl: '.recept-next',
        prevEl: '.recept-prev',
    },
});

jQuery(document).ready(function(){
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
});



$(document).ready(function(){
    plansSlider = undefined;
    if ($(window).width() <= 1024)
        plansSlider = $('.catalog__slider1').slick({
            arrows: false,
            dots: true,
        });

    $(window).on('resize', function(){
        if ($(window).width() <= 1024){
            if (!plansSlider) {
                plansSlider = $('.catalog__slider').slick({
                    arrows: false,
                    dots: true,
                });
            }
        } else {
            if (plansSlider) {
                $('.catalog__slider').slick('unslick');
                plansSlider = undefined;
            }
        }
    });
});