var player = videojs('content_video');

var options = {
  id: 'content_video',
  adTagUrl: 'https://a.thoughtleadr.com/vpaid-20/022c9e3b-a8eb-4ed1-9dfb-13eec729ec3c/vast.xml',
  debug: true
};

// This must be called before player.play() below.
player.ima(options);
player.ima.requestAds();
// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();

// This must be called after player.ima(...) above.
player.play();
