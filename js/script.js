/**
 * Copyright by Alexander Afanasyev
 * E-mail: blackbirdeagle@mail.ru
 * Skype: al_sidorenko1
 * */

function isEmailValid(emailAdress) {
    var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
    return EMAIL_REGEXP.test(emailAdress)
}

jQuery(function(){
    jQuery(".phone").mask("+7(999) 999-9999");
});

function move() {
    var s_w = $('.owl-dots').width() / 2;
    $('.owl-dots').css({"margin-left": -s_w + "px"});
}

move();

$(window).resize(function() {
    move();
});


$(document).ready(function() {
    var owl = $("#slider__menu");
    owl.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            576: {
                items: 4
            },
            767: {
                items: 5
            },
            991: {
                items: 6
            },
            1199: {
                items: 7
            }
        },
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev.png" />', '<img src = "images/next.png" />'],
    });

    var owl2 = $("#slider__spec");
    owl2.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            576: {
                items: 2
            },
            767: {
                items: 2
            },
            991: {
                items: 4
            },
            1199: {
                items: 4
            }
        },
        margin: 80,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" />', '<img src = "images/next1.png" />'],
    });

    var owl1 = $("#choice__spec");
    owl1.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            576: {
                items: 2
            },
            767: {
                items: 3
            },
            991: {
                items: 4
            },
            1199: {
                items: 4
            }
        },
        margin: 80,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" />', '<img src = "images/next1.png" />'],
    });


    var owl2 = $("#card__slider");
    owl2.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            576: {
                items: 1
            },
            767: {
                items: 1
            },
            991: {
                items: 1
            },
            1199: {
                items: 1
            }
        },
        margin: 80,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: true,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev2.png" />', '<img src = "images/next2.png" />'],
    });
});

$('[popup-target]').click(function(e) {
    var el = $(this);
    var target = el.attr('popup-target');

    $('.overlay').fadeIn(200, function(){
        $('.popup.'+target).fadeIn(200);
        var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
        var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
        left = left - 40;
        $('.popup.'+target).css('top', top).css('left', left);
    })


    return false;
});

$('.overlay, .close1').click(function(e) {
    var popup = $('.popup:visible');
    popup.fadeOut(200, function(){
        $('.overlay').fadeOut(200);
    });
    return false;
});

function keyExit(e){
    if(e.keyCode == 27){

        var popup = $('.popup:visible');
        popup.fadeOut(200, function(){
            $('.overlay').fadeOut(200);
        });
    }
}

addEventListener("keydown", keyExit);

$("#to__top").click(function(){
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

$('.show__menu').click(function(){
    $('.float__menu').animate({left: 0}, 300);
});

$('.hide__menu').click(function(){
    $('.float__menu').animate({left: -268}, 300);
});