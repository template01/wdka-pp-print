var readPreview = (function() {

    addToreadPreview = function(id) {
        alert(id)
    }

    getreadPreview = function(showEvent) {

        $(document).on('click', showEvent, function() {

          content = $(this).parents('.tablePost').find('.tablePostContent .content').attr('data-content')
          $(this).parents('.tablePost').clone().appendTo("#readpreview")
            .find('.tablePostContent .content').html(decodeURI(content))
          $("#readpreview").find('.tablePostMeta').append('<div class="tablePostMetaItem back"><p><span class="fa fa-long-arrow-left"></span> Back to list<p></div>')

          $("#readpreview").show()
          $("#tableWrapper").hide()
          $("#rightContent").children().addClass('disable')

        })
    }


    closereadPreview = function(closeEvent) {

        $(document).on('click', closeEvent, function() {

          $("#readpreview").hide().empty()
          $("#printpreview").hide()
          $("#tableWrapper").show()
          $("#rightContent").children().removeClass('disable')

        })
    }

    createReadElements = function() {
        $("#leftContent").append('<div id="readpreview"></div>')
    }

    initreadpreview = function() {
        // this.getreadPreview('.tablePostReadMode')
        this.createReadElements()
        this.getreadPreview('.tablePostReadMode')
        this.closereadPreview('.back')
    }

    return {createReadElements: createReadElements, addToreadPreview: addToreadPreview, getreadPreview: getreadPreview, closereadPreview:closereadPreview, initreadpreview: initreadpreview};

})();
