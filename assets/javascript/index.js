$(document).ready(function() {

    $('.menubar-icon').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('navbar__toggle');
    });

    $(window).on('scroll load', function() {
        $('.menubar-icon').removeClass('fa-times');

        $('.navbar').removeClass('navbar__toggle');
    })

    $('.menu .menu__list .btn').click(function() {
        $(this).addClass('active-btn').siblings().removeClass('active-btn');

        var src = $('this').attr('data-src');;

        console.log(src);

        $('#menu-img').attr('src', src);

    });
});