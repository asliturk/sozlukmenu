// Taken from the DictionarySearch extension by Jaap Haitsma <jaap@haitsma.org>
function getSelectedText()
{
	var node = document.popupNode;
    var selection = "";

    if ((node instanceof HTMLTextAreaElement) || (node instanceof HTMLInputElement && node.type == "text")) {
        selection = node.value.substring(node.selectionStart, node.selectionEnd);
    }
    else {
        var focusedWindow = new XPCNativeWrapper(document.commandDispatcher.focusedWindow, 'document', 'getSelection()');
        selection = focusedWindow.getSelection().toString();
    }

    // Addresses longer than 200 characters are probably bogus anyway...
    if (selection.length > 200)
    {
        selection = selection.substring(0, 199);
    }
    
	selection = selection.replace(/(\n|\r|\t|(\r\n))+/g, " ");

	// Strip spaces at start and end.
	selection = selection.replace(/(^\s+)|(\s+$)/g, "");

	selection = selection.split(" ");
	    
	// Remove certain characters at the beginning and end of every word
	for (i = 0; i < selection.length; i++)
	{
		selection[i] = selection[i].replace(/^(\&|\(|\)|\[|\]|\{|\}|"|,|\.|!|\?|'|:|;)+/, "");
		selection[i] = selection[i].replace(/(\&|\(|\)|\[|\]|\{|\}|"|,|\.|!|\?|'|:|;)+$/, "");
	}
	
	selection = selection.join(" ");
	
	return selection;
}