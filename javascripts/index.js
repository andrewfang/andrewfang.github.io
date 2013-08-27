function initialize(event){
	$(".horizblocks").hide();
	$("#emailform").hide();
}

function colorize(event){
	$(this).closest("div").find("h2").css("color", event.data.color);
}
function colorizephoto(event){
	var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
	$(this).closest(".horizblocks").find("#profile").css("background", randomcolor);
}

// function show(event){
// 	$(".horizblocks").hide();
// 	$(event.data.element).slideDown();
// }
function show(event) {
	if ($(this).hasClass("disabled")) {
		return false;
	} else {
		event.preventDefault();
		var currenthash = $(this).attr("href");
		$(".horizblocks").slideUp(300).delay(600);
		$(currenthash).slideDown(800).delay(400);
		window.location = currenthash;
		$(".button").removeClass("disabled");
		if ($(this).hasClass("button")) {
			$(this).addClass("disabled");
		}
	}
}

$(document).ready(function(){
	initialize();

	var arr = ["#home", "#projects", "#about"];
	if (window.location.hash == "") {
		$("#homebutton").addClass("disabled");
	} else if ($.inArray(window.location.hash, arr) !== -1) {
		$(window.location.hash).slideDown(300);
		$(window.location.hash + "button").addClass("disabled");
	} else {
		window.location = "404.html";
	}

	// Color the picture border on mouseover/leave of different elements
	$("#linkedin").on("mouseover", {color:"#0073b2"}, colorize);
	$("#facebook").on("mouseover", {color:"#465fa1"}, colorize);
	$("#gplus").on("mouseover", {color:"#b43021"}, colorize);
	$("#twitter").on("mouseover", {color:"#00acee"}, colorize);
	$("#hkn").on("mouseover", {color:"#f7e26b"}, colorize);
	$("#github").on("mouseover", {color:"#657e8c"}, colorize);
	$("#schedule").on("mouseover", {color:"#fdb000"}, colorize);
	$("#email").on("mouseover", {color:"#cf2a1c"}, colorize);
	$(".aboutmelink").on("mouseleave", {color:"#000000"}, colorize);

	// Color the main profile picture
	$("#homebutton").on("mouseover", colorizephoto);
	$("#projectsbutton").on("mouseover", colorizephoto);
	$("#aboutbutton").on("mouseover", colorizephoto);

	// $("#homebutton").on("click", {element:"#"} show);
	$("#projectsbutton").on("click", show);
	$("#aboutbutton").on("click", show);


	// Background art for project pages
	$(".projectContainer").on("mouseover", function(){
		$(this).find(".projectBackground").css("opacity", .3);
	})

	$(".projectContainer").on("mouseleave", function(){
		$(this).find(".projectBackground").css("opacity", 0);
	})

});