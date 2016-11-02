	$.ajax('http://wdka-pp.template-studio.nl/wp-json/wp/v2/posts?filter[category_name]=wdka-pp', {
	    success: function(data) {
	        $.each(data, function(i, field) {
	            post = `<div  class="outerPost"><div class="post" data-id=` + field.id + `>
        			<h1 class="postHeader"><input type="checkbox" class="postSelected">` + field.title.rendered + `</h1>
        			<div class="postContent">` + field.content.rendered + `</div>
        			</div></div>`
	            $("#posts").append(post);
	        });
	    },
	    error: function() {
	        alert('error :(')
	    },
	    complete: function() {

	        // $('.postContent').each(function() {
	        //     $(this).find('h1').each(function() {
	        //         $(this).next().andSelf().wrapAll("<div class='noBreak'></div>")
	        //     })
	        // })

	        checkedArray = getParameterByNameUnique('selected').split(',')
	        for (var i in checkedArray) {
	            $('.post[data-id=' + checkedArray[i] + '] .postSelected').prop("checked", true);
	            $('.post[data-id=' + checkedArray[i] + ']').clone().appendTo("#selection");
	            stackSelection()
	        }

	    }


	});


	function getParameterByNameUnique(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return Array.from(new Set(decodeURIComponent(results[2].replace(/\+/g, " ")).split(','))).toString()
	}

	function removeA(arr) {
	    var what, a = arguments,
	        L = a.length,
	        ax;
	    while (L > 1 && arr.length) {
	        what = a[--L];
	        while ((ax = arr.indexOf(what)) !== -1) {
	            arr.splice(ax, 1);
	        }
	    }
	    return arr;
	}

	// function stackSelection(){
	// 	$('#selection .post').each(function(index){
	// 	$(this).css({'margin-top':(index*40)+40+'px'})
	// 	$(this).css({'margin-left':(index*40)+40+'px'})
	// 	})
	// }


	function stackSelection() {
	    $('#selection .post:not(:first)').each(function(index) {
	        stackDist = ($('#selection').width() / $('#selection .post').length) / 6
	        console.log(stackDist)
	        $(this).css({
	            'margin-top': (index * stackDist) + stackDist + 'px'
	        })
	        $(this).css({
	            'margin-left': (index * stackDist) + stackDist + 'px'
	        })
	    })
	}



	$(document).on('change', '.postSelected', function() {
	    console.log($(this).parents('.post').attr('data-id'));

	    postId = $(this).parents('.post').attr('data-id')


	    if ($(this).is(':checked')) {
	        // if(getParameterByNameUnique('selected') != null && $.inArray(postId, getParameterByNameUnique('selected').split(','))<0){



	        if (getParameterByNameUnique('selected')) {
	            var params = {
	                selected: getParameterByNameUnique('selected') + ',' + postId,
	                morestuff: "bar"
	            }
	        } else {
	            var params = {
	                selected: postId,
	                morestuff: "bar"
	            };
	        }
	        var str = jQuery.param(params);

	        if (history.pushState) {
	            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + str;
	            window.history.pushState({
	                path: newurl
	            }, '', newurl);
	        }


	        $(this).parents('.post').clone().appendTo("#selection");
	        stackSelection()

	    } else {

	        popParam = removeA(getParameterByNameUnique('selected').split(','), postId).toString();

	        console.log('left:' + popParam)

	        var params = {
	            selected: popParam,
	            morestuff: "buh"
	        }

	        var str = jQuery.param(params);

	        if (history.pushState) {
	            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + str;
	            window.history.pushState({
	                path: newurl
	            }, '', newurl);
	        }

	        $('#selection .post[data-id=' + postId + ']').remove();
	        stackSelection()


	    }

	});

// $('link[title="printA5"]').prop('disabled', true);

// $("#printA5").on("click", function(){
// 	if($("#printA5").is(':checked')){
// 		$('link[title="printA5"]').prop('disabled', false);
// 	} else {
// 	    $('link[title="printA5"]').prop('disabled', true);
// 	}
// }); 