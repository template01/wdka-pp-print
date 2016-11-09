var printPreview = (function() {

    addToPrintPreview = function(id) {
        alert(id)
    }

    getPrintPreview = function(showEvent) {

        $(document).on('click', showEvent, function() {

            // $(this).toggleClass('showList')



            $("#rightContent").children().toggleClass('disable')
            $("#printpreview").toggle()
            $("#tableWrapper").toggle()
            $("#printpreview").find('.tablePostMeta').empty()
                //
                if($('#printpreview:in-viewport').length>0){
                  $("#printpreview").find('.tablePostMeta').append(`
                    <div id="printpreviewSelection" class="tablePostMetaItem long"><p>Print Preview: </p></div>
                    <div class="tablePostMetaItem back"><p><span class="fa fa-long-arrow-left"></span> Back to list<p></div>
                    `)
                  $("#basket .basketItem").each(function(){$("#printpreviewSelection p").append($(this).find('p').text()+', ')})
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
        createShowEventElements: createShowEventElements,
        addToPrintPreview: addToPrintPreview,
        getPrintPreview: getPrintPreview,
        initPrintpreview: initPrintpreview
    };

})();
