var initViews = (function() {

  var initTableView = function() {
    fancyLoad.loadWrapper()
    tableMaker.setupTable()
    selectorFunctions.initSelector()
    printPreview.initPrintpreview()
    readPreview.initreadpreview()
  }

  var hideTableView = function() {
    $('#leftContent').hide()
    $("#rightContent").children().addClass('disable')

  }

  var showLoadView = function(){
    $('#loadContent').show()
  }

  var showTableView = function(){
    $('#leftContent').show()
    $("#rightContent").children().removeClass('disable')
  }

  var hideSplashView = function() {
    $('#splash').hide()
    $("#rightContent").children().removeClass('disable')

  }

  var showSplashView = function(){
    $('#splash').show()
    $("#rightContent").children().addClass('disable')

  }




  var initSplashView = function(){
    splashFunctions.initSplash()
  }

  return {
    showLoadView:showLoadView,
    showSplashView:showSplashView,
    hideSplashView:hideSplashView,
    showTableView:showTableView,
    initSplashView:initSplashView,
      initTableView: initTableView,
      hideTableView:hideTableView
  };

})();
