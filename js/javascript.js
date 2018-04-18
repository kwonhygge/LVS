// WORKING (but not so pretty) count animation on frontpage
// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 1500,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });


// BURGER NAV
$(document).ready(function(e) {
	var navOpen = 0;
	
    $("#mobilemenu").click(function(e) {
		if(navOpen == 1) {
			$("#navElements").slideUp(200);	
			navOpen = 0;
		} else {
			$("#navElements").slideDown(200);	
			navOpen = 1;
		}
    });
	
	$(window).resize(function(e) {
        var width = $(window).width();
		
		if(width > 767) {
			$("#navElements").css({"display":"webkit-flex", "display":"flex"});	
		} else {
			$("#navElements").css("display", "none");
			navOpen = 0;
		}
    });
});

//ACTIVITY LIST/GALLERY VIEW

$("#list-button").click(function(){
	$("#gallery-view").hide();
	$("#list-view").show();
	
});

$("#gallery-button").click(function(){
	$("#gallery-view").show();
	$("#list-view").hide();
	
}); 