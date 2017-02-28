jQuery(document).ready(function( $ ) {

    // for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });

    // for smooth scroll
	if ( $('a').is('.smooth-scroll') ) {
        smoothScroll.init({
            selector: '.smooth-scroll', // Selector for links (must be a class, ID, data attribute, or element tag)
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInQuad', // Easing pattern to use
            offset: 130 // Integer. How far to offset the scrolling anchor location in pixels
        });
    }

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
        paginationClickable: true
    });

    $(window).on('load resize', function() {
        var socialFooter = $('.footer-social'),
            leftBox = $('.footer-coll-list .left'),
            rightBox = $('.footer-coll-list .right');

        if ($(window).width() <= '1024') {
            console.log('Move right');
            socialFooter.appendTo(rightBox);
        } else {
            console.log('Move left');
            socialFooter.appendTo(leftBox);
        }
    });

});

