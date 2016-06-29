
Storage = function (){
	this.storage = chrome.storage.sync;

	this.saveData = function(obj, callback){
		this.storage.set(obj, callback);
	}

	this.getData = function(keys, callback){
		this.storage.get(keys, callback);
	}

	this.removeData = function(keys, callback){
		this.storage.remove(keys, callback);
	}
}
var dataStore = new Storage(); 


function getNotes(pageAddress, callback){
	dataStore.getData(pageAddress, function(notesOnPage){

		if (!jQuery.isEmptyObject(notesOnPage)){
			notesOnPage = notesOnPage[pageAddress];
		}

		callback(notesOnPage);
	});
}


function prepareAndSaveNotes(notes, pageAddress, callback){
	var payload = {};
	payload[pageAddress] = notes;

	dataStore.saveData(payload, callback);
}

function storeNote(note, pageAddress, callback){
	getNotes(pageAddress, function(notesOnPage){
		notesOnPage[note.id] = note;
		prepareAndSaveNotes(notesOnPage, pageAddress, callback);

	});
}


function removeNote( noteID, pageAddress, callback){
	getNotes(pageAddress, function(notesOnPage){
		delete notesOnPage[noteID];
		prepareAndSaveNotes(notesOnPage, pageAddress, callback);	
	});
}