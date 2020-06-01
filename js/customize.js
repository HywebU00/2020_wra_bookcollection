// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        vertical: true, //垂直滑動
        autoplaySpeed: 3000,
        // speed: 500,
        autoplay: true,
        // fade: true,  淡入
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        prevArrow: '<div type="button"  tabindex="0" class="slick-prev Btn-prev"><a href="#">魚仔《想要回家》</a></div>',
        nextArrow: '<div type="button" tabindex="0"  class="slick-next Btn-next"><a href="#">曾文之眼藝文活動</a></div>',
    });
    $(".slick-arrow").attr("tabindex", 0);
    // 廣告輪播
    // $('.adSlider').slick({
    //     mobileFirst: true,
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     arrow: true,
    //     lazyLoaded: true,
    //     lazyLoad: 'ondemand',
    //     ease: 'ease',
    //     responsive: [{
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 1,
    //             arrows: true
    //         }
    //     }, {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             arrows: true
    //         }
    //     }, {
    //         breakpoint: 575,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             arrows: true
    //         }
    //     }]
    // });
    // 廣告輪播
    $('.adSlider').slick({
        dots: false,
        infinite: true,
        autoplay: true, //自動播放
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                   
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint:767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint:575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                }
            }
            , {
                breakpoint:480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });
    $('.movieslider_block').slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 3000,
        // speed: 500,
        autoplay: false,
        // fade: true,  淡入
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
    });
    // 出版品
    $('.books').slick({
        dots: true,
        infinite: true,
        autoplay: true, //自動播放
        autoplaySpeed: 3000,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                   
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint:767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint:575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:3,
                }
            }
            , {
                breakpoint:480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                }
            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});

/*-----------------------------------*/
/////////////modal設定/////////////
/*-----------------------------------*/
$(function() {
    $('#modal1').hide();
   
    //先隱藏視窗
    $('.modal').after('<div class="modal_overlay"></div>');                             //新增透明底
    $('.modal').prepend('<button type="button" class="close">關閉</button>');           //新增關閉按鈕
    $('.modal_overlay').hide();                                                         //隱藏透明底
    // nokeyword按鈕動作
    $('#nokeyword').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal1').fadeOut();
        $('.modal_overlay').fadeOut();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal .close').click(closeModal);
    $('.modal .btn_grp input[type="submit"]').click(closeModal);

});

// 會員選單
$(function(){
    $('.name_login').click(function(){
        $('.member_menu').stop().slideToggle();
        $(this).stop().toggleClass('open');
    })
    // 如果點在外面
    $('.main').off().on('click touchend', function(e) {
        $('.member_menu').stop().slideUp();
        
    });

    $('.memberCtrl').click(function(){
        $('.member_menu').stop().slideToggle();
    })
})

// 往下滾
$(function(){
    $('.scrollDownbtn01').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.mpdata').offset().top - 110 }, 0, 'easeOutExpo');
    });
    $('.scrollDownbtn02').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.publications_block').offset().top - 90 }, 0, 'easeOutExpo');
    });
    
})
// 收合書目table
$(function(){
    $('.bibliography_block .collapse_btn').click(function(){
        $(this).next('.bibliography').slideToggle()
        $(this).toggleClass('close');
        // $(this).parents('.list_file').siblings().find('.bibliography').show();
        // $(this).parents('.list_file').siblings().find('.collapse_btn').addClass('close');
    })
})
$(function(){
    $('.category_block .collapse_btn').click(function(){
        $('.category_block .category').slideToggle()
        $(this).toggleClass('close');
        
    })
})

// 燈箱
$(function(){
    $('[data-fancybox]').fancybox({
    toolbar  : false,
    smallBtn : true,
    iframe : {
        preload : false
    }
})
})
