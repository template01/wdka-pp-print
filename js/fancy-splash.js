var splashFunctions = (function() {
    var makeSplashContainer = function() {
        $('#mainApp').append(`<div id="splash">
          <div id="splashLeftContent">
            <div id="splashHeader"><a href="#table" id="splashEnter">Get started <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
            <div id="splashIntro"><h1>What is this?</h1><p>The Autonomous Practices in particular start from the drive of the student, which is fuelled by passion, fascinations, discontent and sometimes even anger. They can function as very strong motors if you channel them well. The Autonomous Practices open up fields to critically engaged art and design students that they previously were able to explore in very limited ways. These fields can be seen as wastelands, in a positive sense. A wasteland may be overlooked, but it can be explored, it usually is full of potential and possibilities, something that can be built on and developed. However it is also rough territory; you need strong roots to survive.</p></div>

          </div>

          <div id="splashRightContent">
            <div id="splashRightContentLogos">
              <img src="http://beyond-social.org/img/wdkalogo_bw.svg"/>
              <img src="http://beyond-social.org/img/wdkalogo_2.svg"/>
            </div>
          </div>

        </div>`)
    }

    var handleEnterEvent = function() {
        $(document).on('click', '#splashEnter', function(event) {
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
        this.handleEnterEvent()
    }
    return {
        makeSplashContainer: makeSplashContainer,
        initSplash: initSplash,
        handleEnterEvent: handleEnterEvent,
        handleToSplashEvent:handleToSplashEvent
    };
})();
