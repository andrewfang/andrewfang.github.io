function initialize(event){
	$(".horizblocks").hide();
	$("#emailform").hide();
}

function colorize(event){
	$(this).closest("div").find("h2").css("color", event.data.color);
	$("#infoOnLinks").text(event.data.link);
	$("#infoOnLinks").animate({
		marginTop: "5px",
		opacity: 1
	});
}


function show(event) {
	if ($(this).hasClass("disabled")) {
		return false;
	} else {
		event.preventDefault();
		var currenthash = $(this).attr("href");
		$(".horizblocks").slideUp(300).delay(600);
		window.location = currenthash;
		$(".button").removeClass("disabled");
		if ($(this).hasClass("button")) {
			$(this).addClass("disabled");
		}
		if (currenthash != "#home") {
			$(currenthash).slideDown(800).delay(400);			
		}
	}
	$("#infoOnLinks").animate({opacity: 0});
}

$(document).ready(function(){
	initialize();

	// Hashing for url
	var arr = ["#home", "#projects", "#about"];
	if (window.location.hash == "" || window.location.hash == "#home") {
		$("#homebutton").addClass("disabled");
	} else if ($.inArray(window.location.hash, arr) !== -1) {
		$(window.location.hash).slideDown(300);
		$(window.location.hash + "button").addClass("disabled");
	} else {
		window.location = "404.html";
	}

	// Color the picture border on mouseover/leave of different elements
	$("#linkedin").on("mouseover", {color:"#0073b2", link:"LinkedIn"}, colorize);
	$("#facebook").on("mouseover", {color:"#465fa1", link:"Facebook"}, colorize);
	$("#gplus").on("mouseover", {color:"#b43021", link:"Google Plus"}, colorize);
	$("#twitter").on("mouseover", {color:"#00acee", link:"Twitter"}, colorize);
	$("#hkn").on("mouseover", {color:"#f7e26b", link:"HKN WebPage"}, colorize);
	$("#github").on("mouseover", {color:"#657e8c", link:"GitHub"}, colorize);
	$("#schedule").on("mouseover", {color:"#fdb000", link:"Class Schedule"}, colorize);
	$("#email").on("mouseover", {color:"#cf2a1c", link:"Email me at andrewfang@eecs.berkeley.edu"}, colorize);


	// For navigating about the website
	$("#homebutton").on("click", show);
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