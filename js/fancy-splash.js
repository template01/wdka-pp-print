var splashFunctions = (function() {

    var requestColophon = function(){
      $.ajax({
          type: 'GET',
          url: 'http://wdka-pp.template-studio.nl/wp-json/wp/v2/posts?filter[category_name]=wdka-pp-colophon',
          // url: './js/initposts.json',
          async: true,
          success: function(data, textStatus, request) {
            // $("#splashIntro").append(data[0])
            console.log(data[0])
            return 'hay'

          }

          //           function(data, textStatus, request){
          //      alert(request.getResponseHeader('some_header'));
          // },
      });
    }

    var getSplashContent = function() {


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
        getSplashContent: getSplashContent,
        makeSplashContainer: makeSplashContainer,
        initSplash: initSplash,
        handleEnterEvent: handleEnterEvent,
        handleToSplashEvent: handleToSplashEvent
    };
})();
