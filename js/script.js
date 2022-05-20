$(document).ready(function(){
  if (window.location.hash == "#resume") {
    window.
    window.location.href = "resources/Resume_AndrewFang.pdf"
  }
  $(".typy").typed({
    strings: ["engineering manager.", "iOS engineer.", "software consultant."],
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

  $("#carousel").owlCarousel({
    autoPlay: 3000,
    items : 5,
    stopOnHover: true
  });

  var owl = $("#carousel").data('owlCarousel');

  $("#apple").on("click", function() {
    owl.jumpTo(0);
  });

  $("#android").on("click", function() {
    owl.jumpTo(11);
  });

  $("#web").on("click", function() {
    owl.jumpTo(19);
  });

  $("#matlab").on("click", function() {
    owl.jumpTo(26);
  });

  $("#arduino").on("click", function() {
    owl.jumpTo(36);
  });


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
    $("#about").addClass("offsetNav");
    $(".navbarinfo").css("marginRight", "14px");
  } else {
    $(".navbar").removeClass("navbar-fixed-top");
    $("#about").removeClass("offsetNav");
    $(".navbarinfo").css("marginRight", "-1px");
  }
});
