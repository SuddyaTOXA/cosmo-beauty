jQuery(document).ready(function( $ ) {

    // for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });

    // for smooth scroll
    smoothScroll.init({
        selector: '.smooth-scroll, a', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInQuad', // Easing pattern to use
        offset: 130 // Integer. How far to offset the scrolling anchor location in pixels
    });


    // for header-fixed padding
    var header = $('#header');
    $(window).on('load resize', function() {
        setTimeout(function() {
            var headerHeight = header.outerHeight();
            $(document.body).children('.wrapper').css('padding-top', headerHeight);
        }, 10);
    });
    // for header scrolling class
    $(window).on('load scroll resize', function() {
        var st2 = $(this).scrollTop();

        if (st2 > 0)
            header.addClass('scrolling');
        else
            header.removeClass('scrolling');
    });


    // for select language
    $('.language-box-title').click(function() {
        var menuShow = $(this).find('.drop-down-list'),
            menuBtn = $(this).find('.drop-down-btn');

        menuBtn.toggleClass('active');
        menuShow.slideToggle(500);

    });

    //for banner slider
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoHeight: true,
        effect: 'fade',
        autoplay: 7000,
        loop: true,
        paginationClickable: true
    });

    $(window).on('load resize', function() {
        var socialFooter = $('.footer-social'),
            leftBox = $('.footer-coll-list .left'),
            rightBox = $('.footer-coll-list .right');

        if ($(window).width() <= '1024') {
            socialFooter.appendTo(rightBox);
        } else {
            socialFooter.appendTo(leftBox);
        }
    });

    $('.btn-group').click(function() {
        var menuShow = $(this).find('.drop-down-list'),
            menuBtn = $(this).find('.drop-down-btn');

        menuBtn.toggleClass('active');
        menuShow.slideToggle(500);
    });

    $(document).mouseup(function(e){
        var o=$('.btn-group'),
            i=$('.drop-down-list');
        0===o.has(e.target).length&&i.slideUp(500);
    });

    //for table
    $(window).on('load resize', function() {
        var count = $('.compensation-table th').length-1,
            i = 0;

        while ( i < count ) {
                i++;
                var box = $("[data-td="+i+"]").find('span'),
                    maxWidth = 0;

                box.each(function(){
                    if ( $(this).width() > maxWidth  ){
                        maxWidth  = $(this).width();
                    }
                });
                box.width(maxWidth);
                console.log(maxWidth);
        }
    });
});
