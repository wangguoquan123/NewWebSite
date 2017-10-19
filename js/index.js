(function($) {

    let indexPageFun =  function() {

    };

    $.extend(indexPageFun.prototype, {

        init: () => {
            /**
             * 页面加载后执行的事件
             */

            // 首页导航栏移入移出切换的产品栏
            _$.indexPageFun.nav_product_cont_hover();
            // 初始化首页顶部轮播图
            _$.indexPageFun.init_index_carousel_figure();
        },

        nav_product_cont_hover: () => {
            // 首页导航栏移入移出切换的产品栏
            let _nav_class_item = $('.nav-class-list').children();
            $(_nav_class_item).on('mouseover', function() {
                $(_nav_class_item).removeClass('active');
                $(_nav_class_item).children('.nav-item-product').hide();
                $(this).addClass('active');
                $(this).children('.nav-item-product').show();
            });
        },

        init_index_carousel_figure: () => {
            // 初始化首页顶部轮播图
            let mySwiper = new Swiper ('.swiper-container', {
                autoplay: 2000,
                effect : 'fade',
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable :true
            });
            $('.swiper-container').on('mouseover', function() {
                mySwiper.stopAutoplay();
            }).on('mouseout', function() {
                mySwiper.startAutoplay();
            });
        }

    });

    let _$ = window;
    _$.indexPageFun = window.indexPageFun = new indexPageFun();
    _$.indexPageFun.init();

})(jQuery);