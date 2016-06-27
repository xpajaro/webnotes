
var highlights = [];

function Selection(text, parent){
	this.text = text;
	this.parent = parent;
}

function getParentDiv(textNode){
	var currentNode = textNode.parentNode;
	while (currentNode && currentNode.tagName !== "DIV"){
		currentNode = currentNode.parentNode;
	}
	return currentNode;
}

function validateText(text){
	var cleanText = selectedText.trim();
	var valid = false;

	if (cleanText && cleanText.split(' ').length > 9){
		valid = true;
	}
	
	return valid;
}

function mouseTracker(){
	var selectedText = window.getSelection();
	var selectedText_div = null;

	if (selectedText &&  validateText(selectedText.toString()) ){
		selectedText_div = getParentDiv(selectedText.anchorNode);
	}
}

function registerTextSelection(){
	document.addEventListener("mouseup", mouseTracker);
}

