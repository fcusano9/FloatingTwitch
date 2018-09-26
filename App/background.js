// MIT License

// Copyright (c) 2018 Frank Cusano

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


var appWindow;

chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create("window.html", {
		frame: "none",
		innerBounds: {
			"width": 600,
			"height": 338,
			"minWidth": 400,
			"minHeight": 225
		},
		resizable: false
	});
});

function enlargeWindow(){
	var newWidth = Math.round(appWindow.innerBounds.width * 1.03),
	newHeight = Math.round(newWidth * (9 / 16));

	appWindow.innerBounds.width = newWidth;
	appWindow.innerBounds.height = newHeight;
}

function shrinkWindow(){
	var newWidth = Math.round(appWindow.innerBounds.width / 1.03),
	newHeight = Math.round(newWidth * (9 / 16));

	appWindow.innerBounds.width = newWidth;
	appWindow.innerBounds.height = newHeight;
}

appWindow.contentWindow.document.addEventListener("keydown", function(event) {
	var appWindow = chrome.app.window.current();

	// Close window
	if (event.keyCode === 88) { // 'x' key
		appWindow.close();
	}
	
	// Make window larger by 3%
	if (event.keyCode === 107) { // '+' key
		enlargeWindow();
	}

	// Make window smaller by 3%
	if (event.keyCode === 109) { // '-' key
		shrinkWindow();
	}
});