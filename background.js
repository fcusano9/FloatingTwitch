
chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create("window.html", {
		frame: "none",
		id: "windowId",
		innerBounds: {
			"width": 600,
			"height": 338,
			"minWidth": 400,
			"minHeight": 300
		},
	});
});