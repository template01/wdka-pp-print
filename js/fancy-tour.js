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
            title: "Woah! Your're new around here.",
            text: "Here's a small guide to how things go down here!",
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
            text: "When you've made your selection you can view it here",
            attachTo: {
                element: $('#showPrint'),
                on: 'left'
            },
            advanceOn: '.docs-link click'
        });

        tour.addStep('example', {
            title: 'View the print layout',
            text: "At some point when your're happy, just use the CTRL+P (CMD+P) shortcut to print your selection. For this function we recomend using Google Chrome.",
            attachTo: {
                element: $('#showPrint'),
                on: 'left'
            },
            advanceOn: '.docs-link click'
        });

        tour.start();

        document.cookie = "tourEverRan=true";


        }
    }



    return {
        tableTour: tableTour
    };
})();
