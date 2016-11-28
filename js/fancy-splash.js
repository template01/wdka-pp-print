var splashFunctions = (function() {

    var requestColophon = function() {
        return $.ajax({
            url: 'http://wdka-pp.template-studio.nl/backend/wp-json/wp/v2/posts?filter[category_name]=wdka-pp-colophon'
        });
    }

    var getSplashContent = function() {
        this.requestColophon().success(function(data) {
            $("#splashIntro").append(data[0].content.rendered)
            splashFunctions.styleChanges()
        }).error(function() {
            console.log('error')
            $("#splashIntro").append('There was an error!')
        });
    }

    var makeSplashContainer = function() {
        $('#mainApp').append(`<div id="splash">
          <div id="splashLeftContent">
            <div id="splashHeader">
              <div ><p><a target="_blank" href="http://www.wdka.nl">Willem de Kooning Academy</a></p></div>
              <div class="toTop"><p>The Art School Reinvented</p></div>
              <div class="toLastLeft"><p>Hybrid Publishing</p></div>
              <div class="toLastRight"><p>Colophon</p></div>

            </div>
            <div id="splashIntro">

            </div>

          </div>

          <div class="rightContent" id="splashRightContent">
            <div class="topContent" id="splashTopContent">
              <a href="#table" id="splashEnter">Get started <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div class="animated slideInDown" id="splashRightContentDesc"><p>The Art School Reinvented is an ongoing web-to-print publication where each individual reader can print their own selection.</p></div>
            <div id="splashRightContentLogos">
              <img src="./img/wdkalogo_blue.svg"/>
              <img src="./img/HHP_logo_blauw.svg"/>
            </div>
          </div>

        </div>`)

    }
    var styleChanges = function() {
        $('.afterFixedTitle').css({
            'margin-top': $(".fixedTitle").offset().top + $(".fixedTitle").outerHeight()
        })
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

    var splashMenuEvents = function() {

        $(document).on('click', '.toLastLeft', function(event) {
            $('.splashColLeft').last().addClass('lastLeft')
            document.querySelector(".lastLeft").scrollIntoView({
                behavior: 'smooth'
            });
        })


        $(document).on('click', '.toLastRight', function(event) {
            $('.splashColRight').last().addClass('lastRight')
            document.querySelector(".lastRight").scrollIntoView({
                behavior: 'smooth'
            });
        })

        $(document).on('click', '.toTop', function(event) {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        })


    }

    var pauseEnterAnimation = function(){
      window.setTimeout(function(){
        $("#splashEnter").css({'animation-play-state': 'paused'})
      },7000)
    }
    var pauseDescAnimation = function(){
      window.setTimeout(function(){
        $("#splashRightContentDesc").removeClass('animated').removeClass('slideInDown')
      },2000)
    }

    var initSplash = function() {
        this.makeSplashContainer()
        this.getSplashContent()
        this.handleEnterEvent()
        this.splashMenuEvents()
        this.pauseEnterAnimation()
        this.pauseDescAnimation()
    }
    return {
        styleChanges: styleChanges,
        requestColophon: requestColophon,
        getSplashContent: getSplashContent,
        makeSplashContainer: makeSplashContainer,
        initSplash: initSplash,
        handleEnterEvent: handleEnterEvent,
        handleToSplashEvent: handleToSplashEvent,
        splashMenuEvents: splashMenuEvents,
        pauseEnterAnimation:pauseEnterAnimation,
        pauseDescAnimation:pauseDescAnimation,
    };
})();
