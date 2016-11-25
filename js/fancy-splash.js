var splashFunctions = (function() {

    var requestColophon = function() {
        return $.ajax({
            url: 'http://wdka-pp.template-studio.nl/wp-json/wp/v2/posts?filter[category_name]=wdka-pp-colophon'
        });
    }

    var getSplashContent = function() {
        this.requestColophon().success(function(data) {
            $("#splashIntro").append(data[0].content.rendered)
        }).error(function() {
            console.log('error')
            $("#splashIntro").append('There was an error!')
        });
    }

    var makeSplashContainer = function() {
        $('#mainApp').append(`<div id="splash">
          <div id="splashLeftContent">
            <div id="splashHeader"></div>
            <div id="splashIntro">

            </div>

          </div>

          <div class="rightContent" id="splashRightContent">
            <div class="topContent" id="splashTopContent">
              <a href="#table" id="splashEnter">Get started <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div id="splashRightContentLogos">
              <img src="http://beyond-social.org/img/wdkalogo_bw.svg"/>
              <img src="http://beyond-social.org/img/wdkalogo_2.svg"/>
            </div>
          </div>

        </div>`)

    }

    var handleEnterEvent = function() {
        $(document).on('click', '#splashTopContent', function(event) {
            event.preventDefault()
            reg = /(selected=.*?\&)|(selected=.*?s*($|;.*))/gi;
            alreadySelected = location.hash.substr(location.hash.indexOf('selected=')).split('&')[0].split('=')[1];
            if (alreadySelected === undefined || alreadySelected === null) {
                alreadySelected = ''
            }

            routie('table/selected=' + alreadySelected)
        })
    }

    var handleToSplashEvent = function() {
        $(document).on('click', '#toSplash', function(event) {
            event.preventDefault()

            reg = /(selected=.*?\&)|(selected=.*?s*($|;.*))/gi;
            alreadySelected = location.hash.substr(location.hash.indexOf('selected=')).split('&')[0].split('=')[1];
            if (alreadySelected === undefined || alreadySelected === null) {
                alreadySelected = ''
            }
            routie('#/selected=' + alreadySelected)
        })
    }


    var initSplash = function() {
        this.makeSplashContainer()
        this.getSplashContent()
        this.handleEnterEvent()
    }
    return {
        requestColophon: requestColophon,
        getSplashContent: getSplashContent,
        makeSplashContainer: makeSplashContainer,
        initSplash: initSplash,
        handleEnterEvent: handleEnterEvent,
        handleToSplashEvent: handleToSplashEvent
    };
})();
