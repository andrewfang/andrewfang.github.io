function initialize(event){
	$(".horizblocks").hide();
	$("#emailform").hide();
  $("#about")[0].style.height = Math.max(555, window.innerHeight);
}

function colorize(event){
	$(this).closest("#textabout").find("h2").css("color", event.data.color);
  if (event.data.link.length > 0) {
    $("body").css("background", event.data.color);
  }
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
	} else if (window.location.hash =="#resume") {
		window.location = "resources/Resume_AndrewFang.pdf";
	} else {
		window.location = "404.html";
	}

	// Color the picture border on mouseover/leave of different elements
	$("#linkedin").on("mouseover", {color:"#0077b6", link:"LinkedIn"}, colorize);
	$("#facebook").on("mouseover", {color:"#3b5998", link:"Facebook"}, colorize);
	$("#gplus").on("mouseover", {color:"#b43021", link:"Google Plus"}, colorize);
	$("#twitter").on("mouseover", {color:"#00acee", link:"Twitter"}, colorize);
	$("#hkn").on("mouseover", {color:"#f7e26b", link:"HKN WebPage"}, colorize);
	$("#instagram").on("mouseover", {color:"#517fa4", link:"Instagram"}, colorize);
	$("#pinterest").on("mouseover", {color:"#cb2027", link:"Pinterest"}, colorize);
	$("#github").on("mouseover", {color:"#4183c4", link:"GitHub"}, colorize);
	$("#email").on("mouseover", {color:"#cf2a1c", link:"Email me at andrewfang@eecs.berkeley.edu"}, colorize);
	$(".aboutmelink").on("mouseleave", {color:"#000000", link:""}, colorize);


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
