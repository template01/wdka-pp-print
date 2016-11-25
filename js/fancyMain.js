$(document).ready(function() {



    var tableStarted = false
    var splashStarted = false

    routie({
        'table': function() {
            if (tableStarted == false) {
                initViews.initTableView()
                tableStarted = true
            }
            initViews.showTableView()
            initViews.hideSplashView()



        },

        'table table/*': function() {
            if (tableStarted == false) {
                initViews.initTableView()

                tableStarted = true
            }
            initViews.showTableView()
            initViews.hideSplashView()

            initViews.hideReadView()


        },


        'read/:postid?': function(postid) {

            if (tableStarted == false) {
                initViews.initTableView()
                tableStarted = true
                var triggerread = setInterval(function() {
                    // alert('hay')
                    if ($("#readpreview").is(":empty")) {
                        readPreview.getreadPreviewRoute(postid)
                    } else {
                        clearInterval(triggerread)
                    }
                }, 300);
            }else{
              readPreview.getreadPreviewRoute(postid)
            }
            initViews.showTableView()
            initViews.hideSplashView()
            initViews.showReadView()


        },

        'read/:postid?/*': function(postid) {

            if (tableStarted == false) {
                initViews.initTableView()
                tableStarted = true
                var triggerread = setInterval(function() {
                    // alert('hay')
                    if ($("#readpreview").is(":empty")) {
                        readPreview.getreadPreviewRoute(postid)
                    } else {
                        clearInterval(triggerread)
                    }
                }, 300);
            }else{
              readPreview.getreadPreviewRoute(postid)
            }
            initViews.showTableView()
            initViews.hideSplashView()
            initViews.showReadView()

        },


        'preview/*': function(postid) {

            if (tableStarted == false) {
                initViews.initTableView()
                tableStarted = true
                // var triggerpreview = setInterval(function() {
                //     // alert('hay')
                //     if ($("#readpreview").is(":empty")) {
                //       printPreview.getPrintPreviewRoute()
                //
                //     } else {
                //         clearInterval(triggerpreview)
                //     }
                // }, 300);
            }else{
              // readPreview.getreadPreviewRoute(postid)
              // printPreview.getPrintPreviewRoute()
            }
            // initViews.hideTableView()
            initViews.hideSplashView()
            initViews.hideReadView()
            initViews.showPrintView()


        },


        '': function() {
            if (splashStarted == false) {
                initViews.initSplashView()
                splashStarted = true
            }
            initViews.hideTableView()
            initViews.showSplashView()


        },

        '/*': function() {
            if (splashStarted == false) {
                initViews.initSplashView()
                splashStarted = true
            }
            initViews.hideTableView()
            initViews.showSplashView()


        }
    });


});
