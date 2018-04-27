/*------------------------------------------------------------------
 [Script Javascript principal ]
________ _____________________________  _______________   ____
\______ \\______   \_   _____/\______ \ \_   _____/\   \ /   /
 |    |  \|       _/|    __)_  |    |  \ |    __)_  \   Y   / 
 |    `   \    |   \|        \ |    `   \|        \  \     /  
/_______  /____|_  /_______  //_______  /_______  /   \___/   
        \/       \/        \/         \/        \/            


Projet		    :	All-in-one- Mobile Web UI Template
Auteur          :	https://www.andreatchori.com
Usage principal :	Mobile

NB: Merci d'avoir telecharger le template et j'espere qu'il vous servira. 
Ravi d'avoir pu vous aider. Vous avez des preoccupations vous pouvez me contacter 
sur mon adresse mail dredev1234@gmail.com ou dredev@yahoo.com. 
Whatsapp number: +225 49499849.
Je vous repondrai le plus vite possible
-------------------------------------------------------------------*/

"use strict";

$(document).ready(function() {

    $('.navi-menu-button').on('click', function(e) {
        navMenuOpen();
    });

    $('.nav-menu').on('click', function(e) {
        if ($(e.target).hasClass('nav-menu')) {
            navMenuClose();
        }
    });

    $('nav.menu ul.main-menu>li>a').on('click', function(e) {
        var that = $(this);
        if (that.parent().find('ul:first').length) {
            e.preventDefault();
            if (!that.parent().hasClass('active')) {
                $('nav.menu ul.main-menu ul').slideUp('fast', function() {
                    $('nav.menu ul.main-menu > li').removeClass('active');
                });

                $('nav.menu ul li a span').removeClass('fa-angle-up').addClass('fa-angle-down');


                that.parent().find('ul:first').slideDown('fast', function() {
                    that.parent().addClass('active');
                });

                that.find('span').removeClass('fa-angle-down').addClass('fa-angle-up');
            } else {

                that.parent().find('ul:first').slideUp('fast', function() {
                    $(this).parent().removeClass('active');
                });
                that.find('span').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        } else {
            $('nav.menu ul.main-menu ul').slideUp('fast');
            $('nav.menu ul.main-menu > li').removeClass('active');
            that.parent().addClass('active');
        }
    });


    $('.tab-item .fix-width .menu-item').css({ 'width': 100 / $('.tab-item .fix-width .menu-item').length + '%' });

    if ($('.slider').length) {
        sliderFixHeight();
        $(window).resize();
    }



    if ($('.animated-text').length)
        animateText();

});


$(".wrapper-inline").on("scroll", function(e) {
    if (this.scrollTop > 150) {
        $('header.no-background').addClass("set-bg");
    } else {
        $('header.no-background').removeClass("set-bg");
    }

});

var navMenuOpen = function() {
    $('.navi-menu-button').addClass('focused');

    $('div.nav-menu').fadeIn(50, function(e) {
        $('nav.menu').addClass('opened');
    });
}

var navMenuClose = function() {
    $('.navi-menu-button').removeClass('focused');

    $('nav.menu').removeClass('opened');
    $('div.nav-menu').fadeOut(200);
}

var sliderFixHeight = function() {
    $(window).on('resize', function(e) {
        $('.slider .slider-item').height($(window).height() - 50);
    });
}

var animateText = function() {
    $('.vertical-center').css({ 'margin-top': $(window).height() / 2 - $('.vertical-center').height() / 2 });
    $('.animated-text').removeClass('zero-opacity');
    $('[data-transation]').each(function(e, i) {
        var that = $(this);
        that.addClass('hide');

        var transation = that.attr('data-transation');
        if (transation == '')
            transation = 'fadeInDown';

        var startTime = parseInt(that.attr('data-start-time'));
        if (isNaN(startTime))
            startTime = 0;

        setTimeout(function() {
            that.addClass('animated ' + transation);
        }, startTime);
    })
}




/*expandable list script */
$(document).on('click', '.expandable-item .expandable-header', function() {
    if ($(this).parent().hasClass('accordion')) {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.expandable-content').attr('style', '');
        } else {
            var accordionGroup = $(this).parent().attr('data-group');
            $('[data-group="' + accordionGroup + '"]').removeClass('active');
            $('[data-group="' + accordionGroup + '"]').find('.expandable-content').attr('style', '');
            $(this).parent().find('.expandable-content').css({ 'max-height': $(this).parent().find('.expandable-content')[0].scrollHeight });
            $(this).parent().addClass('active');
        }
    } else {
        if ($(this).parent().hasClass('active'))
            $(this).parent().find('.expandable-content').attr('style', '');
        else
            $(this).parent().find('.expandable-content').css({ 'max-height': $(this).parent().find('.expandable-content')[0].scrollHeight });

        $(this).parent().toggleClass('active');
    }
});



$(document).on('click', '.tab-item .menu-item', function(e) {
    e.preventDefault();
    var tabContentId = $(this).attr('data-content');

    $(this).parents('.tab-item').find('.menu-item').removeClass('active');
    $(this).addClass('active');

    $(this).parents('.tab-item').find('.content-item').removeClass('active');
    $('#' + tabContentId).addClass('active');
});


/*scripts post article */
/*Commenter en french est dur inhhh rire */
$(document).on('click', '.post-item .post-share > i', function(e) {
    e.preventDefault();
    $(this).parent().find('.social-links').fadeToggle('fast');
});