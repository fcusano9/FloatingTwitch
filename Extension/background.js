/*global chrome*/

// This is when the extension icon is clicked
function createWindow(tab) {
	var window = chrome.windows.create({
		url: "window.html",
		type: "popup",
		focused: true,
		width: 600,
		height: 338,
		left: 100,
		top: 100
	});
}

// Event that is triggered when extension icon is clicked
chrome.pageAction.onClicked.addListener(createWindow);


// Makes extension active when on twitch or youtube
chrome.declarativeContent.onPageChanged.addRules([
	{
		conditions: [new chrome.declarativeContent.PageStateMatcher({ pageUrl: {hostEquals: "www.twitch.tv"} })],
		actions: [new chrome.declarativeContent.ShowPageAction()]
	},
	{
		conditions: [new chrome.declarativeContent.PageStateMatcher({ pageUrl: {hostEquals: "www.youtube.com"} })],
		actions: [new chrome.declarativeContent.ShowPageAction()]
	}
]);


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


// Run a page script, I might not need this
// changeColor.onclick = function(element) {
// 	let color = element.target.value; m
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		chrome.tabs.executeScript(
// 			tabs[0].id,
// 			{code: 'document.body.style.backgroundColor = "' + color + '";'});
// 	});
// };