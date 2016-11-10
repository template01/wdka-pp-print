// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// Place any jQuery/helper plugins in here.

(function ( $ ) {
$.fn.removeClassDelay = function(options) {
    var settings = $.extend({
        class: "",
        delay: 1000
    }, options );
    var savedThis = this
    setTimeout(function(){ savedThis.removeClass(settings.class); }, settings.delay);
    return this;
}
}( jQuery ));

(function ( $ ) {
$.fn.addClassDelay = function(options) {
    var settings = $.extend({
        class: "",
        delay: 1000
    }, options );
    var savedThis = this
    setTimeout(function(){ savedThis.addClass(settings.class); }, settings.delay);
    return this;
}
}( jQuery ));
