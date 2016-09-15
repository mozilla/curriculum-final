// Curriculum Template Code
//
// What it does
// * Handles navigation between the activity steps
// * Shows the correct step based on the URL (when sending someone a link to a specific step, for example)
// * Keeps the left-hand navigation fixed to the top of the page when in desktop mode

var navTop, navEl, windowHeight, navHeight;

$(document).ready(function(){
  navEl = $(".agenda-navigation");
  var navOffset = navEl.offset();
  navTop = navOffset.top;

  navigate(window.location.hash);

  navEl.on("click","a",function(){
    var step = $(this).attr("href");
    navigate(step);
    return false;
  });

  $(window).on("scroll",function(){
    if($(".wrapper").width() > 600){
      scroll();
    }
  });

  $("aside img").on("load",function(){
    navOffset = navEl.offset();
    navTop = navOffset.top;
  });
});

function navigate(hash){
  // First, we'll hide all of the conten
  $(".agenda > li").hide();
  $("section.overview").hide();

  // Next, we'll try to figure out what step to show based on the hash.
  hash = hash.toLowerCase();
  var numberOfSteps = $(".agenda > li").length;
  var overview = true;
  if(hash.indexOf("step") > 0) {
    var step = hash.replace("#step-","");
    if(step <= numberOfSteps){
      overview = false;
    }
  }

  // If there's a step number in the hash, we'll show that step.
  // Otherwise, we'll default to the overview.
  if(overview) {
    hash = "#overview";
    $("section.overview").show();
    $(".wrapper").attr("mode","overview");
  } else {
    $(".agenda > li:nth-child("+step+")").show();
    $(".wrapper").attr("mode","step");
  }

  // Here we add the selected class to the activity navigation link.
  navEl.find(".selected").removeClass("selected");
  navEl.find("a[href="+hash+"]").parent().addClass("selected");

  window.location.hash = hash;
}

function scroll(){
  var scrolled = $(window).scrollTop();
  var delta = scrolled - navTop;
  navHeight = $(".agenda-navigation").height();
  windowHeight = $(window).height();

  if(navHeight < windowHeight){
    if(delta > 0){
      $(".agenda-navigation").css("top",delta + "px");
    } else {
      $(".agenda-navigation").css("top",0);
    }
  }
}
