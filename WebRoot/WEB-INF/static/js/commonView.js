/**
* yao 2006-2-24
*/
function setDisable(element){
	element.disabled=true;
}
/**
 *�ж�������Ƿ�����"'"
 */
function isQuotation()
	{
		if(window.event.keyCode==39)
		{
			alert("����ȷ����,����������" + "','!!");
			window.event.keyCode=0;	
		}
	}