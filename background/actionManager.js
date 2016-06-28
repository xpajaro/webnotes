
function addNote(){
	var payload = {"addNote":0};
	BackgroundMessager.sendMessageToExistingTab(payload);
}

function saveNote(text){
	//call storage and save text
	console.log(text);
}


function removeNote(noteID){
	//call storage and delete Note
}

var actionAPIs = {"saveNote": saveNote, 
				  "removeNote": removeNote};
