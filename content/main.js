
function loadCss(){
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = chrome.runtime.getURL("css/page.css");
	(document.head || document.documentElement).appendChild(link);
}

function loadJquery(){
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = chrome.runtime.getURL("lib/jquery-3.0.0.min.js");
	(document.head || document.documentElement).appendChild(script);
}

function init(){

loadCss();
loadJquery()

//load listeners
ContentMessager.receiveMessages();

//check if page in db

//load page from db
}
init();
