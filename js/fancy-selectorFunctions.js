var selectorFunctions = (function() {
    var changeBasketOrderHash = function() {

        lochash = location.hash.substr(1)
        reg = /(selected=.*?\&)|(selected=.*?s*($|;.*))/gi;
        lochash.replace(reg, "")


        var selectedOrder = ''
        $("#basket .basketItem").each(function() {
            $(this).attr('data-selected-basket')
            selectedOrder = selectedOrder + ',' + $(this).attr('data-selected-basket')
        })


        routie('table/selected=' + selectedOrder.substring(1));

        // data-selected-basket
    }
    var changeBasketOrderEvent = function() {
        $(document).on('click', "#basket .basketItem .up", function() {
            var basketItem = $(this).parent();

            basketItem
                .addClass('glimpse')

            window.setTimeout(function() {
                basketItem.prev().insertAfter(basketItem);
                selectorFunctions.changeBasketOrderHash()

                window.setTimeout(function() {
                    selectorFunctions.setSelectedOrderPrintPreview()
                }, 10)

                basketItem
                    .removeClass('glimpse')

            }, 200)


        })
        $(document).on('click', "#basket .basketItem .down", function() {
            var basketItem = $(this).parent();

            basketItem
                .addClass('glimpse')

            window.setTimeout(function() {
                basketItem.next().insertBefore(basketItem);
                selectorFunctions.changeBasketOrderHash()

                window.setTimeout(function() {
                    selectorFunctions.setSelectedOrderPrintPreview()
                }, 10)
                basketItem
                    .removeClass('glimpse')

            }, 200)


        })

    }

    var addToBasket = function(jqueryElement, id) {
        $("#basket").append(`
          <div class="basketItem" data-selected-basket=` + id + `>
            ` + jqueryElement.find('.sort-title').html() + `
            <span class="fa fa-long-arrow-down down"></span>
            <span class="fa fa-long-arrow-up up"></span>

          </div>
        `)
        setEmptyBasketIcon(true)
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

                $("#postid-" + $(this).attr('data-id')).clone().appendTo("#printpreview").find('.tablePostContent .content').html(decodeURI(content))


            } else {
                $(this).find('p').text('2')
                selectorFunctions.removeHashLocation($(this).attr('data-id'))
                selectorFunctions.removeFromBasket($(this).attr('data-id'))
                    // console.log($("#printpreview #postid-"+$(this).attr('data-id')))
                $("#printpreview #postid-" + $(this).attr('data-id')).remove()
                    // console.log($("#printpreview #postid-"+$(this).attr('data-id')))

            }
            selectorFunctions.wrapdefaultsections()

            sortList.reIndex()

        })
    }


    var setSelectedOrderPrintPreview = function() {

        lochash = location.hash.substr(1),
            selected = lochash.substr(lochash.indexOf('selected=')).split('&')[0].split('=')[1];

        console.log(selected)

        if (typeof selected !== "undefined" && selected.length > 0) {
            $("#printpreview").empty()
            selected.split(",").map(function(id, index) {

                content = $("#postid-" + id).find('.tablePostContent .content').attr('data-content')
                $("#postid-" + id).clone().appendTo("#printpreview").find('.tablePostContent .content').html(decodeURI(content))

                selectorFunctions.wrapdefaultsections()

            })

        }
    }



    var wrapdefaultsections = function() {

        var target = '.section-default-wrapper',
            invert = ':not(' + target + ')',
            wrap = '<div class="section-default-wrapper-outer">',
            breakpoints = $('#printpreview > *' + invert);

        $('.section-default-wrapper-outer').children().unwrap()

        if ($("#printpreview").find('.tablePost:not(' + target + ')').length > 0) {

            breakpoints.each(function() {
                $(this).nextUntil(invert).wrapAll(wrap);
            });

            breakpoints.first().prevUntil(invert).wrapAll(wrap);
            // alert()

        } else {
            $("#printpreview").children().wrapAll(wrap)
        }

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
                    $("#postid-" + id).clone().appendTo("#printpreview").find('.tablePostContent .content').html(decodeURI(content))

                    selectorFunctions.addToBasket($('.postSelect[data-id=' + id + ']').parents('.tablePost'), id)
                }

            })
        }
        selectorFunctions.wrapdefaultsections()
        
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
                    $("#postid-" + id).clone().appendTo("#printpreview").find('.tablePostContent .content').html(decodeURI(content))

                    selectorFunctions.addToBasket($('.postSelect[data-id=' + id + ']').parents('.tablePost'), id)

                }

            })
        }


        sortList.reIndex()

    }

    var setSelectedHash = function(id) {
        reg = /(selected=.*?\&)|(selected=.*?s*($|;.*))/gi;

        alreadySelected = location.hash.substr(location.hash.indexOf('selected=')).split('&')[0].split('=')[1];
        if (alreadySelected === undefined || alreadySelected === null) {
            alreadySelected = ''
        }
        addcomma = ''
        if (alreadySelected.length > 0) {
            addcomma = ','
        } else {
            addcomma = ''
        }
        // location.hash = location.hash.substr(1).replace(reg, "") + "selected=" + alreadySelected + addcomma + id
        routie('table/selected=' + alreadySelected + addcomma + id);
    }

    var removeSelectedHash = function(id) {
        reg = /(selected=.*?\&)|(selected=.*?s*($|;.*))/gi;

        if (id === 'all') {
            id = ''
        }

        routie('table/selected=' + id);


    }


    var setHashLocation = function(id) {

        selectorFunctions.setSelectedHash(id)

    }

    var removeHashLocation = function(id) {

        selected = location.hash.substr(1).substr(location.hash.substr(1).indexOf('selected=')).split('&')[0].split('=')[1];
        array = selected.split(",")
        index = array.indexOf(id)

        if (index > -1) {
            array.splice(index, 1);
        }

        selectorFunctions.removeSelectedHash(array.toString())

    }

    createEmptyBasketElements = function() {
        $("#rightContent #basketWrapper #basketCounter").append('<span id="emptyBasket" class="fa fa-trash-o"></span>')
    }

    setEmptyBasketIcon = function(state) {
        if (state == false) {
            $("#emptyBasket").removeClass('fa-trash').addClass('fa-trash-o')
        } else {
            $("#emptyBasket").removeClass('fa-trash-o').addClass('fa-trash')
        }
    }

    var emptyBasket = function(emptyEvent) {

        $(document).on('click', emptyEvent, function() {

            if ($("#printpreview").children().length > 0) {
                setEmptyBasketIcon(false)
                selectorFunctions.removeSelectedHash('all')
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
        this.changeBasketOrderEvent()


    }

    return {
        setSelectedHash: setSelectedHash,
        removeSelectedHash: removeSelectedHash,
        wrapdefaultsections: wrapdefaultsections,
        createBasketCounter: createBasketCounter,
        createEmptyBasketElements: createEmptyBasketElements,
        emptyBasket: emptyBasket,
        removeFromBasket: removeFromBasket,
        addToBasket: addToBasket,
        setSelectedOrderPrintPreview: setSelectedOrderPrintPreview,
        setEmptyBasketIcon: setEmptyBasketIcon,
        setSelectedOnLoad: setSelectedOnLoad,
        setSelectedOnLoadMore: setSelectedOnLoadMore,
        removeHashLocation: removeHashLocation,
        setHashLocation: setHashLocation,
        toggleSelector: toggleSelector,
        initSelector: initSelector,
        changeBasketOrderHash: changeBasketOrderHash,
        changeBasketOrderEvent: changeBasketOrderEvent
    };

})();
