
ContentMessager = new Messager();

ContentMessager.sendMessageToBackground = function(data, callback){
    if (!callback){
        callback = function placeHolder () {}
    }
    chrome.runtime.sendMessage(data, callback);
}
