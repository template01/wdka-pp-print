var fancyLoad = (function() {
    var loadWrapper = function() {
        $('#mainApp').append(`<div id="loadContent">
        <div class="rightContent" id="splashRightContent">
          <div class="topContent" id="splashTopContent">
            <span id="">Loading <i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i></span>
          </div>
        </div>
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
