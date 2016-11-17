var fancyLoad = (function() {
    var loadWrapper = function() {
        $('#mainApp').append(`<div id="loadContent">

        ASSHOLE
      </div>`)

    }
    var loadWrapperHide = function() {
        $('#loadContent').hide()

    }

    return {
        loadWrapper: loadWrapper,
        loadWrapperHide: loadWrapperHide
    };
})();
