function show() {
	$(".main_content").slideUp(300).delay(600);
	$(window.location.hash).slideDown(800).delay(400);
}

$(document).ready(function(){
	$(".blogentry").hide();
	$("#current").parent().next().show();
	var arr = ["#bash", "#devblog"];
	if ($.inArray(window.location.hash, arr) !== -1) {
		$("#mainblog").hide();
		show();
	}

	// Make the blog entries show up when clicking
	$(".blogdates").click(function(event){
		event.preventDefault();
		$(this).parent().next("div").slideToggle(800);
	});
});