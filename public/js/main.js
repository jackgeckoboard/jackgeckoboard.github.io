$(document).ready(function(){

  //apply css transform to container

  var resizePreview = function(windowSize, previewSize){

    if (windowSize < previewSize){

    $(".preview").css({
      "transform" : "scale(" + ((windowSize - 100) / previewSize) + ") translate(100px,-80px)"
    });
  }
};

  resizePreview($(window).width(), $(".preview").width())

  //recalculate when the window is resizePreview

  $(window).resize(function(){
    resizePreview($(window).width(), $(".preview").width())
  });

  //populate iframe from form

  //Get content entered in form

  var url = "https://internalstats.geckoboard.com/dashboards/F9ED30FBE9D1D381";

  $("#urlinput").focus()

  $("#urlinput").on("change paste keyup", function() {
     url = $("#urlinput").val();
     $("iframe").attr("src", url);
  });

  //Cancel scroll on iframe




});
