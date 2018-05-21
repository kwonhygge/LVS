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


$("#list-view").click(function () {
	$(".grid-view").addClass("list-view").removeClass("grid-view"),
		$(".item-grid-wrapper").addClass("item-list-wrapper").removeClass("item-grid-wrapper"),
		$(".activity-grid-item").addClass("activity-list-item").removeClass("activity-grid-item"),
		$(".overlay").addClass("no-overlay").removeClass("overlay"),
		$(".activity-title").removeClass("overlay-wrapper"),
		$(".grid-activity-content").addClass("list-activity-content").removeClass("grid-activity-content");

});
$("#grid-view").click(function () {
	$(".list-view").addClass("grid-view").removeClass("list-view"),
		$(".item-list-wrapper").addClass("item-grid-wrapper").removeClass("item-list-wrapper"),
		$(".activity-list-item").addClass("activity-grid-item overlay").removeClass("activity-list-item no-overlay"),
		$(".no-overlay").addClass("overlay").removeClass("no-overlay"),
		$(".activity-title").addClass("overlay-wrapper"),
		$(".list-activity-content").addClass("grid-activity-content").removeClass("list-activity-content");
});

/* NOT IN USE
$("#list-button").click(function(){
	$("#gallery-view").hide();
	$("#list-view").show();
	
});

$("#gallery-button").click(function(){
	$("#gallery-view").show();
	$("#list-view").hide();
	
}); */