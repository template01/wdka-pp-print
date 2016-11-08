
var createSortTable = (function() {


  var ass = 'hey'



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
        $("#rightContent #topContent").append("<input class='search' placeholder='Search' />")
        $("#rightContent .search").bind("change paste keyup", function() {
            searchObject.search($(this).val());
        });
    }

    return {listjsInit: listjsInit, listExternalSearch: listExternalSearch, ass:ass};
})();
