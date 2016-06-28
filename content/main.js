
function loadCss(){
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = chrome.runtime.getURL("css/page.css");
	(document.head || document.documentElement).appendChild(link);
}

function init(){

loadCss();

//load listeners
ContentMessager.receiveMessages();

//check if page in db

//load page from db
}
init();
