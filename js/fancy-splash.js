var splashFunctions = (function() {
    var makeSplashContainer = function() {
        $('#mainApp').append(`<div id="splash">
          <div id="splashLeftContent">
            <div id="splashHeader"></div>
            <div id="splashIntro">
                      <div class="splashColLeft">
                        <h1>The<br>Art School<br>Reinvented</h1>
                      </div>
                      <div class="splashColRight">
                        <h1><br><br>Autonomous,<br/>Commercial<br/>and Social<br/>Pratices</h1>

                      </div>
                      <div class="splashColRight clearRight">
                        <p>
                          Hybrid Publishing Practices
                          This publication was developed by Hybrid
                          Publishing Practices at the Willem de Kooning
                          Academy. Researching and experimenting
                          across a broad range of processes native to
                          digital and analog media, Hybrid Publishing
                          Practices fosters novel approaches to design,
                          writing, reading, and dissemination, and
                          embraces the pluriformity of publishing made
                          possible through the legacies of Gutenberg’s
                          press to present-day technologies.
                          The Art School Reinvented is an ongoing
                          web-to-print publication finding it’s origin at
                          www.publishpractices.wdka.nl from where
                          each reader can print their own selection.
                          For more information about Hybrid Publishing
                          Practices or details about the development
                          of this publication go to
                          www.hybridpublishing.wdka.nl
                        </p>
                      </div>

                      <div class="splashColLeft">
                        <h2>Hybrid Publishing Practices</h2>
                        <p>
                          This publication was developed by Hybrid
                          Publishing Practices at the Willem de Kooning
                          Academy. Researching and experimenting
                          across a broad range of processes native to
                          digital and analog media, Hybrid Publishing
                          Practices fosters novel approaches to design,
                          writing, reading, and dissemination, and
                          embraces the pluriformity of publishing made
                          possible through the legacies of Gutenberg’s
                          press to present-day technologies.
                          The Art School Reinvented is an ongoing
                          web-to-print publication finding it’s origin at
                          www.publishpractices.wdka.nl from where
                          each reader can print their own selection.
                          For more information about Hybrid Publishing
                          Practices or details about the development
                          of this publication go to
                          www.hybridpublishing.wdka.nl
                        </p>
                      </div>

                      <div class="splashColRight">
                      <h2>Colophon</h2>
                        <p>
                          Practices fosters novel approaches to design,
                          writing, reading, and dissemination, and
                          embraces the pluriformity of publishing made
                          possible through the legacies of Gutenberg’s
                          press to present-day technologies.
                          The Art School Reinvented is an ongoing
                          web-to-print publication finding it’s origin at
                          www.publishpractices.wdka.nl from where
                          each reader can print their own selection.
                          For more information about Hybrid Publishing
                          Practices or details about the development
                          of this publication go to
                          www.hybridpublishing.wdka.nl
                        </p>
                      </div>

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
        this.handleEnterEvent()
    }
    return {
        makeSplashContainer: makeSplashContainer,
        initSplash: initSplash,
        handleEnterEvent: handleEnterEvent,
        handleToSplashEvent: handleToSplashEvent
    };
})();
