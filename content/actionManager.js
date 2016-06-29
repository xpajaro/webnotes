
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

function saveNote(node){
	var content = $("#noteContent").val();
	var successful;

	if (content && content.trim()){
		var noteID = Math.round(new Date().getTime()/1000);
		var note = new Note(content, node, noteID);

		storeNote(note, node.baseURI, function(){
			createAnnotation(note);
		});

		successful = true;
	}

	return successful;
}

var actionAPIs = {"writeNote" : writeNote};

