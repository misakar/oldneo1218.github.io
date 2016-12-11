$(document).ready(function ($) {
    $.scrollto = function (scrolldom, scrolltime) {
        // 点击死猫, 调用function函数
        $(scrolldom).click(function () {
            var scrolltodom = $(this).attr("data-scroll");
            $(this).addClass("active").siblings().removeClass("active");
            $('html, body').animate({
                scrollTop: $(scrolltodom).offset().top
            }, scrolltime);
            return false;
        });
    };
    
    if ($(window).width()) {
        var backTo = $("#back-to-top");
        // var backHeight = $(window).height() - 900 + 'px';
        var backHeight = '-100px';
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
