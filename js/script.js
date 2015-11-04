$(document).ready(function(){
  $(".typy").typed({
    strings: ["iOS", "Android", "Web"],
    typeSpeed: 50,
    backSpeed: 40,
    showCursor: false,
    loop: true,
    loopCount: false,
    backDelay: 2000
  });
  for (var idx = 0; idx < socials.length -1; idx++) {
    setTypeAction(idx);
  }

});

// Cool type out feature for about page
var socials = ["linkedIn", "github", "facebook", "twitter", "pinterest", "instagram", "email"];
var startingState = -1;

function setTypeAction(idx) {
  $("#"+socials[idx]).on("mouseenter", function() {
    typeOut(idx);
  });
};

function typeOut(idx) {
  $("#" + socials[idx] + "about").typed({
    strings: [socials[idx].charAt(0).toUpperCase() + socials[idx].slice(1)],
    typeSpeed: 0,
    showCursor: false,
    onStringTyped: function() {
      if (startingState == -1) {
        startingState = idx;
      }
      if (idx + 1 > startingState && idx + 1 < socials.length) {
        typeOut(idx+1);
      }
      if (idx - 1 < startingState && idx -1 >= 0) {
        typeOut(idx-1);
      }
    }
  });
}

// To make the bar stick to the top as we scroll down
$(window).scroll(function() {
  if (window.pageYOffset > $("#splash").height()) {
    $(".navbar").addClass("navbar-fixed-top");
    $("#iosTitle").addClass("offsetNav");
    $(".navbarinfo").css("marginRight", "14px");
  } else {
    $(".navbar").removeClass("navbar-fixed-top");
    $("#iosTitle").removeClass("offsetNav");
    $(".navbarinfo").css("marginRight", "-1px");
  }
});
