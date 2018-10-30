

// ANCHOR This is when the extension icon is clicked
function createWindow(tab) {
	chrome.windows.create({
		url: "window.html",
		type: "popup",
		focused: true,
		width: 600,
		height: 338,
		left: 100,
		top: 100
	})
}

// event that is triggered when extension icon is clicked
chrome.pageAction.onClicked.addListener(createWindow)


// chrome.pageAction.onClicked.addListener(function(tab) {
// 	chrome.windows.create({
// 		url: "window.html",
// 		type: "popup",
// 		focused: true,
// 		width: 600,
// 		height: 338,
// 		left: 100,
// 		top: 100
// 	}, function(window) {
		
// 		var iframe = document.createElement('iframe');

// 		var tablink;
// 		chrome.tabs.getSelected(null, function(tab) {
// 			tablink = tab.url;
// 		});

// 		iframe.src = tablink;

// 		iframe.style.cssText = 'width:100%; height:100%';

// 		document.body.appendChild(iframe);
// 	});
// });

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
		console.log("The color is green.");
	});

	// Makes extension active when on twitch
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.twitch.tv'},
			})
			],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});

// Run a page script, I might not need this
// changeColor.onclick = function(element) {
// 	let color = element.target.value;
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		chrome.tabs.executeScript(
// 			tabs[0].id,
// 			{code: 'document.body.style.backgroundColor = "' + color + '";'});
// 	});
// };