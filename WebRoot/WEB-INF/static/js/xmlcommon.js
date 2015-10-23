function newXMLHttpRequest()
{
	var request=null;
	try
	{
		request=new ActiveXObject("Msxml2.XMLHTTP")
	}
	catch(e)
	{
		try
		{
			request=new ActiveXObject("Microsoft.XMLHTTP")
		}
		catch(sc)
		{
			request=null
		}
	}
	if(!request && typeof XMLHttpRequest!="undefined")
	{
		request=new XMLHttpRequest()
	}
	return request
}

function newXmlDocument()
{
	var xmlDoc=null;
	try
	{
		xmlDoc=new ActiveXObject("Msxml2.DOMDocument")
	}
	catch(e)
	{
		try
		{
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM")
		}
		catch(sc)
		{
			xmlDoc=null
		}
	}
	if(!xmlDoc && typeof XmlDocument!="undefined")
	{
		//XmlDocument doc = new XmlDocument();
		//doc.Load(strXmlName);
		xmlDoc=new XmlDocument()
	}
	return xmlDoc
}

function elmt( id )
{
	return document.getElementById(id);
}

function getReadyStateHandler(req, responseHandler) 
{
	return function () 
	{
		if (req.readyState == 4) 
		{
			if (req.status == 200) 
			{
				responseHandler(req);
			}
			else 
			{
				// 有HTTP问题发生
				alert("HTTP error: "+req.status);
			}
		}
	}
}

function getReadyStateHandlerText(req, targetId) 
{
	return function () 
	{
		if (req.readyState == 4) 
		{
			if (req.status == 200) 
			{
				setElementValue(req, targetId);
			}
			else 
			{
				// 有HTTP问题发生
				alert("HTTP error: "+req.statusText);
			}
		}
	}
}

function handlerRequestText( elementId )
{
	var jsp_name = elmt('jsp_name');
	var req = newXMLHttpRequest();
  	var handler = getReadyStateHandlerText(req, elementId);
  	req.onreadystatechange = handler;
  	req.open("POST", jsp_name.value, true);
  	req.send("");
}

function handlerRequestURLText( url, elementId )
{
	if( url.length == 0 )
	{
		clearAndHiddenElement( elementId );
		return;
	}
	else
	{
		var req = newXMLHttpRequest();
	  	var handler = getReadyStateHandlerText(req, elementId);
	  	req.onreadystatechange = handler;
	  	req.open("POST", url, true);
	  	req.send("");
  	}
}

function handlerSynRequestXML( sendurl, urlparam )
{
	if( sendurl.length == 0 )
	{
		return null;
	}
	else
	{
		if( urlparam == null || urlparam == "undefined" )
		{
			urlparam = "";
		}
		var req = newXMLHttpRequest();
	  	req.open("POST", sendurl, false);
	  	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	  	req.send(urlparam);
	  	var xmldoc = req.responseXML;
	  	setElementByXmlDoc( xmldoc );
  	}
}

function handlerSynRequestTXT( sendurl, urlparam )
{
	if( sendurl.length == 0 )
	{
		return "";
	}
	else
	{
		if( urlparam == null || urlparam == "undefined" )
		{
			urlparam = "";
		}
		var req = newXMLHttpRequest();
	  	req.open("POST", sendurl, false);
	  	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	  	req.send(urlparam);
	  	var respTxt = req.responseText;
	  	return respTxt;
  	}
}

function setElementValue( request, elementId )
{
	document.getElementById(elementId).style.display="";
	document.getElementById(elementId).innerHTML=request.responseText;
}

function clearAndHiddenElement( elementId )
{
	document.getElementById(elementId).innerHTML="";
	document.getElementById(elementId).style.display="none";
}

function handlerRequestURLXML( sendurl, responseHandler, urlparam )
{
	if( sendurl.length == 0 )
	{
		responseHandler();
		return;
	}
	else
	{
		if( urlparam == "undefined" || urlparam == null )
		{
			urlparam = "";
		}
		var req = newXMLHttpRequest();
	  	var handler = getReadyStateHandler(req, responseHandler);
	  	req.onreadystatechange = handler;
	  	req.open("POST", sendurl, true);
	  	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	  	req.send(urlparam);
  	}
}

function setElementList( request )
{
	if( request != null )
	{
		var xmldoc = request.responseXML;
		return setElementByXmlDoc( xmldoc );
	}
	return false;
}

function setElementByXmlDoc( xmldoc ) {
	//alert( xmldoc ); 
	var root_node = xmldoc.getElementsByTagName('root').item(0);
	if( root_node == null ) {
		return false;
	} else {
		for( node = root_node.firstChild; node != null ; node=node.nextSibling ) {					
			// alert( elmtId + "'s Attribute: overwrite = " + node.getAttribute("overwrite") );
			var elmtId = node.nodeName;
			if( elmtId.charAt(0) == '_' )
				elmtId = elmtId.substring(1); 
			var type = node.getAttribute("type");
			var indexAttr = node.getAttribute("index");
			var elmtObj = null;
			if( indexAttr == null || indexAttr.length == 0 ) {
				elmtObj = document.getElementById(elmtId);
				if (elmtObj != null || "script" == type) {
					setElementValueByXML( node, elmtId, type, elmtObj );
				}
			} else {
				index = parseInt( indexAttr );
				if( index < 0 ) {
					elmtObjs = document.getElementsByName(elmtId);
					if ("script" == type || elmtObjs != null) {
						for( i=0; i<elmtObjs.length; i++ ) {	
							setElementValueByXML( node, elmtId, type, elmtObjs[i] );
						}
					}
				} else {
					elmtObjs = document.getElementsByName(elmtId);
					if (elmtObjs != null || "script" == type) {
						if( elmtObjs.length > index ) {
							//alert( index );
							setElementValueByXML( node, elmtId, type, elmtObjs[index] );
						}
					}
				}
			}
		}
		return true;
	}
}

function setElementValueByXML( node, elmtId, type, elmtObj )
{	
	for( attr = node.firstChild; attr != null ; attr=attr.nextSibling )
	{
		//alert( "type: "+type );
		var attrName = attr.nodeName;
		if( attrName.charAt(0) == '_' )
			attrName = attrName.substring(1); 
		var attrValue = ""; 
		if( "select" == type && attrName == "options")
		{
			if(elmtObj != null)
				removeAllSelectOption( elmtObj );
		}
		if( "script" == type )
		{
			attrValue = getNodeValue( attr );
			//alert( attrValue );
			eval( attrValue );
		}
		else if( "htmlurl" == type )
		{
			url = getNodeValue( attr );
			funcText = "handlerRequestURLText( '"+url+"', '"+elmtId+"' );";
			//alert( "htmlurl: " + funcText );
			eval( funcText );
		}
		else if( "xmlurl" == type )
		{
			url = getNodeValue( attr );
			funcText = "handlerRequestURLXML('"+url +"', "+elmtId+" );";
			alert( "xmlurl: " + funcText );
			eval( funcText );
		}
		else 
		{
			//alert( elmtId +"."+attrName );
			if( "select" == type && attrName == "options")
			{
				if( attr.firstChild != null && elmtObj!=null )
				{
					for( option= attr.firstChild; option != null ; option=option.nextSibling )
					{
						var opt_name = option.getAttribute("name");
						var opt_value = option.getAttribute("value");
						appendSelectOption( elmtObj, opt_value, opt_name );
					}
				}
			}
			else 
			{
				if( attr.firstChild  != null )
				{
					attrValue = getNodeValue( attr.firstChild )
				}
				var isChar = attr.getAttribute("isChar");
				//alert( isChar );
				if( isChar == "false" )
				{
					evalStr = "elmtObj."+attrName + " = "+attrValue+";";
				}
				else
				{
					evalStr = "elmtObj."+attrName + " = attrValue;";
				}
				//alert( evalStr );
				//alert( elmtId+"." + attrName + " = "+attrValue );
				try
				{
					eval(evalStr);
				}
				catch(e)
				{ 
					alert( e.message+"\n("+elmtId+"." + attrName + " = "+attrValue+";)" );
				}
			}
		}
	}	
}

function getNodeValue( node )
{
	if( node == null )
		return "";
	if( node.nodeType == 4 ) // CDATA Node
	{
		return node.nodeValue;
	}
	else
	{
		var nodeValue = node.xml;
		nodeValue = nodeValue.replace(/\&amp;/g, "&");
		nodeValue = nodeValue.replace(/\&gt;/g,  ">");
		nodeValue = nodeValue.replace(/\&lt;/g, "<");
		nodeValue = nodeValue.replace(/\&quot;/g, "\"");
		nodeValue = nodeValue.replace(/\&apos;/g, "'");
		return nodeValue;
	}
}
/*
function setElementByXmlDoc( xmldoc )
{
	var root_node = xmldoc.getElementsByTagName('root').item(0);
	if( root_node == null )
	{
		return false;
	}
	else
	{
		for( node = root_node.firstChild; node != null ; node=node.nextSibling )
		{					
			// alert( elmtId + "'s Attribute: overwrite = " + node.getAttribute("overwrite") );
			var elmtId = node.nodeName;
			if( elmtId.charAt(0) == '_' )
				elmtId = elmtId.substring(1); 
			var type = node.getAttribute("type");
			var elmtObj = document.getElementById(elmtId);
			for( attr = node.firstChild; attr != null ; attr=attr.nextSibling )
			{
				var attrName = attr.nodeName;
				if( attrName.charAt(0) == '_' )
					attrName = attrName.substring(1); 
				var attrValue = ""; 
				if( "select" == type && attrName == "options")
				{
					removeAllSelectOption( elmtObj );
				}
				if( "script" == type )
				{
					attrValue = getNodeValue( attr );
					//alert( attrValue );
					eval( attrValue );
				}
				else// if( attr.firstChild != null )
				{
					//alert( elmtId +"."+attrName );
					if( "select" == type && attrName == "options")
					{
						for( option= attr.firstChild; option != null ; option=option.nextSibling )
						{
							var opt_name = option.getAttribute("name");
							var opt_value = option.getAttribute("value");
							appendSelectOption( elmtObj, opt_value, opt_name );
						}
					}
					else 
					{
						//alert( elmtId +"."+attrName );
						attrValue = getNodeValue( attr.firstChild )
						evalStr = "elmtObj."+attrName + " = attrValue;";
						//evalStr = "elmtObj."+attrName + " = "+attrValue+";
						//alert( evalStr );
						try
						{
							eval(evalStr);
						}
						catch(e)
						{ 
							//alert( e+"\n"+elmtId+"." + attrName + " = "+attrValue+";" ); 
						}
					}
				}
			}
		}
		return true;
	}
}
*/

function setElementsByString( xmldata )
{
	var xmlDoc = new ActiveXObject("microsoft.xmldom");
	xmldata = unescape( xmldata );
	if( xmldata.length > 50 ) // <?xml version="1.0" encoding="GB2312"?><root></root>
	{
		boolValue = xmlDoc.loadXML(xmldata);
		if( boolValue == true )
		{
			setElementByXmlDoc( xmlDoc );
		}
	}
}
