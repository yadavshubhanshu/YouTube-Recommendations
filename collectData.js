function addScript(scriptURL, onload) {
  var script = document.createElement('script');
  script.setAttribute("type", "application/javascript");
  script.setAttribute("src", scriptURL);
  if (onload) script.onload = onload;
  document.documentElement.appendChild(script);
}

function addSecondScript() {
  addScript(chrome.extension.getURL("jTube.js"));
  addScript(chrome.extension.getURL("inject2.js"));
}

addScript(chrome.extension.getURL("jquery.min.js"), addSecondScript);

//variable to store video names
var videoNames;
var videoIDs;
// Event listener
document.addEventListener('RW759_connectExtension', function (e) {
  //videoNames = e.detail.name;
  //videoIDs = e.names;
  //alert(videoNames);
  chrome.extension.sendMessage({
    "greeting": "hello",
    "videos": e.detail.id,
    "videoNames": e.detail.name
  });
});