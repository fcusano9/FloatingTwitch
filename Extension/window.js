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






// Subscribe to click event of the submit button
document.getElementById("submitButton").addEventListener("click", function(){

	// Get the elements that are needed
	//var webview = document.getElementById("webview");
	var inputForm = document.getElementById("inputForm");
	var channel = document.getElementById("channel");
	
	// If the user didn't enter a stream name return
	// var stream = channel.value;
	// if (stream === "" || stream === null){
	// 	return;
	// }

	// Set the source of the webview to the twitch channel
	//webview.src = "https://player.twitch.tv/?channel=" + stream + "&muted=false";

	// webview.addEventListener("permissionrequest", function(e) {
	// 	if (e.permission === "fullscreen") {
	// 		e.request.allow();
	// 	}
	// });

	// Hide the form and show the webview
	inputForm.style.display = "none";

	//webview.style.display = "initial";
});