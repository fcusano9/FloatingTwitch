

chrome.windows.onCreated.addListener(function() {
	var iframe = document.createElement('iframe');

	// var tablink;
	// chrome.tabs.getSelected(null, function(tab) {
	// 	tablink = tab.url;
	// });

	iframe.src = 'https://google.com';

	iframe.style.cssText = 'width:100%; height:100%';

	document.body.appendChild(iframe);
})