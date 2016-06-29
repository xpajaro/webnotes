

var currentNoteWriter;
var selectedNode;

function deleteNoteWriter(){
	currentNoteWriter.remove();
	currentNoteWriter = null;
}

function noteWriterClickHandlers(){
	$("#btnSave").click(function(){
		if ( saveNote(selectedNode) ){
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
		//.after returns the elem selected, .next gets the elem after
		selectedNode = selected.anchorNode;

		//write to page
		currentNoteWriter = $(selectedNode).after(data).next()[0];
		$("#noteContent").focus();

		noteWriterClickHandlers();
	});	
}