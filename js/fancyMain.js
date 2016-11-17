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

        'table/*': function() {
            if (tableStarted == false) {
                initViews.initTableView()
                tableStarted = true
            }
            initViews.showTableView()
            initViews.hideSplashView()


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
