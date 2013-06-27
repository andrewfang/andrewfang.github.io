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
	$(".main_content").hide();
	$(".blogentry").hide();
	$("#profile").hide();
	$("#current").parent().next().show();
	$("#home").slideDown(300);
	$("#homebutton").on("click", {type:"#home"}, show);
	$("#blogbutton").on("click", {type:"#blog"}, show);
	$("#projectbutton").on("click", {type:"#projects"}, show);
	$("#aboutbutton").on("click", {type:"#about"}, show);
	$("#bashbutton").on("click", {type:"#bash"}, show);
	$(".blogdates").on("mouseover", function(){
		event.preventDefault();
		$(this).parent().next("div").slideToggle();
	});
	$("#about").on("mouseover", function(){
		$(this).find("#profile").fadeIn(2000);
	})

	$("#linkedin").on("mouseover", {color:"#0073b2"}, colorize);
	$("#facebook").on("mouseover", {color:"#465fa1"}, colorize);
	$("#hkn").on("mouseover", {color:"#f7e26b"}, colorize);
	$("#github").on("mouseover", {color:"#657e8c"}, colorize);
	$("#schedule").on("mouseover", {color:"#fdb000"}, colorize);
	$(".aboutmelink").on("mouseleave", decolorize);

});