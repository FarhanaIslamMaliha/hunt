//banner slider
$('#banner-part').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:false,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
    }

  ]
});

//portfolio venobox
$('.venobox').venobox();

//service slider
$('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<i class="fa fa-angle-up top" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down bottom" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 arrows:false,
                dots:true,
                vertical: false,
                
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                dots:true,
                vertical: false,
            }
    }

  ]


});
$('#testi-part .left').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    asNavFor: '#testi-part .right',
    prevArrow: '<i class="fa fa-angle-up top" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down bottom" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows:true,
                dots:false,
                vertical:false,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows:true,
                dots:false,
                vertical:false,
            }
    }

  ]


});
$('#testi-part .right').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    //vertical:true,
    // centerMode:true,
    //centerPadding:0,
    fade: true,
    

});
$('.count').counterUp({
    delay: 10,
    time: 1000
});

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
});

$('.market-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots:false,
            }
    },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots:false,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots:false,
            }
    },
         {
            breakpoint: 501,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots:false,
                
                
            }
    }
     ,   {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots:false,
                
                
            }
    }

  ]
});

$(function () {
    $('.back-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });
});

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 100) {
        $('.back-top').fadeIn(500);
    } else {
        $('.back-top').fadeOut(500);
    }
          if(scrolling > 150){
          $('.menu').addClass('fixed');
      }
        else{
            $('.menu').removeClass('fixed');
        }
});

var html_body = $('html, body');
    $('.nav-item a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 85
                }, 1500);
                return false;
            }
        }
    });
$('.navbar-collapse ul li a').click(() => $('.navbar-toggler:visible').click());