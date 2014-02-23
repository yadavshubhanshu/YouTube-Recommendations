var watchHistory = $('.yt-lockup').map(function () {
  return $(this).attr("data-context-item-id");
}).get();
//console.log(watchHistory);
var videoTitle = [];
var videoCategory = [];
var videoId = [];
var d;

function analyze() {
  for (var i = 0; i < watchHistory.length; i++) {
    $.jTube({
      request: 'video',
      requestValue: watchHistory[i],
      requestOption: 'info',
      limit: 6,
      page: 1,
      success: function (video) {
        if (video.category == 'Music') {
          videoTitle.push(video.title);
          videoCategory.push(video.category);
          videoId.push(video.id);
        }
      },
      error: function (error) {
        alert(error);
      }
    });
  }
}
$(function () {
  for (var i = 0; i < watchHistory.length; i++) {
    $.jTube({
      request: 'video',
      requestValue: watchHistory[i],
      requestOption: 'info',
      limit: 6,
      page: 1,
      success: function (video) {
        if (video.category == 'Music') {
          videoTitle.push(video.title);
          videoCategory.push(video.category);
          videoId.push(video.id);
          //console.log(video.id);

        }
      },
      error: function (error) {
        alert(error);
      }
    });
  }


});


setTimeout(function () {
  /* Example: Send data to your Chrome extension*/
  document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
    detail: {
      "id": videoId,
      "name": videoTitle
    }
  }));
}, 2000);