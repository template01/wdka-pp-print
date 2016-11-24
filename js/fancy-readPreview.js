var readPreview = (function() {

    addToreadPreview = function(id) {
        alert(id)
    }

    getreadPreview = function(showEvent) {

        $(document).on('click', showEvent, function() {


          reg = /(selected=.*?\&)|(selected=.*?s*($|;.*))/gi;
          alreadySelected = location.hash.substr(location.hash.indexOf('selected=')).split('&')[0].split('=')[1];
          if (alreadySelected === undefined || alreadySelected === null) {
              alreadySelected = ''
          }

          id = $(this).parents('.tablePost').attr('id').slice(7)

          console.log(id)


          routie('read/'+id+'/selected=' + alreadySelected);

        })
    }

    getreadPreviewRoute = function(postid){

      postElem = $("#postid-"+postid)

      console.log(postElem)
      content = postElem.find('.tablePostContent .content').attr('data-content')

      postElem.clone().appendTo("#readpreview")
        .find('.tablePostContent .content').html(decodeURI(content))
      $("#readpreview").find('.back').remove()
      $("#readpreview").find('.tablePostMeta').append('<div class="tablePostMetaItem back"><p><span class="fa fa-long-arrow-left"></span> Back to list<p></div>')

    }


    closereadPreview = function(closeEvent) {

        $(document).on('click', closeEvent, function() {

          reg = /(selected=.*?\&)|(selected=.*?s*($|;.*))/gi;
          alreadySelected = location.hash.substr(location.hash.indexOf('selected=')).split('&')[0].split('=')[1];
          if (alreadySelected === undefined || alreadySelected === null) {
              alreadySelected = ''
          }
          routie('table/selected=' + alreadySelected);

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

    return {getreadPreviewRoute:getreadPreviewRoute, createReadElements: createReadElements, addToreadPreview: addToreadPreview, getreadPreview: getreadPreview, closereadPreview:closereadPreview, initreadpreview: initreadpreview};

})();
