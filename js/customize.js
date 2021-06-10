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
    // 水利故事輪播
    // 
    $('.special_pic').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 
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
        autoplay: true, //自動播放
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
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
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
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
    //匯出
    $('.bookexport').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    /*-----------------------------------*/
    /////////////modal設定/////////////
    /*-----------------------------------*/
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
    // 會員選單
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
    // 往下滾
    $('.scrollDownbtn01').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.mpdata').offset().top - 110 }, 0, 'easeOutExpo');
    });
    $('.scrollDownbtn02').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.publications_block').offset().top - 90 }, 0, 'easeOutExpo');
    });
    // 收合書目table
    $('.bibliography_block .collapse_btn').click(function() {
        $(this).next('.bibliography').slideToggle()
        $(this).toggleClass('closebtn');
    })
    // 收合書目table2 館藏查詢
    $('.bibliography_block2 .collapse_btn').addClass('closebtn');
    $('.list_file').first().children('.bibliography_block2').find('.collapse_btn').removeClass('closebtn');
    $('.bibliography_block2 .collapse_btn').click(function() {
        $(this).next('.bibliography').slideToggle()
        $(this).toggleClass('closebtn');
        $(this).parents('.list_file').siblings().find('.bibliography').slideUp();
        $(this).parents('.list_file').siblings().find('.collapse_btn').addClass('closebtn');
    })

    // 分類篩選
    // 不需要做開合效果 20210531
    // $('.category_block .collapse_btn').click(function() {
    //     $('.category_block .category').slideToggle(); 2
    //     $(this).toggleClass('closebtn');
    // })
    // 行動版時「分類篩選」做開合效果 20210607
    var _filterByCate = $('.category_block').find('.category');
    _filterByCate.each(function(){
        _this = $(this);
        _this.find('.blockHead').append('<button class="ctrl" type="button"></button>');
        let _slideCtrl = _this.find('.ctrl');
        let _slideBlock = _this.find('ul');
        _slideCtrl.click( function(){
            if(_slideBlock.is(':visible')){
                _slideBlock.slideUp();
                $(this).removeClass('toClose')
            } else {
                _slideBlock.slideDown();
                $(this).addClass('toClose');
            }
        });

        let _cateItem = _slideBlock.find('li');
        _slideCtrl.text(_cateItem.filter('.active').find('a').text());
        _cateItem.find('a').click(function(){
            _slideCtrl.text($(this).text());
            $(this).parent().addClass('active').siblings().removeClass('active');
        })
    })

    // 燈箱
    $('[data-fancybox]').fancybox({
        toolbar: false,
        smallBtn: true,
        iframe: {
            preload: false
        }
    })
    // 燈相進頁面就打開
    $.fancybox.open($("#lightbox_style03"))
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
    // cp頁標籤雲 左欄分類
    var _sortlist_btn = $('.sortlistblock .title .collapse_btn');
    $('.sortlistblock').first().find('.collapse_btn').addClass('openbtn');
    _sortlist_btn.click(function() {
        $(this).parent('.title').next('.sortlist_options').slideToggle();
        $(this).toggleClass('openbtn');
        $(this).parents('.sortlistblock').siblings().find('.sortlist_options').slideUp();
        $(this).parents('.sortlistblock').siblings().find('.collapse_btn').removeClass('openbtn')
    })
    // 條件選項
    $('.conditional_options').click(function() {
        $('.leftblock_sort').toggleClass('open')
    })
    // 增加標籤
    // $('.addtag_block').hide();
    // $('.addtagbtn').click(function() {
    //     $('.addtag_block').css('display', 'inline-block');
    //     $(this).hide();
    // })
    // $('.addinput').click(function() {
    //     $('.addoption').slideToggle();
    // })
    // $('.addbtn').click(function() {
    //     $('.addtag_block').hide();
    //     $('.addtagbtn').show();
    //     $('.addoption').hide();
    // })
    // $('.closebtn').click(function() {
    //     $('.addtag_block').hide();
    //     $('.addtagbtn').show();
    //     $('.addoption').hide();
    // })
    //左欄 資料fixed
    $(window).on("scroll resize", function() {
        var mainleftblock = $(".mainleftblock");
        let mainleftcontent = $(".mainleftcontent");
        if (mainleftblock.length > 0 && mainleftcontent.length > 0) {
            let myWidth = mainleftblock.width();
            if ($(window).scrollTop() > mainleftblock.offset().top - 80) {
                mainleftcontent.addClass('fixed');
                // mainleftcontent.css('width', myWidth);
            } else {
                mainleftcontent.removeClass('fixed');
                mainleftcontent.removeAttr('style');
            }
        }
        if ($(window).scrollTop() + document.documentElement.clientHeight > $("footer").offset().top) {
            mainleftcontent.height($("footer").offset().top - $(window).scrollTop() - 120);
        } else {
            mainleftcontent.height(document.documentElement.clientHeight - 120);
        }
    })



    /*-----------------------------------*/
    ///////////////// 20210531 ////////////
    /*-----------------------------------*/
    // 從 hyui.js 複製過來的變數
    var _window = $(window),
        ww = _window.outerWidth(),
        wh = _window.height(),
        _body = $('body'),
        wwNormal = 1400,
        wwMedium = 992,
        wwSmall = 768,
        wwxs = 576;

    var resizeTimer;
    _window.resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            ww = _window.outerWidth();
            if (ww >= wwSmall) {
                _filterByCate.find('ul').removeAttr('style');
                _filterByCate.find('.ctrl').removeClass('toClose');
            }
        }, 150);
    });

    //////////////////////////////////////////////////////////////////
    // 20210531 新增 /////////////////////////////////////////////////
    // 2021 編輯播放清單名稱和說明文字 ///////////////////////////////
    var _editable = $('.editable');
    _editable.each(function(){
        let _this = $(this);
        let _textarea = _this.find('textarea');
        let _editBtn  = _this.find('.editThis');
        let _submitBtn  = _this.find('.submit');

        _editBtn.click(function(){
            $(this).hide();
            _submitBtn.show();
            _textarea.removeAttr('readonly');
        })
        _submitBtn.click(function () {
            $(this).hide();
            _editBtn.show();
            _textarea.attr('readonly', 'readonly').scrollTop(0);
        })

    })


    // 2021 通用開合效果 ///////////////////////////////
    var _toggleCtrl = $('.toggleCtrl');
    var _toggleArea = $('.toggleArea');
    var slideSpeed = 500;
    _toggleCtrl.each(function(){
        let _this = $(this);
        let _target = _toggleArea.filter(_this.attr('data-targetId'));

        _this.click(function(){
            if ( _target.is(':visible') ){
                _target.stop(true, false).slideUp(slideSpeed);
                _this.removeClass('toClose');
            } else {
                _target.stop(true, false).slideDown(slideSpeed);
                _this.addClass('toClose');
            }
        })

        // 針對有「送出、取消」等 button 的 slide
        if ( _target.find('.btn_grp').length > 0) {
            let _otherToggleCtrl = _toggleArea.find('.btn_grp').find('input[data-toggleClose]');
            _otherToggleCtrl.click(function(){
                _target.slideUp(slideSpeed, function(){
                    _this.removeClass('toClose');
                });
            })
        }


    })


    // 20210610 影片 box hover 時
    var _vBox = $('.special_video').find('.box>a');
    _vBox.find('.funcIcons').find('button').click(function(e){
        e.preventDefault();
    })
    _vBox.hover(
        function(){
            let _videofuncIcons = $(this).find('.funcIcons');
            _videofuncIcons.show(0, function(){
                _videofuncIcons.addClass('show');
            });
        },
        function(){
            let _videofuncIcons = $(this).find('.funcIcons');
            _videofuncIcons.removeClass('show');
            setTimeout( function(){ _videofuncIcons.removeAttr('style')}, 310 );
        }
    )


});







/////////////////////////////////////////
$(function() {
    // 增加標籤
    $('.addtagbtn').click(function() {
        $('.addtag_block').css('display', 'inline-block');
        $(this).hide();
        $(this).parents('.list_file').siblings().find('.addtag_block').css('display', 'none')
    })
    $('.addinput').click(function() {
        $('.addoption').slideToggle();
    })
    $('.addbtn').click(function() {
        $('.addtag_block').hide();
        $('.addtagbtn').show();
        $('.addoption').hide();
    })
    $('.closebtn').click(function() {
        $('.addtag_block').hide();
        $('.addtagbtn').show();
        $('.addoption').hide();
    })
})
$(function() {
    //分頁
    $('.number01').click(function() {
        $('.number01').hide();
        $('.page').addClass('page02');
    })
    $('#closebtn').click(function() {
        $('.number01').show();
        $('.page').removeClass('page02');
    })
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
// 標籤雲判斷
$(function() {
    var containerW = $('.tag_cloud').parents('.container').width();
    if (containerW <= 1200) {
        $('.tag_cloud').addClass('line3');
    } else {
        $('.tag_cloud').removeClass('line3');
    }
    // $(window).on('load resize', function () {
    // });
})
// 標籤雲更多
$(function() {
    $('.tag_cloud > .more > a').click(function() {
        $('.tag_cloud').toggleClass('line0');
        $(this).parents('.col').siblings().children('.tag_cloud').removeClass('line0')
    })
})
// 手機版將wow效果關掉
// $(function() {
//     if(('.wow').length>0){
//         $(this).removeClass('wow');
//     }
// });