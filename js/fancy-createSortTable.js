
var createSortTable = (function() {




    var listjsInit = function(totalPages) {

      var options = {
          valueNames: [
              'sort-title', 'sort-excerpt', 'sort-publication', 'sort-date', 'sort-selected'
          ],
          listClass: 'list'
      };

      var postList = new List('tableWrapper', options);

        createSortTable.listExternalSearch(postList)
        selectorFunctions.setSelectedOnLoad(postList)
        selectorFunctions.toggleSelector('.postSelect',postList)
        tableMaker.loadAllList(totalPages,postList)


    }

    var listExternalSearch = function(searchObject) {
        $("#rightContent #topContent").append("<input class='search' placeholder='&#xF002; Search...' style='font-family: FontAwesome, TeXGyreAdventor !important'/><div id='toSplash'><span class='fa fa-info' aria-hidden='true'</span></div>")
        $("#rightContent .search").bind("change paste keyup", function() {
            searchObject.search($(this).val());
        });
        splashFunctions.handleToSplashEvent()
    }

    return {listjsInit: listjsInit, listExternalSearch: listExternalSearch};
})();
