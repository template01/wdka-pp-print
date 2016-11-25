var tourHelpers = (function() {
    var tableTour = function() {
      let tour = new Shepherd.Tour({
        defaults: {
          classes: 'shepherd-theme-arrows'
        }
      });

      tour.addStep('example', {
        title: 'Please select',
        text: 'Make your print selection',
        attachTo: {element: $('.postSelect').first(), on: 'bottom'},
        advanceOn: '.docs-link click'
      });

      tour.addStep('example', {
        title: 'View the print layout',
        text: "When you've made your selection you can view it here",
        attachTo: {element: $('#showPrint'), on: 'left'},
        advanceOn: '.docs-link click'
      });

      tour.addStep('example', {
        title: 'View the print layout',
        text: "When your're happy, just use the CTRL+P (CMD+P) shortcut to print your selection. For this function we recomend using Google Chrome.",
        attachTo: {element: $('#showPrint'), on: 'left'},
        advanceOn: '.docs-link click'
      });

      tour.start();


    }

    return {
        tableTour: tableTour
    };
})();
