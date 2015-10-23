function urlreplace(url,paramname,paramvalue){
    
    var index = url.indexOf("?");
    if(index==-1){
        url = url + "?" + paramname + "=" + paramvalue;
    }else{
        var s1 = url.split("?");
        var params = s1[1].split("&");
        var pn = "";
        var flag = false;
        for(i=0;i<params.length;i++){
            pn = params[i].split("=")[0];
            if(pn==paramname){
                params[i]=paramname+"="+paramvalue;
                flag = true;
                break;
            }
        }
        if(!flag){
            url = url + "&" + paramname + "=" + paramvalue;
        }else{
        url = s1[0] + "?";
            for(i=0;i<params.length;i++){
                if(i>0){
                    url = url + "&";
                }
                url = url + params[i];
            }
        }
        
    }
    return url;
}   
    
function setPage(pageNo,targets){
    //alert("pageNo="+pageNo+";targets="+targets);
    if(targets==''||targets=='null'){
        alert('TODO');
    }else{
        var url=$("#"+targets).attr('url');
        //alert("org url="+url);
        url=urlreplace(url,"qm.pn",pageNo);
        //alert("repalced url="+url);
        ajaxGet(url,targets);
    }
}

function setLimit(limit,targets){
    //alert("limit="+limit+";targets="+targets);
    if(targets==''||targets=='null'){
        alert('TODO');
    }else{
        var url=$("#"+targets).attr('url');
        //alert("org url="+url);
        url=urlreplace(url,"qm.pn","1");
        url=urlreplace(url,"qm.limit",limit);
        //alert("repalced url="+url);
        ajaxGet(url,targets);
    }
} 

function gotoPageDirect(pageNo,currentPageNo,totalPages,targets){
    //alert("pageNo="+pageNo+";currentPageNo="+currentPageNo+";totalPages="+totalPages+";targets="+targets);
        if(isNaN(pageNo)){
            return false;
        }
        pageNo=parseInt(pageNo);
        currentPageNo=parseInt(currentPageNo);
        totalPages=parseInt(totalPages);
        if(pageNo==currentPageNo){
            return false;
        }
        if(pageNo>totalPages){
            pageNo=totalPages;
        }
        if(pageNo<1){
            pageNo=1;
        }
        setPage(pageNo,targets);
        return false;
}

function gotoPage(pageNo,currentPageNo,totalPages,targets){
    //alert("pageNo="+pageNo+";currentPageNo="+currentPageNo+";totalPages="+totalPages+";targets="+targets);
    if ( window.event.keyCode == 13 ){
        gotoPageDirect(pageNo,currentPageNo,totalPages,targets);
    }
}

function setOrder(order,by,targets){
	//alert("order="+order+";by="+by+";targets="+targets);
	if(targets==''||targets=='null'){
		alert('TODO');
	}else{
		var url=$("#"+targets).attr('url');
		//alert("org url="+url);
		url=urlsetorder(url,order,by);
		//alert("repalced url="+url);
		ajaxGet(url,targets);
	}
}

var mulOrder=false;
function urlsetorder(url,field,sorttype){
    var orderName="qm.order";
	var na="na";
	var orderparam = orderName+"=";
 	if(!mulOrder){
 		if(sorttype==na){
 			return urlreplace(url,orderName,"");
 		}else{
 			return urlreplace(url,orderName,field + " " +sorttype);
 		}
 	}

	url = decodeURI(url);
	var inurl = url.indexOf("?");
	var orurl = url.indexOf(orderparam);
	if(inurl==-1){
		if(sorttype!=na){
			url = url + "?"+orderparam+field+" "+sorttype;
		}
	}else if(orurl==-1){
		if(sorttype!=na){
			url = url + "&"+orderparam+field+" "+sorttype;
		}
	}else{
		var urls = url.split("?");
		var urllet = urls[1].split("&");
		var urlprv = urls[0]+"?";
		var urlorder = "";
		for(i=0;i<urllet.length;i++){
			if(urllet[i].indexOf(orderparam)==-1){
				if(urlprv.substr(urlprv.length-1,urlprv.length-1)!="?"){
					urlprv=urlprv+"&";
				}
				urlprv=urlprv+urllet[i];
			}else{
				urlorder = urllet[i];
			}
		}
		var flag = false;
		var orders = urlorder.split("=")[1].split(",");
		for(i=0;i<orders.length;i++){
			if(orders[i].split(" ")[0]==field){
				flag = true;
				break;
			}
		}
		if(!flag&&sorttype!=na){
			var uop = urlorder.split("=")[1];
			if(uop==""){
				urlorder=urlorder+field+" "+sorttype;
			}else{
				urlorder=urlorder.split("=")[0]+"="+field+" "+sorttype+","+uop;
			}
		}else{
			urlorder=orderparam;
			if(sorttype!=na){
				urlorder=urlorder+field+" "+sorttype;
			}
			var cnt=0;
			for(i=0;i<orders.length;i++){
				if(orders[i].split(" ")[0]==field){
					continue;
				}
				if(sorttype!=na||cnt>0){
					urlorder = urlorder + ",";
				}
				cnt++;
				urlorder = urlorder + orders[i];
			}
		}
		url = urlprv+"&"+urlorder;
	}
	//alert("order url="+url);
	return encodeURI(url);
}

/**
Sample
onclick="selectAll('exportItem',true)"
onclick="selectAll('exportItem',false)"
*/
function selectAll(item,obj){

	var frm = $(obj).parents().filter("form,:first");
    $(frm).find("input[name^='"+item+"']:enabled").each(function(){
    	//避免重复触发事件
    	if(this.checked != obj.checked){
    		$(this).attr("checked",obj.checked);
        	//触发change事件用于时间比较。
        	$(this).trigger("change");
    	}
    	
    });
}

Date.prototype.format = function(format)
{
var o =
{
"M+" : this.getMonth()+1, //month
"d+" : this.getDate(), //day
"h+" : this.getHours(), //hour
"m+" : this.getMinutes(), //minute
"s+" : this.getSeconds(), //second
"q+" : Math.floor((this.getMonth()+3)/3), //quarter
"S" : this.getMilliseconds() //millisecond
}
if(/(y+)/.test(format))
format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));
for(var k in o)
if(new RegExp("("+ k +")").test(format))
format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
return format;
}

function atleaseOneCheck(itemlistIn)
{
	var itemlist='itemlist';
	if(itemlistIn){
		itemlist=itemlistIn;
	}
    var items = document.getElementsByName(itemlist);
    if (items.length > 0) {
        for (var i = 0; i < items.length; i++)
        {
            if (items[i].checked == true)
            {
                return true;
            }
        }
    } else {
        if (items.checked == true) {
            return true;
        }
    }
    return false;
}

function selectOptionsAll(src){
   if($(src)!=null){
    for(var i=0;i<$(src).length;i++){
        $(src).options[i].selected=true;
    }
    }
}


function getRadioValue(name){
	var obj = document.getElementsByName(name);
	for(var i=0; i<obj.length; i++){
		if(obj[i].checked) return obj[i].value;
	}
	return "";
}

String.prototype.startWith=function(str){
 if(str==null||str==""||this.length==0||str.length>this.length)
  return false;
 if(this.substr(0,str.length)==str)
  return true;
 else
  return false;
 return true;
}

jQuery.validator.addMethod(
		"startWith",
		function(value, element, param) {
			return this.optional(element) || value.startWith(param);
		}, 
		"请输入以{0}开头字符串"
);
jQuery.validator.addMethod("dateTime", function(value, element) { 
	if(value == ""){
		return this.optional(element);
	}
	var regex=/^(?:[0-9]{4})-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
	if(!regex.test(value)){
		return false;
	}
	return true;
}, "请输入合法的日期格式（如2011-08-15 13:40:00）");

jQuery.validator.addMethod("dateTimeForYMD", function(value, element) { 
if(value == ""){
	return this.optional(element);
}
var regex=/^(?:[0-9]{4})-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1]))$/;
if(!regex.test(value)){
	return false;
}
return true;
}, "请输入合法的日期格式（如2011-08-15）");

jQuery.validator.addMethod(
		"timestampLT",
		function(value, element, param) {
			if(value == ""){
				return this.optional(element);
			}
			//元素不存在
			if($(param).length == 0){
				return true;
			}
			
			var endDate = $(param).val();
			if(endDate == ""){
				return true;
			}
			
			var startDate = Date.parse(value.replace(/\-/g, "\/"));
			endDate = Date.parse(endDate.replace(/\-/g, "\/"));
			
			if(startDate > endDate){
				
				return false;

			}else{
				
				return true;
			}
			
		}, "输入的时间数据必须小于开始时间");

jQuery.validator.addMethod(
		"timestampGT",
		function(value, element, param) {
		if(value == ""){
			return this.optional(element);
		}
		//元素不存在
		if($(param).length == 0){
			return true;
		}
		
		var startDate = $(param).val();
		if(startDate == ""){
			return true;
		}
		
		var endDate = Date.parse(value.replace(/\-/g, "\/"));
		startDate = Date.parse(startDate.replace(/\-/g, "\/"));
		
		if(startDate > endDate){
			
			return false;
		}else{
			
			return true;
		}
		
		}, "输入的时间数据必须大于开始时间");

jQuery.validator.addMethod(
		"dateLT",
		function(value, element, param) {
		if(value == ""){
			return this.optional(element);
		}
		
		var endDate = $(param).val();
		if(endDate == ""){
			return true;
		}
		
		var startDate = new Date(value.replace(/\-/g, "\/"));
		endDate = new Date(endDate.replace(/\-/g, "\/"));
		
		if(startDate > endDate){
			
			return false;
		}else{
			
			return true;
		}
		
		}, "输入的日期数据必须小于结束日期");

jQuery.validator.addMethod(
		"dateGT",
		function(value, element, param) {
		if(value == ""){
			return this.optional(element);
		}
		
		var startDate = $(param).val();
		if(startDate == ""){
			return true;
		}
		
		var endDate = new Date(value.replace(/\-/g, "\/"));
		startDate = new Date(startDate.replace(/\-/g, "\/"));
		
		if(startDate > endDate){
			
			return false;
		}else{
			
			return true;
		}
		
		}, "输入的日期数据必须大于开始日期");


jQuery.validator.addMethod(
	"dateGTge",
	function(value, element, param) {
		var v = $(element).parents("tr").find(".down").val();
		if(v == ""){
			return true;
		}	

		var startDate = v;
		if(startDate == ""){
			return true;
		}

		
		var endDate = new Date(value.replace(/\-/g, "\/"));
		startDate = new Date(startDate.replace(/\-/g, "\/"));
		
		if(startDate > endDate){

			return false;
		}else{

			return true;
		}
		
	}, 
	'输入的日期数据必须大于开始日期'
);


jQuery.validator.addMethod(
	"dateLTle",
	function(value, element, param) {
		var v = $(element).parents("tr").find(".up").val();
		if(v == ""){
			return true;
		}	

		var startDate = value;
		if(startDate == ""){
			return true;
		}

		
		var endDate = new Date(v.replace(/\-/g, "\/"));
		startDate = new Date(startDate.replace(/\-/g, "\/"));
		
		if(startDate > endDate){

			return false;
		}else{

			return true;
		}
		
	}, 
	'输入的日期数据必须小于等于结束日期'
);

jQuery.validator.addMethod(
	"ge",
	function(value, element, param) {
		var v = $(element).parents("tr").find(".down").val();
		if(v == ""){
			return true;
		}
		
		if(parseFloat(value) >= parseFloat(v)) {
			$(element).parents("tr").find(".down").next().hide();
		}
		return parseFloat(value) >= parseFloat(v);
	}, 
	'规范上限必须大于等于下限'
);

jQuery.validator.addMethod(
	"le",
	function(value, element, param) {
		var v = $(element).parents("tr").find(".up").val();
		if(v == ""){
			return true;
		}
		
		if(parseFloat(value) <= parseFloat(v)) {
			$(element).parents("tr").find(".up").next().hide();
		}
		return parseFloat(value) <= parseFloat(v);
	}, 
	'规范下限必须小于等于上限'
);

jQuery.validator.addMethod(
		"isIn",
		function(value, element, param) {
			var maxValue = $(element).parents("tr").find(".up").val();
			var minValue = $(element).parents("tr").find(".down").val();
			if(value == ""){
				return this.optional(element);
			}
			var inputValue = parseFloat(value);
			
			//大于上限
			if(maxValue != ""){
				if(inputValue > parseFloat(maxValue)){
					return false;	
				}
			}
			//小于下限
			if(minValue != ""){
				if(inputValue < parseFloat(minValue)){
					return false;	
				}
			}
			
			return true;
		}, 
		'目标值超出范围'
);

function initFieldset() {	
	var $legends = $(".fieldset > legend");
	$legends.each(function() {
		if($(this).children("span").length == 0) {
			$(this).attr("style", "cursor:pointer");
			$(this).prepend($("<span>&nbsp;-&nbsp;</span>"));
			$(this).toggle(function() {
				
				var span = $(this).children("span").html().indexOf("+");
				if(span > 0 ){
					$(this).children("span").remove();
					$(this).prepend("<span>&nbsp;-&nbsp;</span>");
					$(this).nextAll().attr("style", "display:block");
					//打印模块特殊处理
					$(this).nextAll("#printLabelDiv").attr("style", "display:none");
				}else{
					$(this).children("span").remove();
					$(this).prepend("<span>&nbsp;+&nbsp;</span>");
					$(this).nextAll().attr("style", "display:none");
				}
			}, function() {
				
				var span = $(this).children("span").html().indexOf("+");
				if(span > 0){
					$(this).children("span").remove();
					$(this).prepend("<span>&nbsp;-&nbsp;</span>");
					$(this).nextAll().attr("style", "display:block");
					//打印模块特殊处理
					$(this).nextAll("#printLabelDiv").attr("style", "display:none");
				}else{
					$(this).children("span").remove();
					$(this).prepend("<span>&nbsp;+&nbsp;</span>");
					$(this).nextAll().attr("style", "display:none");
				}
			});
		}
	});
}



/**
 * ����Table����ż��Ч��
 * �÷�ʾ��resetTableOddEvenStyle($("table .clsListWithBorder"));
 */
function resetTableOddEvenStyle(jqueryTables){
	$(jqueryTables).find("tbody").find("tr").removeClass("odd even highlight");
	$(jqueryTables).find("tbody").find("tr").unbind();
	$(jqueryTables).find("tbody").find("tr:odd").addClass("odd");
	$(jqueryTables).find("tbody").find("tr:even").addClass("even");
	$(jqueryTables).find("tbody").find("tr:odd").bind("mouseover",function(){
		$(this).removeClass("odd");
	    $(this).addClass("highlight");
	}); 
	$(jqueryTables).find("tbody").find("tr:odd").bind("mouseout",function(){
	    $(this).removeClass("highlight");
	    $(this).addClass("odd");
	}); 
	$(jqueryTables).find("tbody").find("tr:even").bind("mouseover",function(){
		$(this).removeClass("even");
	    $(this).addClass("highlight");
	}); 
	$(jqueryTables).find("tbody").find("tr:even").bind("mouseout",function(){
	    $(this).removeClass("highlight");
	    $(this).addClass("even");
	}); 
}