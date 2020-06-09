// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        // mobileFirst: true,
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
        responsive: [{
            breakpoint: 767,
            settings: {
                vertical: false,
            }
        }]
    });
    $(".slick-arrow").attr("tabindex", 0);
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
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 480,
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
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    // cp圖片輪播
    // 請放置customize.js
    // 廣告輪播
    $('.cppic').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
    $('.modal').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal').prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
    $('.modal_overlay').hide(); //隱藏透明底
    // nokeyword按鈕動作
    $('#nokeyword').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal() {
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
$(function() {
    $('.name_login').click(function() {
        $('.member_menu').stop().slideToggle();
        $(this).stop().toggleClass('open');
    })
    // 如果點在外面
    $('.main').off().on('click touchend', function(e) {
        $('.member_menu').stop().slideUp();
    });
    $('.memberCtrl').click(function() {
        $('.member_menu').stop().slideToggle();
    })
})
// 往下滾
$(function() {
    $('.scrollDownbtn01').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.mpdata').offset().top - 110 }, 0, 'easeOutExpo');
    });
    $('.scrollDownbtn02').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.publications_block').offset().top - 90 }, 0, 'easeOutExpo');
    });
})
// 收合書目table
$(function() {
    $('.bibliography_block .collapse_btn').click(function() {
        $(this).next('.bibliography').slideToggle()
        $(this).toggleClass('closebtn');
        $(this).parents('.list_file').siblings().find('.bibliography').slideUp();
        $(this).parents('.list_file').siblings().find('.collapse_btn').removeClass('closebtn');
    })
})
$(function() {
    $('.category_block .collapse_btn').click(function() {
        $('.category_block .category').slideToggle()
        $(this).toggleClass('closebtn');
    })
})
// 燈箱
$(function() {
    $('[data-fancybox]').fancybox({
        toolbar: false,
        smallBtn: true,
        iframe: {
            preload: false
        }
    })
})
// 燈相進頁面就打開
$(function() {
    $.fancybox.open($("#lightbox_style03"))
})
$(function() {
    //進階查詢資料 
    $('.advancedbtn').click(function() {
        $('.form_advanced').stop().slideDown(700);
        $('.searchsystem .onlysearch').hide();
        $('.searchsystem .onlysearchin').show();
        $('.searchsystem .simple_search_btn').hide();
        $('.searchsystem .simplebtn').show();
        $('.searchsystem .advancedbtn').hide();
    })
    $('.simplebtn').click(function() {
        $('.form_advanced').stop().slideUp(700);
        $('.searchsystem .onlysearch').show();
        $('.searchsystem .onlysearchin').hide();
        $('.searchsystem .simple_search_btn').show();
        $('.searchsystem .simplebtn').hide();
        $('.searchsystem .advancedbtn').show();
    })
    // 出版年度
    $("#slider-range").slider({
        range: true,
        min: 1900,
        max: 2017,
        values: [1900, 2017],
        slide: function(event, ui) {
            $("#amount").val(+ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + " - " + $("#slider-range").slider("values", 1));
    // 分類list
    $('.sortlist_block .sortlist').hide();
    $('.sortlist_block h3').click(function() {
        $(this).next('.sortlist').slideToggle();
        $(this).parents().siblings().children('.sortlist').stop().slideUp();
        $(this).children('a').toggleClass('turnicon');
        $(this).parents().siblings().children('h3').children('a').removeClass('turnicon');
    })
})
//分頁
$(function() {
    $('.number01').click(function() {
        $('.number01').hide();
        $('.page').addClass('page02');
    })
    $('#closebtn').click(function() {
        $('.number01').show();
        $('.page').removeClass('page02');
    })
})
$(function() {
    if ($(".page").is(":visible")) {
        $(window).scroll(function() {
            var pageLeft = $(".page").offset().left;
            var scrollTop = $(window).scrollTop();
            var viewportHeight = $(window).height();
            if ((scrollTop + viewportHeight) > ($("#showPage").offset().top + 50)) {
                $(".page").removeClass("fixed");
            } else {
                $(".page").addClass("fixed");
            }
        })
    }
})
// 手機版將ㄊwow效果關掉
// $(function() {
//     if(('.wow').length>0){
//         $(this).removeClass('wow');
//     }
// });