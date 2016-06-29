

function addNote(){
	var payload = {"writeNote":1};
	BackgroundMessager.sendMessageToExistingTab(payload);
}

function saveNote(text){
	//call storage and save text
	console.log(text);
}

function removeNote(noteID){
	//call storage and delete Note
}

//actions accessible by content as public APIs
var actionAPIs = {"saveNote": saveNote, 
				  "removeNote": removeNote};
