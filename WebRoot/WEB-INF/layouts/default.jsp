<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="sitemesh" uri="http://www.opensymphony.com/sitemesh/decorator" %>  
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jstl/fmt_rt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="Cache-Control" content="no-store" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <!-- Title and other stuffs -->
  <title><sitemesh:title default="ssi"/></title> 
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="">
  
  <!-- Stylesheets -->
  <link href="${ctx}/static/style/bootstrap.css" rel="stylesheet">
  <!-- Font awesome icon -->
  <link rel="stylesheet" href="${ctx}/static/style/font-awesome.css"> 
  <!-- jQuery UI -->
  <link rel="stylesheet" href="${ctx}/static/style/jquery-ui.css"> 
  <!-- Calendar -->
  <link rel="stylesheet" href="${ctx}/static/style/fullcalendar.css">
  <!-- prettyPhoto -->
  <link rel="stylesheet" href="${ctx}/static/style/prettyPhoto.css">  
  <!-- Star rating -->
  <link rel="stylesheet" href="${ctx}/static/style/rateit.css">
  <!-- Date picker -->
  <link rel="stylesheet" href="${ctx}/static/style/bootstrap-datetimepicker.min.css">
  <!-- CLEditor -->
  <link rel="stylesheet" href="${ctx}/static/style/jquery.cleditor.css"> 
  <!-- Bootstrap toggle -->
  <link rel="stylesheet" href="${ctx}/static/style/bootstrap-switch.css">
  <!-- Main stylesheet -->
  <link href="${ctx}/static/style/style.css" rel="stylesheet">
  <!-- Widgets stylesheet -->
  <link href="${ctx}/static/style/widgets.css" rel="stylesheet">   
  <link href="${ctx}/static/jquery-validation/1.9.0/validate.css" type="text/css" rel="stylesheet" />
  <!-- HTML5 Support for IE -->
  <!--[if lt IE 9]>
  <script src="${ctx}/static/js/html5shim.js"></script>
  <![endif]-->

  <!-- Favicon -->
  <link rel="shortcut icon" href="${ctx}/static/img/favicon/favicon.ico">
  
  <script src="${ctx}/static/js/jquery.js"></script> <!-- jQuery -->
  <script src="${ctx}/static/jquery-validation/1.9.0/jquery.validate.min.js" type="text/javascript"></script>
  <script src="${ctx}/static/jquery-validation/1.9.0/messages_cn.js" type="text/javascript"></script>
  
  <!-- json format -->
  <script type="text/javascript">
      if (typeof JSON === 'undefined') {
          document.write('<sc' + 'ript type="text/javascript" src="c/js/json2.js"></sc' + 'ript>');
      }
  </script>
  <script src="${ctx}/static/jsonlintdotcom-master/c/js/jquery-linedtextarea/jquery-linedtextarea.js" type="text/javascript"></script>
  <link href="${ctx}/static/jsonlintdotcom-master/c/js/jquery-linedtextarea/jquery-linedtextarea.css" type="text/css" rel="stylesheet">
  <script type="text/javascript" src="${ctx}/static/jsonlintdotcom-master/c/js/jsl.parser.js"></script>
  <script type="text/javascript" src="${ctx}/static/jsonlintdotcom-master/c/js/jsl.format.js"></script>
  <script type="text/javascript" src="${ctx}/static/jsonlintdotcom-master/c/js/jsl.interactions.js"></script>
  <sitemesh:head/>  
</head>
<body>
<!-- Header starts -->
  <header>
    <div class="container">
        <!-- Logo section -->
        <div class="col-md-12">
          <!-- Logo. -->
          <div class="logo">
            <h1><a href="#">Spring Sitemesh Ibatis Jbpm Bootstrap<span class="bold"></span></a></h1>
            <p class="meta">系统演示</p>
          </div>
          <!-- Logo ends -->
        </div>
      </div>
  </header>
<!-- Header ends -->

<!-- Main content starts -->
<div class="content">
  	<!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-dropdown"><a href="#">导航</a></div>

        <!--- Sidebar navigation -->
        <!-- If the main navigation has sub navigation, then add the class "has_sub" to "li" of main navigation. -->
        <ul id="nav">
          <li class="has_sub">
          	<a id="sidebar_mk" href="#">
          	 <i class="icon-wrench"></i>用户管理demo
          	 <span class="pull-right"><i class="icon-chevron-right"></i></span>
          	</a>
          	<ul>
         		<li><a id="sidebar_mk_para_page" href="${ctx}/userController/toUserListPage?sf=menu&sidebarid=sidebar_mk_para_page"><i class="icon-edit"></i>用户管理demo</a></li>
          	</ul>
          </li>
          <li class="has_sub">
          	<a id="sidebar_score_mng" href="#">
          	 <i class="icon-th-large"></i> 工作流Demo
          	 <span class="pull-right"><i class="icon-chevron-right"></i></span>
          	</a>
          	<ul>
          	   <li><a id="sidebar_score_mng_alti" href="${ctx}/userController/toUserListPage?sf=menu&sidebarid=sidebar_mk_para_page"><i class="icon-edit"></i>jbpm</a></li>
   			</ul>
          </li>
          <%-- 主表管理 --%>
          <li class="has_sub">
          	<a id="sidebar_master_mng" href="#">
          	 <i class="icon-th-large"></i> 数据库Demo
          	 <span class="pull-right"><i class="icon-chevron-right"></i></span>
          	</a>
          	<ul>
	          <li><a id="sidebar_master_mng_syscode" href="${ctx}/userController/toUserListPage?sf=menu&sidebarid=sidebar_mk_para_page"><i class="icon-desktop"></i>数据库</a></li>
	   		</ul>
         </li> 
        </ul>
    </div>
    <!-- Sidebar ends -->

  	<!-- Main bar -->
  	<div class="mainbar">
    <!-- Page heading -->
    <div class="page-head">
      	<h2 class="pull-left" id="title_info"><i class="icon-home" id="title_icon"></i> 首页</h2>
      	<span id="messageBar" style="font-size: 12px;">&nbsp;</span>
        <!-- Breadcrumb -->
        <div class="bread-crumb pull-right">
           <a style="text-decoration: none" >登陆人：${currentUserName}</a>
           <span class="divider">/</span>
           <a style="text-decoration: none" >登陆时间：${currentLoginDate}</a>
           <span class="divider">/</span>
           <a style="text-decoration: none" >登陆信息：${currentUserRole}</a>
           <!-- Divider -->
           <span class="divider">/</span>
           <a href="#"><i class="icon-home"></i> 首页</a>
           <!-- Divider -->
           <span class="divider">/</span>
           <a href="#" class="bread-current">退出</a>
 </div>
        <div class="clearfix"></div>
    </div>
    <!-- Page heading ends -->
    
    <!-- Matter -->
    <div class="matter">
        <div class="container">
          <!-- Page Content starts -->          
          <!-- 消息显示种别 -->
          <input type="hidden" id="S_MSG" name="S_MSG" value="${S_MSG }"/>
          <input type="hidden" id="E_MSG" name="E_MSG" value="${E_MSG }"/>
          <input type="hidden" id="W_MSG" name="W_MSG" value="${W_MSG }"/>  
          <input type="hidden" id="SIDEBAR" name="SIDEBAR" value="${SESSION_SIDEBAR }"/>  
          
  <sitemesh:body/>
          <!-- Page Content ends --> 
</div>
    	</div>
<!-- Matter ends -->
   	 <div class="clearfix"></div>
   </div>
   <!-- Mainbar ends -->
</div>
<!-- Content ends -->

<!-- Footer starts -->
<footer>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
            <!-- Copyright info -->
            <p class="copy">Copyright &copy; 2015 | <a href="#">xy ALL Rights Reserved</a> </p>
      </div>
    </div>
  </div>
</footer> 	
<!-- Footer ends -->

 <!-- Button to trigger modal -->
 <div style="display: none">
 <!-- Modal -->
 <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
 <div class="modal-dialog">
 <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <p>One fine body</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
 </div>
</div>
</div>

 <!-- 消息Modal -->	
<div id="alertModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
 <div class="modal-dialog">
 <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title"><label id="alertInfo">提交信息</label></h4>
      </div>
      <div class="modal-body">
        <p><label id="alertMsg" >确定要提交吗？</label><label id="url" class="hide"></label></p>
      </div>
      <div class="modal-footer">
      	<button type="button" id="alertOk" class="btn btn-primary">确定</button>
        <button type="button" id="alertClose" class="btn btn-default" data-dismiss="modal" aria-hidden="true">关闭</button>	        
      </div>
 </div>
</div>
</div>

</div>

<div id="submitDiv"  class="fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"></div>

<!-- Scroll to top -->
<span class="totop"><a href="#"><i class="icon-chevron-up"></i></a></span> 

<!-- JS -->
<script src="${ctx}/static/js/bootstrap.js"></script> <!-- Bootstrap -->
<script src="${ctx}/static/js/jquery-ui-1.9.2.custom.min.js"></script> <!-- jQuery UI -->
<script src="${ctx}/static/js/fullcalendar.min.js"></script> <!-- Full Google Calendar - Calendar -->
<script src="${ctx}/static/js/jquery.rateit.min.js"></script> <!-- RateIt - Star rating -->
<script src="${ctx}/static/js/jquery.prettyPhoto.js"></script> <!-- prettyPhoto -->

<!-- jQuery Flot -->
<script src="${ctx}/static/js/excanvas.min.js"></script>
<script src="${ctx}/static/js/jquery.flot.js"></script>
<script src="${ctx}/static/js/jquery.flot.resize.js"></script>
<script src="${ctx}/static/js/jquery.flot.pie.js"></script>
<script src="${ctx}/static/js/jquery.flot.stack.js"></script>

<!-- jQuery Notification - Noty -->
<script src="${ctx}/static/js/jquery.noty.js"></script> <!-- jQuery Notify -->
<script src="${ctx}/static/js/themes/default.js"></script> <!-- jQuery Notify -->
<script src="${ctx}/static/js/layouts/bottom.js"></script> <!-- jQuery Notify -->
<script src="${ctx}/static/js/layouts/topRight.js"></script> <!-- jQuery Notify -->
<script src="${ctx}/static/js/layouts/top.js"></script> <!-- jQuery Notify -->
<!-- jQuery Notification ends -->

<script src="${ctx}/static/js/sparklines.js"></script> <!-- Sparklines -->
<script src="${ctx}/static/js/jquery.cleditor.min.js"></script> <!-- CLEditor -->
<script src="${ctx}/static/js/bootstrap-datetimepicker.min.js" charset="UTF-8"></script> <!-- Date picker -->
<script src="${ctx}/static/js/bootstrap-switch.min.js"></script> <!-- Bootstrap Toggle -->
<script src="${ctx}/static/js/filter.js"></script> <!-- Filter for support page -->
<script src="${ctx}/static/js/custom.js"></script> <!-- Custom codes -->
<script src="${ctx}/static/js/charts.js"></script> <!-- Charts & Graphs -->


<script src="${ctx}/static/js/mine/global.js" type="text/javascript"></script>
<script src="${ctx}/static/js/mine/process.js" type="text/javascript"></script>

<!-- Script for this page -->
<script type="text/javascript">

/* Bar Chart starts */
$(function () {

    var d1 = [];
    for (var i = 0; i <= 20; i += 1)
        d1.push([i, parseInt(Math.random() * 30)]);

    var d2 = [];
    for (var i = 0; i <= 20; i += 1)
        d2.push([i, parseInt(Math.random() * 30)]);


    var stack = 0, bars = true, lines = false, steps = false;
    
    function plotWithOptions() {
        $.plot($("#bar-chart"), [ d1, d2 ], {
            series: {
                stack: stack,
                lines: { show: lines, fill: true, steps: steps },
                bars: { show: bars, barWidth: 0.8 }
            },
            grid: {
                borderWidth: 0, hoverable: true, color: "#777"
            },
            colors: ["#ff6c24", "#ff2424"],
            bars: {
                  show: true,
                  lineWidth: 0,
                  fill: true,
                  fillColor: { colors: [ { opacity: 0.9 }, { opacity: 0.8 } ] }
            }
        });
    }

    plotWithOptions();
    
    $(".stackControls input").click(function (e) {
        e.preventDefault();
        stack = $(this).val() == "With stacking" ? true : null;
        plotWithOptions();
    });
    $(".graphControls input").click(function (e) {
        e.preventDefault();
        bars = $(this).val().indexOf("Bars") != -1;
        lines = $(this).val().indexOf("Lines") != -1;
        steps = $(this).val().indexOf("steps") != -1;
        plotWithOptions();
    });

});
/* Bar chart ends */
/* Curve chart starts */
$(function () {
    var sin = [], cos = [];
    for (var i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
    }

    var plot = $.plot($("#curve-chart"),
           [ { data: sin, label: "sin(x)"}, { data: cos, label: "cos(x)" } ], {
               series: {
                   lines: { show: true, fill: true},
                   points: { show: true }
               },
               grid: { hoverable: true, clickable: true, borderWidth:0 },
               yaxis: { min: -1.2, max: 1.2 },
               colors: ["#1eafed", "#1eafed"]
             });

    function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css( {
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            border: '1px solid #000',
            padding: '2px 8px',
            color: '#ccc',
            'background-color': '#000',
            opacity: 0.9
        }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    $("#curve-chart").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));

        if ($("#enableTooltip:checked").length > 0) {
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);
                    
                    showTooltip(item.pageX, item.pageY, 
                                item.series.label + " of " + x + " = " + y);
                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;            
            }
        }
    }); 

    $("#curve-chart").bind("plotclick", function (event, pos, item) {
        if (item) {
            $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });

});
/* Curve chart ends */
/* Realtime chart starts */
$(function () {
    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 300;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 10)
                y = 10;
            if (y > 70)
                y = 70;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 300;
    $("#updateInterval").val(updateInterval).change(function () {
        var v = $(this).val();
        if (v && !isNaN(+v)) {
            updateInterval = +v;
            if (updateInterval < 1)
                updateInterval = 1;
            if (updateInterval > 2000)
                updateInterval = 2000;
            $(this).val("" + updateInterval);
        }
    });

    // setup plot
    var options = {
        series: { shadowSize: 0 }, // drawing is faster without shadows
        lines: {fill: true},
        grid: {borderWidth:0 },
        yaxis: { min: 0, max: 100 },
        colors: ["#ff2424"]
    };
    var plot = $.plot($("#live-chart"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});
/* Realtime charts ends */
/* Pie chart starts */
$(function () {

    var data = [];
    var series = Math.floor(Math.random()*10)+1;
    for( var i = 0; i<series; i++)
    {
        data[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1 }
    }

    $.plot($("#pie-chart-get"), data,
    {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 3/4,
                    formatter: function(label, series){
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
                    },
                    background: { opacity: 0 }
                }
            }
        },
        grid: {hoverable: true},
        legend: {
            show: false
        }
    }); 

    $.plot($("#pie-chart-delete"), data,
    {
        series: {
            pie: {
                show: true
            }
        },
        grid: {hoverable: true}
    });


    $.plot($("#pie-chart3"), data,
    {
        series: {
            pie: {
                show: true
            }
        },
        grid: {hoverable: true},
        legend: {
            show: false
        }
    });   
});
/* Pie chart ends */

//for process the ajax 
 //更新进度条
 function updatePercent(){
     var value = $('#progressBar').progressbar('option', 'value');
     if(value==100){
         value=0;
     }
     $('#progressBar').progressbar('option', 'value', value+1);
 }
 var progressBarTimer;
 //启动进度条
 function startProgressBar(){
     $("#progressBar").progressbar({ value: 0 });
     window.clearInterval(window.thread);
     window.thread=window.setInterval("updatePercent()",10);
 }
 //终止进度条
 function stopProgressBar(){
     window.clearInterval(window.thread);
     $('#progressBar').progressbar('option', 'value', 0);
 }

 //清除消息显示区域
 clearGlobalMessage = function(){
     $("#messageBar").html("&nbsp;");
 }
 var timer;

 //JS客户端方式在公共消息区域显示提示消息 
 function publishMessage(msg){
     if(undefined!=timer&&timer!=null){
         clearTimeout(timer);
     }
     $("#messageBar").html(msg);
     timer=setTimeout(clearGlobalMessage,30000);
 }

 //JS客户端方式在公共消息区域以红色显示错误信息 
 function publishError(msg,devMode){
     if(undefined!=timer&&timer!=null){
         clearTimeout(timer);
     }
     if(devMode!=undefined&&devMode==true){
         $("#messageBar").html("<a href='javascript:showDetail()'>查看异常明细:</a><b><font color=red>"+msg+"</font></b>");
     }else{
         $("#messageBar").html("<b><font color=red>"+msg+"</font></b>");
     }        
     timer=setTimeout(clearGlobalMessage,60000);
 }

 function publishErrorContentPage(html){
     $("#submitDiv").html(html);
 }

 //点击错误提示信息，弹出窗口显示错误细节
 function showDetail(){
 	var option={width: 1024,height:500};
    $("#myModal").dialog("open");
 } 

 //点击错误提示信息，弹出窗口显示错误细节
 function setErrorDetailContent(content){
 	$("#errorDetailDiv").html(content);
 }     
 
 //表单提交提示信息
 function alertMsg(msg,type,url){
 $("#alertMsg").html(msg);
 $("#url").html(url);
 
 switch(type.toLowerCase()){
 	case "confirm":	 //confirm
 	 $("#alertInfo").html("确认提示");
 	if($("#alertOk").hasClass("hide")){
 	 //如果先弹出错误提示，后再确认提示，则可能会隐藏保存按钮
 	 $("#alertOk").removeClass("hide");
 	 $("#alertOk").attr("class","btn btn-primary");
 	}
 	 break;
 	case "error":	 //error
 	 $("#alertInfo").html("错误提示");
 	 $("#alertOk").attr("class","hide");	 	
 	 break;
 	case "warn":	 //warn
 	 $("#alertInfo").html("警告");
 	 $("#alertOk").attr("class","hide");
 	 break;
 	case "success":	 //success
 	 $("#alertInfo").html("成功提示");
 	 $("#alertOk").attr("class","hide");
 	 break;
 	case "info":	 //info
 	 $("#alertInfo").html("提示");
 	 $("#alertOk").attr("class","hide");
 	 break;
 	default:;
 	
 
 }
 $("#alertModal").modal("show");
 }
 
 //提交
 $('#alertOk').click(function(){
 //常规确认刷新form提交，若url为空可视为不提交form，重写click用作Ajax提交或其他处理
 if($("#url").html() != null && $("#url").html() != ""){
 formSubmit($("#url").html());
$("#alertModal").modal("hide");
 }
 });
 
 //redirect
 function redirectUrl(url){
 window.location.href = url;
 }
 
 //页面加载调用
 $(window).load(function(){	
//load li class	
//$("#nav li #" + $("#SIDEBAR").val()).attr("class","open");
$("#title_info").html($("#" + $("#SIDEBAR").val()).html());	//title	
if($("#SIDEBAR").val().indexOf("sidebar_demo") == 0) $("#sidebar_demo").click(); 	//demo
if($("#SIDEBAR").val().indexOf("sidebar_svc") == 0) $("#sidebar_svc").click(); 	//服务操作
if($("#SIDEBAR").val().indexOf("sidebar_mng") == 0) $("#sidebar_mng").click(); 	//后台管理	 
if($("#SIDEBAR").val().indexOf("sidebar_mk") == 0) $("#sidebar_mk").click(); 	//MK模型参数配置	 
if($("#SIDEBAR").val().indexOf("sidebar_ch") == 0) $("#sidebar_ch").click(); 	//缓存 
if($("#SIDEBAR").val().indexOf("sidebar_master_mng") == 0) $("#sidebar_master_mng").click(); 	//主表管理
if($("#SIDEBAR").val().indexOf("sidebar_score_mng") == 0) $("#sidebar_score_mng").click(); 	//评分管理 

//get msg
var SMsg = $("#S_MSG").val();
var EMsg = $("#E_MSG").val();
var WMsg = $("#W_MSG").val();

if(SMsg != null && SMsg != ""){
alertMsg(SMsg,"success",null);
}else if(EMsg != null && EMsg != ""){
alertMsg(EMsg,"error",null);
}else if(WMsg != null && WMsg != ""){
alertMsg(WMsg,"warn",null);
}

$("#submitDiv").modal("hide");
 });

function formSubmit(url){
url = url.replace(new RegExp(/(amp;)/g),'');
document.forms[0].action = url;
document.forms[0].submit();
}
</script>
</body>
</html>