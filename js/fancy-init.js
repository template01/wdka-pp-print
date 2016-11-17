var initViews = (function() {

  var initTableView = function() {
    tableMaker.setupTable()
    selectorFunctions.initSelector()
    printPreview.initPrintpreview()
    readPreview.initreadpreview()




  }

  var hideTableView = function() {
    $('#leftContent').hide()
    $("#rightContent").children().addClass('disable')

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
    showSplashView:showSplashView,
    hideSplashView:hideSplashView,
    showTableView:showTableView,
    initSplashView:initSplashView,
      initTableView: initTableView,
      hideTableView:hideTableView
  };

})();
