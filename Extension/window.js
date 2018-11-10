/*global chrome*/

chrome.windows.onCreated.addListener(function() {

	var iframe = document.getElementById("webview");

	// var tablink;
	// chrome.tabs.getSelected(null, function(tab) {
	// 	tablink = tab.url;
	// });

	chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {
		var url = tabs[0].url;
		iframe.src = url;
		chrome.tabs.query();
		console.log(url);
	});
});