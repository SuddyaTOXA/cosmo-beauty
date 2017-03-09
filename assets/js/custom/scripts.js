jQuery(document).ready(function($) {

    // for placeholder link
    function prevent(){
        $('.prevent, .btn-modal, a[href=#]').on('click touch', function(event){
            event.preventDefault();
        });
    }
    prevent();


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



    //for modal form
        //open modal
        $('.btn-modal').on('click touch', function () {
            $('.modal-form').addClass('open');
            $(document.body).addClass('overflow');
        });
        //open modal
        $('.close-modal').on('click touch', function () {
            $('.modal-form').removeClass('open');
            $(document.body).removeClass('overflow');
            $('.mobile-menu-toggle').removeClass('active');
            $('.mobile-menu-wrap').removeClass('showing');
        });


    // for blog grid
    function blogGrid() {
        $(window).on('load resize', function() {
            var width = $(window).width(),
                windowWidth = $('.container').width(),
                postBox = $('.post-list'),
                postList = $('.post-list li'),
                topColl = 0;

            if (width >= '1024') {
                var thumbWidth = windowWidth / 2 - 12,
                    thumbHeight = (windowWidth / 100) * 53.192,
                    thumbSmallHeight = (windowWidth / 100) * 25.532,
                    leftPosition = thumbWidth + 24,
                    topleftColl = 0,
                    topRightColl = 0,
                    count = 0,
                    itemOne = 1,
                    itemTwo = 2,
                    itemThree = 3,
                    itemFour = 4,
                    postCount = postList.length;

                //set item position
                postList.each(function (index) {
                    postList.width(thumbWidth);
                    count = index + 1;

                    if (count == itemOne) {
                        itemOne = itemOne + 4;
                        $(this).height(thumbHeight);
                        $(this).css('top', topleftColl).css('left', 0);
                        topleftColl = topleftColl + thumbHeight + 24;
                    } else if (count == itemTwo) {
                        if (itemTwo != postCount) {
                            itemTwo = itemTwo + 4;
                            $(this).height(thumbSmallHeight);
                            $(this).css('top', topRightColl).css('left', leftPosition);
                            topRightColl = topRightColl + thumbSmallHeight + 24;
                        } else {
                            $(this).height(thumbHeight);
                            $(this).css('top', topRightColl).css('left', leftPosition);
                            topRightColl = topRightColl + thumbHeight + 24;
                        }
                    } else if (count == itemThree) {
                        if (itemThree != postCount) {
                            itemThree = itemThree + 4;
                            $(this).height(thumbHeight);
                            $(this).css('top', topRightColl).css('left', leftPosition);
                            topRightColl = topRightColl + thumbHeight + 24;
                        } else {
                            $(this).height(thumbSmallHeight);
                            $(this).css('top', topRightColl).css('left', leftPosition);
                            topRightColl = topRightColl + thumbSmallHeight + 24;
                        }
                    } else if (count == itemFour) {
                        itemFour = itemFour + 4;
                        $(this).height(thumbSmallHeight);
                        $(this).css('top', topleftColl).css('left', 0);
                        topleftColl = topleftColl + thumbSmallHeight + 24;
                    }
                });

                //set box height
                if (topleftColl > topRightColl) {
                    postBox.height(topleftColl);
                } else {
                    postBox.height(topRightColl);
                }
            } else if (width > '640' && width < '1024') {
                var thumbWidth = windowWidth,
                    thumbHeight = (windowWidth / 100) * 60;

                //set item position
                postList.each(function () {
                    postList.width(thumbWidth);
                    $(this).height(thumbHeight);
                    $(this).css('top', topColl).css('left', 0);
                    topColl = topColl + thumbHeight + 24;
                });

                //set box height
                postBox.height(topColl);
            } else if ( width <= '640' ) {
                var thumbWidth = windowWidth,
                    thumbHeight = (windowWidth / 100) * 88.957;

                //set item position
                postList.each(function () {
                    postList.width(thumbWidth);
                    $(this).height(thumbHeight);
                    $(this).css('top', topColl).css('left', 0);
                    topColl = topColl + thumbHeight + 24;
                });

                //set box height
                postBox.height(topColl);
            }
        });
    }
    blogGrid();


    // validate form
    $(".wpcf7-form").validate({
        rules: {
            date_d: {
                rangelength: [1, 2],
                range: [1, 31],
                step: 1,
                number: true
            },
            date_m: {
                rangelength: [1, 2],
                range: [1, 12],
                step: 1,
                number: true
            },
            date_y: {
                rangelength: [4, 4],
                range: [2017, 2030],
                step: 1,
                number: true
            }
        }
    });


    // animate pie chart
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });


    // Bind to scroll pie charts
    //Simple counter for presonnel.page statistic
    $('.rate-box .counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
                countNum: countTo
            },

            {
                duration: 3500,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }

            });
    });

    function Counter(counter, data) {
        var $this = counter,
            countTo = data*100;

        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },{
            duration: 1000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }

        });
    }

    var ranges = $('.rate-box .rate-range');
    $(window).scroll(function(event) {

        if(ranges.visible()){
            ranges.each(function(index, el) {


                var data = $(el).data('percentage'),
                    cou = $(el).siblings('.count-wrap').find('.counter');

                Counter(cou, data)

                $(el).css({'transform': 'scale('+ data +')'})
            });
        }
    });

});
