

$(document).ready(() =>
{

  if (screen.width < screen.height) {
    $("#note").css("display", "flex");

  }
  else {
    $("#note").css("display", "none");
  }
  window.addEventListener("orientationchange", function (event)
  {

    if (screen.width < screen.height) {
      $("#note").css("display", "flex");

    }
    else {
      $("#note").css("display", "none");
    }
  });
});

if (($(window).width() < $(window).height())) {


  $("#unity-canvas").addClass("portrait");
} else if (($(window).width() > $(window).height())) {
  $("#unity-canvas").addClass("landscape");
}

window.addEventListener("orientationchange", function (event)
{

  if (($(window).width() < $(window).height())) {
    $("#note").css("display", "flex");

  }
  else {
    $("#note").css("display", "none");
  }
  if (event.target.screen.orientation.angle === 90) {
    $("#unity-canvas").addClass("landscape");

    if ($("#unity-canvas").hasClass("portrait")) {
      $("#unity-canvas").removeClass("portrait");
    }

  } else if (event.target.screen.orientation.angle === 0) {
    $("#unity-canvas").addClass("portrait");
    if ($("#unity-canvas").hasClass("landscape")) {
      $("#unity-canvas").removeClass("landscape");
    }
  }
});


function ShowKeyboard()
{
  $("#keyboard").select();
}

function StopLoading()
{
  document.getElementById("loading").remove();
}