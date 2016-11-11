//jsWPFrame.js
function GetFrameUrl( frameid )
{
	var docframe = document.getElementById(frameid);
	if(docframe==null) return;
	var sURL = window.location.href;
	if (sURL.indexOf("?") > 0)
	{
		var arrParams = sURL.split("?");
		var arrURLParams = arrParams[1].split("&");
		for (var i=0;i<arrURLParams.length;i++)
		{
			var sParam = arrURLParams[i].split("=");
			var sValue = unescape(sParam[1]);
			if( sParam[0] == docframe.id && docframe.src != sValue )
			{	docframe.src = sValue; return; }
		}
	}
}
