document.getElementById('stopButton').addEventListener('click', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	  chrome.tabs.executeScript(tabs[0].id, { code: 'stopUnfriending = true; stopUnfollowing = true;' });
	});
 });