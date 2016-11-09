var printPreview = (function() {

    addToPrintPreview = function(id) {
        alert(id)
    }


    createEmptyPost = function() {

        $("#printpreview").append(`
      <li id="postid-empty" class="tablePost">
        <div class="tablePostMeta">
        </div>
        <div class="tablePostContent section-default">

          <div class='content'>
            <h1> Please return to the list and make a selection</h1>
          </div>

        </div>

      </li>
    `)
    }

    getPrintPreview = function(showEvent) {

        $(document).on('click', showEvent, function() {
            if($("#basket").children().length>0){
              $("#rightContent").children().toggleClass('disable')
              $("#printpreview").toggle()
              $("#tableWrapper").toggle()
              $("#printpreview").find('.tablePostMeta').empty()
              if ($('#printpreview:in-viewport').length > 0) {
                  $("#printpreview").find('.tablePostMeta').append(`
                      <div id="printpreviewSelection" class="tablePostMetaItem long"><p>Print Preview: </p></div>
                      <div class="tablePostMetaItem back"><p><span class="fa fa-long-arrow-left"></span> Back to list<p></div>
                      `)
                  $("#basket .basketItem").each(function() {
                      $("#printpreviewSelection p").append($(this).find('p').text() + ', ')
                  })
              }
            }else{
              $(showEvent).addClass('makeSelection')
              window.setTimeout(function(){
                $(showEvent).removeClass('makeSelection')
              },600)
            }


        })

    }

    createShowEventElements = function() {
        $("#leftContent").append('<div id="printpreview"></div>')
        $("#rightContent #basketWrapper").append('<div id="showPrint"></div>')
    }

    initPrintpreview = function() {
        this.getPrintPreview('#showPrint')
        this.createShowEventElements()
    }

    return {
        createEmptyPost: createEmptyPost,
        createShowEventElements: createShowEventElements,
        addToPrintPreview: addToPrintPreview,
        getPrintPreview: getPrintPreview,
        initPrintpreview: initPrintpreview
    };

})();
