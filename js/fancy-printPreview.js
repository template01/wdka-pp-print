var printPreview = (function() {

    addToPrintPreview = function(id) {
        alert(id)
    }

    getPrintPreview = function(showEvent) {

        $(document).on('click', showEvent, function() {

            $(this).toggleClass('showList')
            $("#printpreview").toggle()
            $("#tableWrapper").toggle()

            // lochash = location.hash.substr(1),
            // selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];

            // if (typeof selected !== "undefined" && selected.length > 0) {
            //     array = selected.split(",")
            //     array.map(function(id) {
            //         console.log('ass')
            //         // $("#postid-"+id).clone().appendTo("#printpreview")
            //
            //     })
            //
            // }

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

    return {createShowEventElements: createShowEventElements, addToPrintPreview: addToPrintPreview, getPrintPreview: getPrintPreview, initPrintpreview: initPrintpreview};

})();
