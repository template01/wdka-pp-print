var readPreview = (function() {

    addToreadPreview = function(id) {
        alert(id)
    }

    getreadPreview = function(showEvent) {

        $(document).on('click', showEvent, function() {

          content = $(this).parents('.tablePost').find('.tablePostContent .content').attr('data-content')
          $(this).parents('.tablePost').clone().appendTo("#readpreview")
            .find('.tablePostContent .content').html(content)
          $("#readpreview").find('.tablePostMeta').append('<div class="tablePostMetaItem back"><span class="fa fa-long-arrow-left"></span> Back to list</div>')

          $("#readpreview").toggle()
          $("#rightContent").children().toggle()

        })
    }


    closereadPreview = function(closeEvent) {

        $(document).on('click', closeEvent, function() {

          $("#readpreview").toggle().empty()
          $("#rightContent").children().toggle()

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
