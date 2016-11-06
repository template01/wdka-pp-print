var tableMaker = (function() {

    deployTable = $('#leftContent')

    var setupTable = function() {
        this.tableWrap(deployTable)
        this.loadList()
    }

    var createTableCells = function(cellObjects, deployTableInner) {
        cellObjects.map(function(element) {

            id = element.id
            title = element.title.rendered
            excerpt = element.excerpt.rendered
            // content = $.parseHTML(element.content.rendered)
            content = element.content.rendered

            if (typeof element.pure_taxonomies.publications !== "undefined") {
                publication = element.pure_taxonomies.publications[0].name

            } else {
                publication = 'undefined'

            }
            date = element.date
            // console.log(content)

            deployTableInner.append(`
            <li id="postid-` + id + `" class="tablePost">
              <div class="tablePostMeta">
                <div class='tablePostMetaIem sort-title'><p>` + title + `</p></div>
                <div class='tablePostMetaIem sort-date'><p>` + date + `</p></div>
                <div class='tablePostMetaIem sort-publication'><p>` + publication + `</p></div>
                <div class='tablePostMetaIem sort-selected postSelect' data-id="` + id + `"><p>no</p></div>
              </div>
              <div class="tablePostContent">
                <h1>` + title + `</h1>
                <div class='sort-excerpt'>` + excerpt + `</div>
                <div class='content' data-content='` + content + `'></div>
              <div>
            </li>
          `)
        });

    }

    var tableWrap = function(deploy) {
        $(deploy).append(`
          <div id='tableWrapper'>
              <div class="sortingOptions">
                  <button class="sort" data-sort="sort-title">
                  Sort Title
                </button>
                  <button class="sort" data-sort="sort-date">
                  Sort date
                </button>
                  <button class="sort" data-sort="sort-publication">
                  Sort Publication
                </button>
                <button class="sort" data-sort="sort-selected">
                Sort Selected
              </button>
              </div>
              <ul id='table' class='list'></ul>
          </div>

          `)
    }

    var loadList = function() {
        $.ajax({
            type: 'GET',
            url: 'http://wdka-pp.template-studio.nl/wp-json/wp/v2/posts?filter[category_name]=wdka-pp&per_page=25',
            async: true,
            success: function(data, textStatus, request) {
                // console.log(data);
                console.log(request.getResponseHeader('X-WP-TotalPages'));
                console.log(request.getResponseHeader('X-WP-Total'));
                tableMaker.createTableCells(data, $('#table'))
                createSortTable.listjsInit(request.getResponseHeader('X-WP-TotalPages'))

            }

            //           function(data, textStatus, request){
            //      alert(request.getResponseHeader('some_header'));
            // },
        });
    }

    var loadMoreList = function(page,postList) {
        $.ajax({
            type: 'GET',
            url: 'http://wdka-pp.template-studio.nl/wp-json/wp/v2/posts?filter[category_name]=wdka-pp&per_page=25&page=' + page,
            async: true,
            success: function(data, textStatus, request) {
                tableMaker.createTableCells(data, $('#table'))
                // postList.reIndex()
                selectorFunctions.setSelectedOnLoadMore(postList)

            }
        });
    }

    var loadAllList = function(pagesTotal,postList) {
        for (i = 2; i-1 < pagesTotal; i++) {
            tableMaker.loadMoreList(i, postList)
        }

    }

    return {
        loadAllList: loadAllList,
        loadMoreList: loadMoreList,
        loadList: loadList,
        createTableCells: createTableCells,
        setupTable: setupTable,
        tableWrap: tableWrap
    };
})();

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

var selectorFunctions = (function() {

    var addToBasket = function(jqueryElement, id) {
        $("#basket").append(`
          <div class="basketItem" data-selected-basket=` + id + `>
            ` + jqueryElement.find('.sort-title').html() + `
          </div>
        `)
    }

    var removeFromBasket = function(id) {
        $("#basket").find('.basketItem[data-selected-basket="' + id + '"]').remove()
    }

    var toggleSelector = function(targetElement, sortList) {
        $(document).on('click', targetElement, function() {
            // alert('clicdddked')
            $(this).toggleClass('selected')
            if ($(this).hasClass('selected')) {
                $(this).text('yes')

                selectorFunctions.setHashLocation($(this).attr('data-id'))
                selectorFunctions.addToBasket($(this).parents('.tablePost'), $(this).attr('data-id'))

                content = $("#postid-" + $(this).attr('data-id')).find('.tablePostContent .content').attr('data-content')

                $("#postid-" + $(this).attr('data-id')).clone().appendTo("#printpreview").find('.tablePostContent .content').html(content)

            } else {
                $(this).text('no')
                selectorFunctions.removeHashLocation($(this).attr('data-id'))
                selectorFunctions.removeFromBasket($(this).attr('data-id'))
                // console.log($("#printpreview #postid-"+$(this).attr('data-id')))
                $("#printpreview #postid-" + $(this).attr('data-id')).remove()
                // console.log($("#printpreview #postid-"+$(this).attr('data-id')))

            }
            sortList.reIndex()

        })
    }

    var setSelectedOnLoad = function(sortList) {

        lochash = location.hash.substr(1),
        selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];

        if (typeof selected !== "undefined" && selected.length > 0) {
            selected.split(",").map(function(id, index) {
                // console.log('asss' + id)
                if($('#table').children().slice(-25).is("#postid-"+id)){

                  $('.postSelect[data-id=' + id + ']').addClass('selected').text('yes')

                  content = $("#postid-" + id).find('.tablePostContent .content').attr('data-content')
                  $("#postid-" + id).clone().appendTo("#printpreview").find('.tablePostContent .content').html(content)

                  selectorFunctions.addToBasket($('.postSelect[data-id=' + id + ']').parents('.tablePost'), id)
                }

            })
        }

        sortList.reIndex()

    }

    var setSelectedOnLoadMore = function(sortList) {

        lochash = location.hash.substr(1),
        selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];

        if (typeof selected !== "undefined" && selected.length > 0) {
            selected.split(",").map(function(id, index) {
              // console.log(id)
              // console.log($('#table').children('.tablePost').slice(-2500).find($("#postid-" + id)))
                // console.log($('#table').children('.tablePost').slice(-2500).find($("#postid-" + id)).length)
                // console.log($('#table').children().slice(-2500).find($('.postSelect[data-id=' + 936 + ']')).length)


                if($('#table').children().slice(-25).is("#postid-"+id)){

                  $('.postSelect[data-id=' + id + ']').addClass('selected').text('yes')

                  content = $("#postid-" + id).find('.tablePostContent .content').attr('data-content')
                  $("#postid-" + id).clone().appendTo("#printpreview").find('.tablePostContent .content').html(content)

                  selectorFunctions.addToBasket($('.postSelect[data-id=' + id + ']').parents('.tablePost'), id)

                }



            })
        }

        sortList.reIndex()

    }

    var setHashLocation = function(id) {

        lochash = location.hash.substr(1),
        selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];

        if (typeof selected !== "undefined") {
            if (selected.length > 0) {
                location.hash = location.hash + ',' + id
            } else {
                location.hash = "selected=" + id
            }
        } else {
            location.hash = "selected=" + id

        }

    }

    var removeHashLocation = function(id) {

        lochash = location.hash.substr(1),
        selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];

        array = selected.split(",")
        index = array.indexOf(id)

        if (index > -1) {
            array.splice(index, 1);
        }

        location.hash = "selected=" + array.toString()
    }

    var initSelector = function() {}

    return {
        removeFromBasket: removeFromBasket,
        addToBasket: addToBasket,
        setSelectedOnLoad: setSelectedOnLoad,
        setSelectedOnLoadMore: setSelectedOnLoadMore,
        removeHashLocation: removeHashLocation,
        setHashLocation: setHashLocation,
        toggleSelector: toggleSelector,
        initSelector: initSelector
    };

})();

var printpreview = (function() {

    addToPrintPreview = function(id) {
        alert(id)
    }

    getPrintPreview = function(showEvent) {

        $(document).on('click', showEvent, function() {

            lochash = location.hash.substr(1),
            selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];
            array = selected.split(",")

            $("#printpreview").toggle()
            $("#tableWrapper").toggle()

            array.map(function(id) {
                console.log('ass')
                // $("#postid-"+id).clone().appendTo("#printpreview")

            })

        })
    }

    createShowEventElements = function() {
        $("#leftContent").append('<div id="printpreview"></div>')
        $("#rightContent").append('<div id="showPrint">show print</div>')
    }

    initPrintpreview = function() {
        this.getPrintPreview('#showPrint')
        this.createShowEventElements()
    }

    return {createShowEventElements: createShowEventElements, addToPrintPreview: addToPrintPreview, getPrintPreview: getPrintPreview, initPrintpreview: initPrintpreview};

})();

$(document).ready(function() {
    tableMaker.setupTable()
    selectorFunctions.initSelector()
    printpreview.initPrintpreview()
});
