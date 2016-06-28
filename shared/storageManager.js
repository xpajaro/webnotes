
Storage = function (){
	this.storage = chrome.storage.sync;

	this.saveData = function(obj, callback){
		storage.set(obj, callback());
	}

	this.getData = function(keys, callback){
		storage.get(keys, callback());
	}

	this.removeData = function(keys, callback){
		storage.remove(keys, callback());
	}
}