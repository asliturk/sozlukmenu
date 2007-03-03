String.prototype.trim = function(){return this.replace(/(^\s+)|(\s+$)/g, "");}

var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

window.addEventListener("load", onMenuInit, false);

function onMenuInit()
{
	if (document.getElementById("contentAreaContextMenu"))
    {
        document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", onContextMenuShowing, false);
    }	
}

function onContextMenuShowing(e)
{
	var selectedText = getSelectedText();
	var zarganContextMenu = document.getElementById("zarganContextMenu");
	var theFreeDictinaryMenu = document.getElementById("theFreeDictinaryMenu");

	if (selectedText != "")
	{
		zarganContextMenu.hidden = false;
		theFreeDictinaryMenu.hidden = false;

		if (selectedText.length > 25)
		{
			selectedText = selectedText.substr(0, 21) + "...";
        }

		zarganContextMenu.setAttribute("label", 'Zargan\'da Ara : "' + selectedText + '"');
		theFreeDictinaryMenu.setAttribute("label", 'The Free Dictinary\'de Ara : "' + selectedText + '"');
	}
	else
	{
		// Eðer seçili metin yoksa menümüzü gizleyelim
		zarganContextMenu.hidden = true;
		theFreeDictinaryMenu.hidden = true;
	}	
}

function onZarganMenu()
{
	var url = "http://www.zargan.com/sozluk.asp?Sozcuk=";
	url = url + getSelectedText();

	openNewTab(url);
}

function onTheFreeDictinaryMenuMenu()
{
	var url = "http://www.thefreedictionary.com/";
	url = url + getSelectedText();

	openNewTab(url);
}

function openNewTab(pUrl)
{
	var newTab = window.getBrowser().addTab(pUrl);
//	if( ! prefs.getBoolPref("browser.tabs.loadInBackground") )
//	{
		window.getBrowser().selectedTab = newTab;
//	}
}