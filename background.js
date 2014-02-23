var videos = "haha";
var videoNames = "Names";
var tabInfo;
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) { // Listen to inject.js
  if (request.greeting == "hello") {
    videos = request.videos;
    videoNames = request.videoNames;
    //alert("AT BACKGROUND " + request.videoNames);

  } else if (request.afgelopen == "afgelopen") {
    status = request.status; // Set video status of playing tab
    if (status === "ENDED") { // If video ended, play next video in playlist
      playNextVideo();
    }
    updatePopup();
  } else {
    sendResponse({}); // close request.
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, props) {
  /* alert(
       'tabs.onUpdated -- tab: ' + tabId + ' status ' + props.status +
       ' url ' + props.url);*/
  if (props.status == "complete") {
    chrome.tabs.query({
      active: true,
      currentWindow: true,
      url: "*://www.youtube.com/"
    }, function (tabs) {
      //alert(tabs[0].url);
      chrome.tabs.sendMessage(tabs[0].id, {
        "greetingBgd": "videos",
        "data": videos,
        "names": videoNames
      });
    });
  }
  //   refreshTab(tabId);
});

/*
chrome.tabs.query({active: true, currentWindow: true, url: "*://www.youtube.com/"}, function(tabs){
      alert("sending meesage");
      tabInfo = tabs;
      chrome.tabs.sendMessage(tabs[0].id, {"greetingBgd":"videos","data":videos});  
});
*/