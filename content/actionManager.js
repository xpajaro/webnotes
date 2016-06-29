
var WRITE_NOTE_TEMPLATE = "html/writeNoteTemplate.html";

//get html templates from /html file in extension
function getTemplate(templateID, callback){
	var path = chrome.extension.getURL(templateID);
	$.get(path, function(data) {
		callback(data);
	});
}

function writeNote(){
	createNoteWriter();
}

function saveNote(){
	//store!!!
	
}

var actionAPIs = {"writeNote" : writeNote};

