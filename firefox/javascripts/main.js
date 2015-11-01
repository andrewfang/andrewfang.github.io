function show(event) {
	if ($(this).hasClass("disabled")) {
		return false;
	} else {
		event.preventDefault();
		var currenthash = $(this).attr("href");
		$(".main_content").slideUp(300).delay(600);
		$(currenthash).slideDown(800).delay(400);
		window.location = currenthash;
		$(".button").removeClass("disabled");
		if ($(this).hasClass("button")) {
			$(this).addClass("disabled");
		}
	}
}

function colorize(event){
	$(this).closest("section").find("#profile").css("background", event.data.color);
}

function decolorize(){
	$(this).closest("section").find("#profile").css("background", "none");
}


$(document).ready(function(){
	$("#logo").hide();
	$("#logo").fadeIn(1500);
	$("#current").parent().next().show();
	// $("blog").slideDown(300);
	var arr = ["#home", "#blog", "#projects", "#about", "#bash", "#devblog"];
	if ((window.location.hash == "") && (window.location.href.indexOf("blog") == -1)) {
		$("#home").slideDown(300);
		$("#homebutton").addClass("disabled");
	} else if ($.inArray(window.location.hash, arr) !== -1) {
		$(window.location.hash).slideDown(300);
		$(window.location.hash + "button").addClass("disabled");
	} else if (window.location.href.indexOf("blog") !== -1) {
		window.location = window.location;
	} else {
		window.location = "404.html";
	}
	// To deal with IE and other browser incompatabilities
	$("#BrowserWarning").hide();
	// To transition between the different "pages"
	$("#homebutton, #blogbutton, #projectsbutton, #aboutbutton, #devblogbutton, #bashbutton").on("click", show);

	// Make the profile picture slide up
	$("#about").on("mouseover", function(){
		$(this).find("#profile").animate({
			marginTop: "10px",
			opacity: 1
		});
	})

	// Color the picture border on mouseover/leave of different elements
	$("#linkedin").on("mouseover", {color:"#0073b2"}, colorize);
	$("#facebook").on("mouseover", {color:"#465fa1"}, colorize);
	$("#gplus").on("mouseover", {color:"#b43021"}, colorize);
	$("#twitter").on("mouseover", {color:"#00acee"}, colorize);
	$("#hkn").on("mouseover", {color:"#f7e26b"}, colorize);
	$("#github").on("mouseover", {color:"#657e8c"}, colorize);
	$("#schedule").on("mouseover", {color:"#fdb000"}, colorize);
	$("#email").on("mouseover", {color:"#cf2a1c"}, colorize);
	$(".aboutmelink").on("mouseleave", decolorize);

	// Easter Egg for front page
	$("#home").find("p").on("click", function(){
		var fang = $(this).find("span");
		if (fang.css("font-weight") == 'bold') {
			fang.css("font-weight", "normal");
		} else {
			fang.css("font-weight", "bold");
		}
	})
	// Background art for project pages
	$(".projectContainer").on("mouseover", function(){
		$(this).find(".projectBackground").css("opacity", .3);
	})

	$(".projectContainer").on("mouseleave", function(){
		$(this).find(".projectBackground").css("opacity", 0);
	})

	// Email form for About page
	$("#emailform").hide();
	$("#emailconfirmation").hide();

	$("#email").on("click", function(event){
		event.preventDefault();
		$("#emailform").slideToggle(700);
	})

	$("#submit").on("click", function(){
		$("#emailform").fadeOut("slow", function() {
			// $(this).text("I will add this functionality soon. Thanks for your patience").fadeIn("slow");

			$(this).text("Thanks for sending me an email. I will get back to you shortly.").fadeIn("slow");
		})
	})



});