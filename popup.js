document.getElementById('unfriendButton').addEventListener('click', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	  chrome.tabs.executeScript(tabs[0].id, { file: 'content.js' });
	});
 });
 
 document.getElementById('stopButton').addEventListener('click', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	  chrome.tabs.executeScript(tabs[0].id, { code: 'stopUnfriending = true;' });
	});
 });