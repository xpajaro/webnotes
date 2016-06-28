
Messager = function(){
    this.receiveMessages = function(){
    	chrome.extension.onMessage.addListener(
          function(request, sender, sendResponse) {

          	var actions = Object.keys(actionAPIs); //actionAPIs found in actionManager

            for (var i = 0; i< actions.length; i++){
            	var action = actions[i];
            	var payload = request[action];

            	if (payload !== undefined){
            		actionAPIs[action]( payload );
            	}
            }
        });
    }
}