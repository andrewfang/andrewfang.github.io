function hide(id) {
	var span = document.getElementById(id);
	if (span.style.display == "block") {
		span.style.display="none";
	}
	else {
		span.style.display="block";
	}
}