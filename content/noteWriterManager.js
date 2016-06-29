

var currentNoteWriter;

function deleteNoteWriter(){
	currentNoteWriter.remove();
	currentNoteWriter = null;
}

function noteWriterClickHandlers(){
	$("#btnSave").click(function(){
		deleteNoteWriter();
		saveNote();
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
		//.after returns the elem operated on, .next gets the elem after
		currentNoteWriter = $(selected.anchorNode).after(data).next()[0];
		noteWriterClickHandlers();
	});	
}