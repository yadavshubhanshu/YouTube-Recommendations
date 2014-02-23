function addScript(scriptURL, onload) {
  var script = document.createElement('script');
  script.setAttribute("type", "application/javascript");
  script.setAttribute("src", scriptURL);
  if (onload) script.onload = onload;
  document.documentElement.appendChild(script);
}

function addSecondScript() {
  addScript(chrome.extension.getURL("inject.js"));
}

addScript(chrome.extension.getURL("jquery.min.js"), addSecondScript);
/*
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) { 
	if (request.greetingBgd == "videos"){
		alert(request.data);	
	}

});*/
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    /*alert(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");*/
    if (request.greetingBgd == "videos") {
      //alert(request.data);
      setTimeout(function () {
        /* Example: Send data to your Chrome extension*/
        document.dispatchEvent(new CustomEvent('pushIds', {
          detail: {
            "ids": request.data,
            "name": request.names
          }
        }));
      }, 2000);
    }
  });