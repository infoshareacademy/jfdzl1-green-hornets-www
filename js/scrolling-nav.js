(function($) {
    "use strict";

    var navOffset = $('.navbar').height();
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[target*="#"]:not([target="#"])').click(function() {
        var target = $(this.target);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            var offset_top = target.offset().top - navOffset - 24;
            $('body').animate({
                scrollTop: (offset_top)
            }, 1000, "easeInOutExpo");
            return false;
        }
    });

    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').removeClass('show');
        $('.navbar-collapse').addClass('hide');
    });

})(jQuery);
