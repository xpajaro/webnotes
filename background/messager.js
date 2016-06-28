
BackgroundMessager = new Messager();

BackgroundMessager.sendMessageToExistingTab = function (data, callback){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         BackgroundMessager.sendMessageToTab(tabs[0].id, data, callback);
    });
}

BackgroundMessager.sendMessageToTab = function(tabID, data, callback){
	if (!data){
		console.log("Please supply payload for BackgroundMessaging");
		return;
	}

    chrome.tabs.sendMessage(tabID, data);
}
