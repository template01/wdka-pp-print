var selectorFunctions = (function() {

    var addToBasket = function(jqueryElement, id) {
        $("#basket").append(`
          <div class="basketItem" data-selected-basket=` + id + `>
            ` + jqueryElement.find('.sort-title').html() + `
          </div>
        `)
    }

    var removeFromBasket = function(id) {
        if (typeof id !== "undefined") {
            $("#basket").find('.basketItem[data-selected-basket="' + id + '"]').remove()
        }
    }

    var toggleSelector = function(targetElement, sortList) {
        $(document).on('click', targetElement, function() {
            // alert('clicdddked')
            $(this).toggleClass('selected')
            if ($(this).hasClass('selected')) {

                $(this).find('p').text('1')

                selectorFunctions.setHashLocation($(this).attr('data-id'))
                selectorFunctions.addToBasket($(this).parents('.tablePost'), $(this).attr('data-id'))

                content = $("#postid-" + $(this).attr('data-id')).find('.tablePostContent .content').attr('data-content')

                $("#postid-" + $(this).attr('data-id')).clone().appendTo("#printpreview").find('.tablePostContent .content').html(content)

            } else {
                $(this).find('p').text('2')
                selectorFunctions.removeHashLocation($(this).attr('data-id'))
                selectorFunctions.removeFromBasket($(this).attr('data-id'))
                // console.log($("#printpreview #postid-"+$(this).attr('data-id')))
                $("#printpreview #postid-" + $(this).attr('data-id')).remove()
                // console.log($("#printpreview #postid-"+$(this).attr('data-id')))

            }
            sortList.reIndex()

        })
    }

    var setSelectedOnLoad = function(sortList) {

        lochash = location.hash.substr(1),
        selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];

        if (typeof selected !== "undefined" && selected.length > 0) {
            selected.split(",").map(function(id, index) {
                // console.log('asss' + id)
                if ($('#table').children().slice(-25).is("#postid-" + id)) {

                    $('.postSelect[data-id=' + id + ']').addClass('selected').find('p').text('1')

                    content = $("#postid-" + id).find('.tablePostContent .content').attr('data-content')
                    $("#postid-" + id).clone().appendTo("#printpreview").find('.tablePostContent .content').html(content)

                    selectorFunctions.addToBasket($('.postSelect[data-id=' + id + ']').parents('.tablePost'), id)
                }

            })
        }

        sortList.reIndex()

    }

    var setSelectedOnLoadMore = function(sortList) {

        lochash = location.hash.substr(1),
        selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];

        if (typeof selected !== "undefined" && selected.length > 0) {
            selected.split(",").map(function(id, index) {
                // console.log(id)
                // console.log($('#table').children('.tablePost').slice(-2500).find($("#postid-" + id)))
                // console.log($('#table').children('.tablePost').slice(-2500).find($("#postid-" + id)).length)
                // console.log($('#table').children().slice(-2500).find($('.postSelect[data-id=' + 936 + ']')).length)

                if ($('#table').children().slice(-25).is("#postid-" + id)) {

                    $('.postSelect[data-id=' + id + ']').addClass('selected').find('p').text('1')

                    content = $("#postid-" + id).find('.tablePostContent .content').attr('data-content')
                    $("#postid-" + id).clone().appendTo("#printpreview").find('.tablePostContent .content').html(content)

                    selectorFunctions.addToBasket($('.postSelect[data-id=' + id + ']').parents('.tablePost'), id)

                }

            })
        }

        sortList.reIndex()

    }

    var setHashLocation = function(id) {

        lochash = location.hash.substr(1),
        selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];

        if (typeof selected !== "undefined") {
            if (selected.length > 0) {
                location.hash = location.hash + ',' + id
            } else {
                location.hash = "selected=" + id
            }
        } else {
            location.hash = "selected=" + id

        }

    }

    var removeHashLocation = function(id) {

        lochash = location.hash.substr(1),
        selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];

        array = selected.split(",")
        index = array.indexOf(id)

        if (index > -1) {
            array.splice(index, 1);
        }

        location.hash = "selected=" + array.toString()
    }

    createEmptyBasketElements = function() {
        $("#rightContent #basketWrapper #basketCounter").append('<div id="emptyBasket" class="fa"></div>')
    }

    setEmptyBasketIcon=function(state){
      if(state == false){
        $("#emptyBasket").removeClass('fa-trash').addClass('fa-trash-o')
      }else{
        $("#emptyBasket").removeClass('fa-trash-o').addClass('fa-trash')
      }
    }

    var emptyBasket = function(emptyEvent) {

        $(document).on('click', emptyEvent, function() {

            if ($("#printpreview").children().length > 0) {
                setEmptyBasketIcon(false)
                location.hash = ""
                $("#basket").empty()
                $("#printpreview").empty()
                $(".postSelect").removeClass("selected")

            }

        })
    }

    createBasketCounter = function() {
        $("#rightContent #basketWrapper").prepend('<div id="basketCounter"></div>')
    }

    var initSelector = function() {
        this.emptyBasket('#emptyBasket')
        this.createBasketCounter()
        this.createEmptyBasketElements()


    }

    return {
        createBasketCounter:createBasketCounter,
        createEmptyBasketElements: createEmptyBasketElements,
        emptyBasket: emptyBasket,
        removeFromBasket: removeFromBasket,
        addToBasket: addToBasket,
        setEmptyBasketIcon:setEmptyBasketIcon,
        setSelectedOnLoad: setSelectedOnLoad,
        setSelectedOnLoadMore: setSelectedOnLoadMore,
        removeHashLocation: removeHashLocation,
        setHashLocation: setHashLocation,
        toggleSelector: toggleSelector,
        initSelector: initSelector
    };

})();
