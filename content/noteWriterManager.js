

var currentNoteWriter;
var selectedNode;

function deleteNoteWriter(){
	currentNoteWriter.remove();
	currentNoteWriter = null;
}

function noteWriterClickHandlers(){
	$("#btnSave").click(function(){
		var nodePath = getNodeXPath(selectedNode);
		if ( saveNote(nodePath) ){
			deleteNoteWriter();
		}
	});

	$("#btnCancel").click(function(){
		deleteNoteWriter();
	});
}


function createNoteWriter(){
	var selected = window.getSelection();

	getTemplate(WRITE_NOTE_TEMPLATE, function(data){
		if (currentNoteWriter){
			currentNoteWriter.remove();
		}

		selectedNode = selected.anchorNode;

		//write to page
		//.after returns the elem selected, .next gets the elem after
		//we want to select the notewriter web control
		currentNoteWriter = $(selectedNode).after(data).next()[0];
		$("#noteContent").focus();

		noteWriterClickHandlers();
	});	
}