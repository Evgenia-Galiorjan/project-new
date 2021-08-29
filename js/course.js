// SEARCH FILTER
$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function() {
        $('.login-form').addClass('popup');
    });

    $('.login-form form .fa-times').click(function() {
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll', function() {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function() {

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }


        });

    });

});
$(document).ready(function() {

    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function() {

        if ($(window).scrollTop() > 20) {

            $('#header').css('top', '0');

            $('.fa-bars').removeClass('fa-times');
            $('nav').removeClass('nav-toggle');

        } else {
            $('#header').css('top', '-100%');
        }
    });

});