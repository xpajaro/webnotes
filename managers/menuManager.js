

var MENU_ID = "saveNoteMenu" ;


function onClickHandler(info, tab) {
	if (info.menuItemId === MENU_ID){
		addNote();
	}
};

function createMenu(){
    chrome.contextMenus.create({"title": "Add note", 
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