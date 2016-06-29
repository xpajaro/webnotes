

function addNote(){
	var payload = {"writeNote":1};
	BackgroundMessager.sendMessageToExistingTab(payload);
}

function removeNote(noteID){
	//call storage and delete Note
}

//actions accessible by content as public APIs
var actionAPIs = {"removeNote": removeNote};
