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

            if (typeof element.pure_taxonomies.publication_sections !== "undefined") {
                publication_section = element.pure_taxonomies.publication_sections[0].slug

            } else {
                publication_section = 'default'
            }

            date = element.date
            // console.log(content)

            deployTableInner.append(`
            <li id="postid-` + id + `" class="tablePost">
              <div class="tablePostMeta">
                <div class='tablePostMetaItem sort-title'><p>` + title + `</p></div>
                <div class='tablePostMetaItem sort-date'><p>` + date + `</p></div>
                <div class='tablePostMetaItem sort-publication'><p>` + publication + `</p></div>
                <div class='tablePostMetaItem sort-selected postSelect' data-id="` + id + `"><p>no</p></div>
              </div>
              <div class="tablePostContent section-` + publication_section + `">
                <h1>` + title + `</h1>
                <div class='sort-excerpt'>` + excerpt + `</div>
                <div class='content' data-content='` + content + `'></div>
                <div class="tablePostReadMode">
                  <div>Full article <span class="fa fa-long-arrow-right"></span></div>
                </div>

              </div>

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
                Sort in Basket
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
            // url: './js/initposts.json',
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
