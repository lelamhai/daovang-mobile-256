createUnityInstance(document.querySelector("#unity-canvas"), {
  dataUrl: "Build/Game.data",
  frameworkUrl: "Build/Game.framework.js",
  codeUrl: "Build/Game.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "Qusdrok",
  productName: "Treasure Hunter",
  productVersion: "0.1",
})
  .then((instance) =>
  {
    unityInstance = instance;
    $('#keyboard').on('input', function (e)
    {
      var text = $(this).val();
      unityInstance.SendMessage('Bridge', 'ReviceText', text);
    });
  })
  .catch((message) =>
  {
    console.warn(message);
  });


if (($(window).width() < $(window).height())) {

  $("#note").css("display", "flex");
  $("#unity-canvas").addClass("portrait");
} else if (($(window).width() > $(window).height())) {
  $("#unity-canvas").addClass("landscape");
}

window.addEventListener("orientationchange", function (event)
{
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