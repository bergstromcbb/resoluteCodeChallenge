function start() {
  if (window.XMLHttpRequest) {
    var xmlhttp = new XMLHttpRequest();
    document.getElementById("Content").innerHTML =
      "<h1>Using XMLHttpRequest Object</h1>";
  } else {
    var xmlhttp = false;
    document.getElementById("Content").innerHTML =
      "<h1>XMLHttp cannot be created!</h1>";
  }
}

observeEvent(window, "load", function () {
  var btn = document.getElementById("btnStart");
  observeEvent(btn, "click", start);
});