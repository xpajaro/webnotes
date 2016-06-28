

function addNote(selection){
	var selected = window.getSelection();

	var insertPoint = selected.anchorNode.nextSibling ? selected.anchorNode.nextSibling 
													: selected.anchorNode.parentNode;
													
	insertPoint.outerHTML += "<textarea rows='3' class='note-input' type=text />"
}

var actionAPIs = {"addNote" : addNote};
