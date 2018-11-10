
function enlargeWindow(appWindow){
	var newWidth = Math.round(appWindow.innerBounds.width * 1.03),
	newHeight = Math.round(newWidth * (9 / 16));

	appWindow.innerBounds.width = newWidth;
	appWindow.innerBounds.height = newHeight;
}

function shrinkWindow(appWindow){
	var newWidth = Math.round(appWindow.innerBounds.width / 1.03),
	newHeight = Math.round(newWidth * (9 / 16));

	appWindow.innerBounds.width = newWidth;
	appWindow.innerBounds.height = newHeight;
}

chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create("window.html", {
		frame: "none",
		innerBounds: {
			"width": 600,
			"height": 338,
			"minWidth": 400,
			"minHeight": 225
		},
		resizable: false,
		alwaysOnTop: true
	}, function (appWindow){
		appWindow.contentWindow.document.addEventListener("keydown", function(event) {
			// var appWindow = chrome.app.window.current();
		
			// Close window
			if (event.keyCode === 88) { // 'x' key
				appWindow.close();
			}
			
			// Make window larger by 3%
			if (event.keyCode === 107 || event.keyCode === 187) { // '+' key
				enlargeWindow(appWindow);
			}
		
			// Make window smaller by 3%
			if (event.keyCode === 109 || event.keyCode === 189) { // '-' key
				shrinkWindow(appWindow);
			}
		});
	});
});
