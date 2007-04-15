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
    var solukMenu = document.getElementById("soluk-menu");

	if (selectedText != "")
	{
        solukMenu.hidden = false;

		if (selectedText.length > 25)
		{
			selectedText = selectedText.substr(0, 21) + "...";
        }


        var tdkContextMenu = document.getElementById("tdkContextMenu");
        var zarganContextMenu = document.getElementById("zarganContextMenu");
        var theFreeDictinaryMenu = document.getElementById("theFreeDictinaryMenu");

		tdkContextMenu.setAttribute("label",       "TDK'da Ara : \"" + selectedText + "\"");
		zarganContextMenu.setAttribute("label",    "Zargan'da Ara : \"" + selectedText + "\"");
		theFreeDictinaryMenu.setAttribute("label", "The Free Dictinary'de Ara : \"" + selectedText + "\"");
	}
	else
	{
		// Eðer seçili metin yoksa menümüzü gizleyelim
        solukMenu.hidden = true;
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


function onTheFreeDictinaryMenuMenu()
{
	var url = "http://www.thefreedictionary.com/";
	url = url + getSelectedText();

	openNewTab(url);
}


function onTDKMenu()
{
	var url = "http://www.tdk.gov.tr/TR/SozBul.aspx?F6E10F8892433CFFAAF6AA849816B2EF4376734BED947CDE&Kelime=";
	url = url + getSelectedText();

	openNewTab(url);
}