
var WRITE_NOTE_TEMPLATE = "html/writeNoteTemplate.html";

//get html templates from /html file in extension
function getTemplate(templateID, callback){
	var path = chrome.extension.getURL(templateID);
	$.get(path, function(data) {
		callback(data);
	});
}


//insert text input  after paragraph or parent of text
function addNote(selection){
	var selected = window.getSelection();

	getTemplate(WRITE_NOTE_TEMPLATE, function(data){
		$(selected.anchorNode).after(data);
	});	
}

function saveNote(){
	
}


function onClickHandlers(){
	$("#btnSave").click(function(){
		saveNote();
	});
}

var actionAPIs = {"addNote" : addNote};

