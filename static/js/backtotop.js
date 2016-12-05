$(document).ready(function ($) {
    $.scrollto = function (scrolldom, scrolltime) {
        $(scrolldom).click(function () {
            var scrolltodom = $(this).attr("data-scroll");
            $(this).addClass("active").siblings().removeClass("active");
            $('html, body').animate({
                scrollTop: $(scrolltodom).offset().top
            }, scrolltime);
            return false;
        });
    };
    
    if ($(window).width() > 800) {
        var backTo = $("#back-to-top");
        var backHeight = $(window).height() - 900 + 'px';
        $(window).scroll(function () {
            if ($(window).scrollTop() > 700 && backTo.css('top') === '-900px') {
                backTo.css('top', backHeight);
            }
            else if ($(window).scrollTop() <= 700 && backTo.css('top') !== '-900px') {
                backTo.css('top', '-900px');
            }
        });
    }
    $.scrollto("#back-to-top", 800);
})
