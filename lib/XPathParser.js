//credit @Slabko
//http://stackoverflow.com/questions/3454526/how-to-calculate-the-xpath-position-of-an-element-using-javascript

/**
 * Gets an XPath for a node which describes its hierarchical location.
 */

function getNode(xpath){
    return $(document.evaluate ( xpath,
                                document,
                                null,
                                XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                                null
                                )
                    .snapshotItem(0));
}

function getNodeXPath(node) {
    if (node && node.id)
        return '//*[@id="' + node.id + '"]';
    else
        return getNodeTreeXPath(node);
};

function getNodeTreeXPath (node) {
    var paths = [];

    // Use nodeName (instead of localName) so namespace prefix is included (if any).
    for (; node && (node.nodeType == 1 || node.nodeType == 3) ; node = node.parentNode)  {
        var index = 0;
        // EXTRA TEST FOR ELEMENT.ID
        if (node && node.id) {
            paths.splice(0, 0, '/*[@id="' + node.id + '"]');
            break;
        }

        for (var sibling = node.previousSibling; sibling; sibling = sibling.previousSibling) {
            // Ignore document type declaration.
            if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
                continue;

            if (sibling.nodeName == node.nodeName)
                ++index;
        }

        var tagName = (node.nodeType == 1 ? node.nodeName.toLowerCase() : "text()");
        var pathIndex = (index ? "[" + (index+1) + "]" : "");
        paths.splice(0, 0, tagName + pathIndex);
    }

    return paths.length ? "/" + paths.join("/") : null;
};