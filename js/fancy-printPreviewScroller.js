var printPreviewScroller = (function() {

    function debounce(func, wait, immediate) {
    	var timeout;
    	return function() {
    		var context = this, args = arguments;
    		var later = function() {
    			timeout = null;
    			if (!immediate) func.apply(context, args);
    		};
    		var callNow = immediate && !timeout;
    		clearTimeout(timeout);
    		timeout = setTimeout(later, wait);
    		if (callNow) func.apply(context, args);
    	};
    };




    var tablepostInViewport = function() {

        $('#printpreview .tablePost').isInViewport({ tolerance: 600 }).find('.tablePostMeta').css({
            'visibility': 'visible'
        })

        var myEfficientFn = debounce(function() {

          $('#printpreview .tablePost').find('.tablePostMeta').css({
              'visibility': 'hidden'
          })
          $('#printpreview .tablePost').isInViewport({ tolerance: 600 }).find('.tablePostMeta').css({
              'visibility': 'visible'
          })
          // alert('hey')
        }, 100);

        window.addEventListener('scroll', myEfficientFn);

    }

    var initInViewport = function() {
        this.tablepostInViewportScroll()
    }

    return {
        tablepostInViewport: tablepostInViewport,
        initInViewport: initInViewport,
    }

})();
