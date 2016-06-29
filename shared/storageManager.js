
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
	if (!callback){
		return;
	}

	dataStore.getData(pageAddress, function(notesOnPage){

		if (jQuery.isEmptyObject(notesOnPage)){ 
			notesOnPage = [];
		} else{
			notesOnPage = notesOnPage[pageAddress];
		}

		callback(notesOnPage);
	});
}

function storeNote(note, pageAddress, callback){
	getNotes(pageAddress, function(notesOnPage){

		notesOnPage.push(note);

		var payload = {};
		payload[pageAddress] = notesOnPage;

		dataStore.saveData(payload, function(){
			console.log("saved at ", pageAddress);

			if (callback){
				callback();
			}
		});		
	});
}