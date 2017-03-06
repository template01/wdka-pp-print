var tableMaker = (function() {

    deployTable = $('#leftContent')

    var setupTable = function() {
        this.tableWrap(deployTable)
        this.loadList()
    }

    var createTableCells = function(cellObjects, deployTableInner) {
        cellObjects.map(function(element) {

            id = element.id
            title = encodeURI(element.title.rendered)
            excerpt = encodeURI(element.excerpt.rendered)
            // content = $.parseHTML(element.content.rendered)
            content = encodeURI(element.content.rendered)

            if (typeof element.pure_taxonomies.publications !== "undefined") {
                publication = encodeURI(element.pure_taxonomies.publications[0].name)

            } else {
                publication = 'undefined'
            }

            if (typeof element.pure_taxonomies.publications !== "undefined") {
                publicationSlug = encodeURI(element.pure_taxonomies.publications[0].slug)

            } else {
                publicationSlug = 'undefined'
            }

            if (typeof element.pure_taxonomies.publication_sections !== "undefined") {
                publication_section = encodeURI(element.pure_taxonomies.publication_sections[0].slug)

            } else {
                publication_section = 'default'
            }

            date = element.date

            unique =  new Date(date).getTime()
            day = new Date(date).getDay()
            month = new Date(date).getMonth()
            year = new Date(date).getFullYear()
            customTimeStamp = day+"/"+month+"/"+year
            // console.log(content)

            deployTableInner.append(`
            <div id="postid-` + id + `" class="tablePost section-`+decodeURI(publicationSlug)+`-part section-` + decodeURI(publication_section) + `-wrapper">
              <div class="tablePostMeta">
                <div class='tablePostMetaItem sort-title'><p>` + decodeURI(title) + `</p></div>

                <div class='tablePostMetaItem sort-publication'><p>` + decodeURI(publication) + `</p></div>
                <div class='tablePostMetaItem sort-date'><p data-uniqueTimeStamp="`+ unique +`">` + customTimeStamp + `</p></div>
                <div class='tablePostMetaItem sort-selected postSelect' data-id="` + id + `"><p>no</p></div>
              </div>
              <div class="tablePostContent section-` + decodeURI(publication_section) + `">
                <h1>` + decodeURI(title) + `</h1>
                <div class='sort-excerpt'>` + decodeURI(excerpt) + `</div>
                <div class='content' data-content="` + content + `"></div>
                <div class="tablePostReadMode">
                  <div><span class="fa fa-newspaper-o "></span> <br>  Read full article </div>
                </div>

              </div>

            </div>
          `)
        });

    }

    var tableWrap = function(deploy) {
        $(deploy).append(`
          <div id='tableWrapper'>
              <div class="sortingOptions">
                  <button class="sort" data-sort="sort-title">
                  Sort by Title
                </button>
                  <button class="sort" data-sort="sort-publication">
                  Sort by Practice
                </button>
                <button class="sort" data-sort="sort-date">
                  Sort by Date
                </button>
                <button class="sort" data-sort="sort-selected">
                Sort by Print Selection
              </button>
              </div>
              <ul id='table' class='list'></ul>
          </div>

          `)
    }

    var loadList = function() {
        $.ajax({
            type: 'GET',
            url: fancyconfig.apiUrl+'posts?filter[category_name]=wdka-pp&per_page=25',
            // url: './js/initposts.json',
            async: true,
            success: function(data, textStatus, request) {
                // console.log(data);
                console.log(request.getResponseHeader('X-WP-TotalPages'));
                console.log(request.getResponseHeader('X-WP-Total'));
                tableMaker.createTableCells(data, $('#table'))
                createSortTable.listjsInit(request.getResponseHeader('X-WP-TotalPages'))
                fancyLoad.loadWrapperHide()
                printPreview.getPrintPreviewRoute()

                window.setTimeout(function(){
                  tourHelpers.tableTour()
                },800)

            }

            //           function(data, textStatus, request){
            //      alert(request.getResponseHeader('some_header'));
            // },
        });
    }

    var loadMoreList = function(page,postList) {
        $.ajax({
            type: 'GET',
            url: fancyconfig.apiUrl+'posts?filter[category_name]=wdka-pp&per_page=25&page=' + page,
            async: true,
            success: function(data, textStatus, request) {
                tableMaker.createTableCells(data, $('#table'))
                // postList.reIndex()
                selectorFunctions.setSelectedOnLoadMore(postList)
                printPreview.getPrintPreviewRoute()
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
