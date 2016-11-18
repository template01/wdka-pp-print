var initViews = (function() {

  var initTableView = function() {
    fancyLoad.loadWrapper()
    tableMaker.setupTable()
    selectorFunctions.initSelector()
    printPreview.initPrintpreview()
    printPreview.printRunHyphenOnPrint()
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

  var hideReadView = function(){
    $("#readpreview").hide().empty()
    $("#printpreview").hide()
    $("#tableWrapper").show()
  }


  var showReadView = function(){
    $("#readpreview").show()
    $("#tableWrapper").hide()
    $("#rightContent").children().addClass('disable')
  }


  var hidePrintView = function(){
    $("#printpreview").hide()

  }


  var showPrintView = function(){
    $("#printpreview").show()
    $("#tableWrapper").hide()
    $("#rightContent").children().addClass('disable')
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
    showReadView:showReadView,
    hideReadView:hideReadView,
    showPrintView:showPrintView,
    hidePrintView:hidePrintView,
    showLoadView:showLoadView,
    showSplashView:showSplashView,
    hideSplashView:hideSplashView,
    showTableView:showTableView,
    initSplashView:initSplashView,
      initTableView: initTableView,
      hideTableView:hideTableView
  };

})();
