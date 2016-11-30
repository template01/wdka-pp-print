var tourHelpers = (function() {



    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    var tableTour = function() {


        if(getCookie("tourEverRan").length==0){

        let tour = new Shepherd.Tour({
            defaults: {
                classes: 'shepherd-theme-arrows'
            }
        });

        tour.addStep('example ', {
            title: "Whoa! You're new around here.",
            text: "Here's a small guide to how things work down here!",
            attachment: 'middle center',
            targetAttachment: 'middle center',
            targetModifier: 'visible',

            attachTo: {
                element: 'document.body',

            },
            advanceOn: '.docs-link click'
        });


        tour.addStep('example', {
            title: 'Select your articles',
            text: 'Make your selection of articles here.',
            attachTo: {
                element: $('.postSelect').first(),
                on: 'bottom'
            },
            advanceOn: '.docs-link click'
        });

        tour.addStep('example', {
            title: 'View the print layout',
            text: "After you've made your selection you can view it here.",
            attachTo: {
                element: $('#showPrint'),
                on: 'left'
            },
            advanceOn: '.docs-link click'
        });

        tour.addStep('example', {
            title: 'View the print layout',
            text: "When you're happy with your selection, just use the CTRL+P (CMD+P) shortcut to print your selection. For this function we recommend using Google Chrome.",
            attachTo: {
                element: $('#showPrint'),
                on: 'left'
            },
            advanceOn: '.docs-link click'
        });

        showMyOverlay()
        tour.start();


              function showMyOverlay() {
                $("#mainApp").css({'opacity':'0.4','pointer-events':'none'})
                $("body").css({'background':'gray'})

              }
              function hideMyOverlay() {
                $("#mainApp").css({'opacity':'1','pointer-events':''})
                $("body").css({'background':''})


              }



        Shepherd.activeTour.on('complete',function(){hideMyOverlay()})

        document.cookie = "tourEverRan=true";


        }
    }



    return {
        tableTour: tableTour
    };
})();
