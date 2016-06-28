

function init(){

	//listen for API requests
	BackgroundMessager.receiveMessages();
	
	//create context menu 
	prepareMenu();

}
init();
