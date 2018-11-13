
// Subscribe to click event of the submit button
document.getElementById("submitButton").addEventListener("click", function(){

	// Get the elements that are needed
	var webview = document.getElementById("webview");
	var inputForm = document.getElementById("inputForm");
	var channel = document.getElementById("channel");
	
	// If the user didn't enter a stream name return
	var stream = channel.value;
	if (stream === "" || stream === null){
		return;
	}

	// Set the source of the webview to the twitch channel
	webview.src = "https://player.twitch.tv/?channel=" + stream;

	webview.addEventListener("permissionrequest", function(e) {
		if (e.permission === "fullscreen") {
			e.request.allow();
		}
	});

	webview.addEventListener("keydown", function(){
		var appWindow = chrome.app.window.current();
		
	
		// Close window
		if (event.key === "x") { // 'x' key
			appWindow.close();
		}
	})

	// Hide the form and show the webview
	inputForm.style.display = "none";
	webview.style.display = "initial";
});
