
var ANNOTATION_TEMPLATE = "html/annotationTemplate.html";

function writeToAnnotation(tag, content){
	$("#annotation" + tag + " #note-content").text (content);
}

function deleteAnnotation(tag){
	var noteID = tag.substr(1);
	removeNote(noteID, document.baseURI, function(){
		$("#annotation" + tag).remove();
	});
}

function annotationClickHandlers(tag){
	var annotationID = "#annotation" + tag;
	$(annotationID +  " #btnDelete").click(function(){
		deleteAnnotation(tag);
	});
}

//identify any important elements with tag in template
//1. annotation div (div id="annotation") 
function tagElements(tag, template){
	return template.replace("annotation", "annotation" + tag);
}

function createAnnotation(note){
	getTemplate(ANNOTATION_TEMPLATE, function(annotationTemplate){
		var tag = "_" + note.id;
		annotationTemplate = tagElements(tag, annotationTemplate);

		//write to page
		//convert to element using form xpath 
		var node = getNode(note.nodePath);
		node.after(annotationTemplate);
		
		writeToAnnotation(tag, note.content);

		annotationClickHandlers(tag);
	});	
}