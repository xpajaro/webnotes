

var MENU_ID = "saveNoteMenu" ;
var MENU_CAPTION = "Add note" ;


function onClickHandler(info, tab) {
	if (info.menuItemId === MENU_ID){
		addNote();
	}
};

function createMenu(){
    chrome.contextMenus.create({"title": MENU_CAPTION, 
								"contexts":["selection"],
                                "id": MENU_ID});
}

function registerMenuHandlers(){
	chrome.contextMenus.onClicked.addListener(onClickHandler);
}

function prepareMenu(){
	createMenu()
	registerMenuHandlers();
}