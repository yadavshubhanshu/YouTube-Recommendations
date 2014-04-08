  var userName;
  var userEmail;
  if (!document.getElementById('masthead-expanded-menu-email')) {
    alert("LOGIN ASSHOLE!!!!!");
  } else {
    userName = document.getElementById('yt-masthead-user-displayname').innerHTML;
    userEmail = document.getElementById('masthead-expanded-menu-email').innerHTML;
    alert("Username and User Email obtained bitch!!!!");
  }

  var ulNode = document.getElementsByTagName('ul')[10];
  var liNew = document.createElement('li');
  var textNode = document.createTextNode('this is what the fuck is all about!!!!');
  liNew.appendChild(textNode);
  ulNode.appendChild(liNew);

  var videoIds;
  var videoNames;
  document.addEventListener('pushIds', function (e) {
    videoIds = e.detail.ids;
    videoNames = e.detail.name;
    //alert(e.detail);

    $('#feed').append('<li class="feed-item-container  browse-list-item-container branded-page-box vve-check ">\
      <div class="feed-item-dismissable  last ">\
        <div class="feed-item-main feed-item-no-author">\
          <div class="feed-item-main-content">\
                      <div class="shelf-wrapper clearfix">\
            <div class="compact-shelf shelf-item yt-uix-shelfslider yt-uix-shelfslider-at-head vve-check clearfix  feeds-mode yt-uix-tdl" data-fold="1051,1127">\
              <h2 class="branded-page-module-title">\
                 <span class="video-thumb  yt-thumb yt-thumb-20">\
        <span class="yt-thumb-square">\
          <span class="yt-thumb-clip">\
            <img src="https://lh4.googleusercontent.com/-X32TVdvtcEQ/AAAAAAAAAAI/AAAAAAAAAAA/dkFMSTu3-h4/s88-c-k-no/photo.jpg" alt="Thumbnail" width="20">\
            <span class="vertical-align"></span>\
          </span>\
        </span>\
      </span>\
        <span class="shelf-title">\
          Our Recommended videos\
        </span>\
    </h2>\
          <div class="shelf-description yt-ui-ellipsis yt-ui-ellipsis-2"><span class="yt-ui-ellipsis-wrapper" data-original-html="&lt;b&gt;Recommended channel for you&lt;/b&gt;\
      "><b>Recommended channel for you</b>\
      </span></div>\
        <div class="yt-uix-shelfslider-body context-data-container">\
      <ul class="yt-uix-shelfslider-list">');
    for (var i = 0; i < videoIds.length; i++) {

      $('#feed').append('<li class="channels-content-item yt-shelf-grid-item yt-uix-shelfslider-item ">\
      <div class="yt-lockup clearfix  yt-lockup-video yt-lockup-grid vve-check context-data-item" data-context-item-user="Shubhanshu-Vaibhav" data-context-item-views="534,895 views" data-context-item-title="' + videoNames[i] + '" data-context-item-id="' + videoIds[i] + '" data-context-item-type="video" data-context-item-time="3:22">\
      <div class="yt-lockup-thumbnail">\
    <a href="/watch?v=' + videoIds[i] + '" class="ux-thumb-wrap yt-uix-sessionlink yt-fluid-thumb-link contains-addto " >    <span class="video-thumb  yt-thumb yt-thumb-175 yt-thumb-fluid">\
        <span class="yt-thumb-default">\
          <span class="yt-thumb-clip">\
            <img src="//i1.ytimg.com/vi/' + videoIds[i] + '/mqdefault.jpg" alt="Thumbnail" width="175">\
            <span class="vertical-align"></span>\
          </span>\
        </span>\
      </span>\
      <span class="video-time">3:22</span>\
    <button type="button" onclick=";return false;" class="addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button yt-uix-button yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip" title="Watch Later" data-video-ids="' + videoIds[i] + '" role="button"><span class="yt-uix-button-content">  <img src="http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">\
   </span></button>\
  </a>\
      </div>\
      <div class="yt-lockup-content">\
              <h3 class="yt-lockup-title">\
      <a class="yt-uix-sessionlink yt-uix-tile-link yt-ui-ellipsis yt-ui-ellipsis-2 " dir="ltr" title="' + videoNames[i] + '"  href="/watch?v=' + videoIds[i] + '"><span class="yt-ui-ellipsis-wrapper" data-original-html="' + videoNames[i] + '\
      ">' + videoNames[i] + '\
      </span></a>\
    </h3>\
    <div class="yt-lockup-meta">\
      <ul class="yt-lockup-meta-info">\
          <li>\
            by <a href="/channel/UCJY2MPA8T9OTG7dw_MqDlUg?feature=g-high" class="g-hovercard yt-uix-sessionlink yt-user-name "  dir="ltr" data-ytid="UCJY2MPA8T9OTG7dw_MqDlUg" data-name="g-high">Shubhanshu-Vaibhav</a>  <span class="yt-user-name-icon-verified">\
      <img src="http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-tooltip yt-channel-title-icon-verified" alt="" title="Verified name">\
    </span>\
          </li>\
        <li>534,895 views</li>\
          <li class="yt-lockup-deemphasized-text">\
              9 months ago\
          </li>\
      <li><a href="/user/messages"><span class="tab">Message Center</span></a></li></ul>\
    </div>\
      </div>\
        </div>\
          </li>');

    }

  });
