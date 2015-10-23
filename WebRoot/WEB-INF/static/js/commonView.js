/**
* yao 2006-2-24
*/
function setDisable(element){
	element.disabled=true;
}
/**
 *判断输入框是否输入"'"
 */
function isQuotation()
	{
		if(window.event.keyCode==39)
		{
			alert("请正确输入,不可以输入" + "','!!");
			window.event.keyCode=0;	
		}
	}