
// Subscribe to click event of the submit button
document.getElementById("submitButton").addEventListener("click", function(){

	// Get the elements that are needed
	var channel = document.getElementById("channel");
	var webview = document.getElementById("webview");
	var inputForm = document.getElementById("inputForm");

	// Set the source of the webview to the twitch channel
	webview.src = "https://player.twitch.tv/?channel=" + channel.value;

	webview.addEventListener('permissionrequest', function(e) {
		if (e.permission === 'fullscreen') {
			e.request.allow();
		}
	});

	// Hide the form and show the webview
	inputForm.style.display = "none";
	webview.style.display = "initial";
});


document.getElementById("webview").addEventListener("keydown", function(){

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