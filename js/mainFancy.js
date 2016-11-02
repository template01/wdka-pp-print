var tableMaker = (function() {

    table = $('#table')

    var setupTable = function() {
        this.loadList()
    }

    var argh = function() {
        return 'argh'
    }

    var createTableCells = function(cellObjects){
        cellObjects.map(function(element){
          // console.log(element)
          title = element.title.rendered
          excerpt = element.excerpt.rendered
          table.append(`
            <li>
            <h1 class='title'>`+title+`</h1>
            <p>`+excerpt+`</p>
            </li>
          `)
        });
        // console.log(cellObjects)
    }

    var loadList = function() {
        $.ajax({
            url: 'http://wdka-pp.template-studio.nl/wp-json/wp/v2/posts?filter[category_name]=wdka-pp',
            // dataType: "html",
            async: true,
            // data: data,
            // type: type,
            success: function(data) {
                console.log(data);

                tableMaker.createTableCells(data)
                listjsThatTable.listjs(table)
                // msgResponse = msg;
                // msgRecieved = true;
            }
        });
    }
    return {
        argh: argh,
        loadList: loadList,
        createTableCells:createTableCells,
        setupTable: setupTable
    };
})();

var listjsThatTable = (function() {
  var listjs = function(target) {
      // target.find('h1').remove()
      var options = {
        valueNames: [ 'title' ]
      };

      var userList = new List('users', options);

  }

  return {
      listjs: listjs
  };
})();






$(document).ready(
  function(){
    tableMaker.setupTable()
  }
);
