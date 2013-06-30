function show(event) {
	event.preventDefault();
	$(".main_content").slideUp(300).delay(600);
	$(event.data.type).slideDown(800).delay(400);
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
	$(".blogentry").hide();
	$("#current").parent().next().show();
	$("#home").slideDown(300);
	// To deal with IE and other browser incompatabilities
	$("#BrowserWarning").hide();
	// To transisiton between the different "pages"
	$("#homebutton").on("click", {type:"#home"}, show);
	$("#blogbutton").on("click", {type:"#blog"}, show);
	$("#projectbutton").on("click", {type:"#projects"}, show);
	$("#aboutbutton").on("click", {type:"#about"}, show);
	$("#bashbutton").on("click", {type:"#bash"}, show);

	// Make the blog entries show up when mouse-ing over or clicking
	$(".blogdates").on("mouseover", function(){
		event.preventDefault();
		$(this).parent().next("div").slideToggle(800);
	});
	$(".blogdates").on("click", function(){
		event.preventDefault();
		$(this).parent().next("div").slideToggle(800);
	});
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
	$("#hkn").on("mouseover", {color:"#f7e26b"}, colorize);
	$("#github").on("mouseover", {color:"#657e8c"}, colorize);
	$("#schedule").on("mouseover", {color:"#fdb000"}, colorize);
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

	$(".projectContainer").on("mouseover", function(){
		$(this).find(".projectBackground").css("opacity", .3);
	})

	$(".projectContainer").on("mouseleave", function(){
		$(this).find(".projectBackground").css("opacity", 0);
	})



});