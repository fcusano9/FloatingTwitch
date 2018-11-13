/*global chrome*/

function enlargeWindow(appWindow){
	// Get the old width and height
	var oldWidth = appWindow.outerBounds.width;
	var oldHeight = appWindow.outerBounds.height;

	// Calculate the new width and height
	var newWidth = Math.round(oldWidth * 1.03);
	var newHeight = Math.round(newWidth * (9 / 16));

	// Move the window left and up to offset the amount we are adding to the size
	appWindow.outerBounds.left -= newWidth - oldWidth;
	appWindow.outerBounds.top -= newHeight - oldHeight;

	// Set the new width and height
	appWindow.outerBounds.width = newWidth;
	appWindow.outerBounds.height = newHeight;
}

function shrinkWindow(appWindow){
	var minWidth = appWindow.outerBounds.minWidth;

	// Get the old width and height
	var oldWidth = appWindow.outerBounds.width;
	var oldHeight = appWindow.outerBounds.height;

	// Calculate the new width and height
	var newWidth = Math.round(oldWidth / 1.03)
	var newHeight = Math.round(newWidth * (9 / 16));

	// Move the window right and down to offset the amount we are subtracting from the size
	if (!(newWidth < minWidth)){
		appWindow.outerBounds.left += oldWidth - newWidth;
		appWindow.outerBounds.top += oldHeight - newHeight;
	}

	// Set the new width and height
	appWindow.outerBounds.width = newWidth;
	appWindow.outerBounds.height = newHeight;
}

chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create("window.html", {
		frame: "none",
		outerBounds: {
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

			// if (!event.ctrlKey){
			// 	return;
			// }

			switch(event.key) {
				// Close window with 'ctrl x'
				case "x":
					appWindow.close();
					break;

				// Make window larger by 3% with 'ctrl +'
				case "+":
				case "=":
					enlargeWindow(appWindow);
					break;

				// Make window smaller by 3% with 'ctrl -'
				case "-":
					shrinkWindow(appWindow);
					break;

				// Move window left 10px with 'ctrl ←'
				case "ArrowLeft":
					appWindow.outerBounds.left -= 5;
					break;

				// Move window up 10px with 'ctrl ↑'
				case "ArrowUp":
					appWindow.outerBounds.top -= 5;
					break;

				// Move window right 10px with 'ctrl →'
				case "ArrowRight":
					appWindow.outerBounds.left += 5;
					break;

				// Move window down 10px with 'ctrl ↓'
				case "ArrowDown":
					appWindow.outerBounds.top += 5;
					break;
			}
		});
	});
});
