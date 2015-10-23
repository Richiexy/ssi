//====================================================================//

$(function () {

    /* Bar Chart starts */

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
    /* Bar chart ends */

});


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


$(function () {

    /* Bar Chart starts */

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

    /* Bar chart ends */

});


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

    
/* Pie chart ends */

});

/* Curve chart ends */

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
	 	case "confirm":		//confirm
	 		$("#alertInfo").html("确认提示");
	 		break;
	 	case "error":		//error
	 		$("#alertInfo").html("错误提示");
	 		$("#alertOk").attr("class","hide");	 		
	 		break;
	 	case "warn":		//warn
	 		$("#alertInfo").html("警告");
	 		$("#alertOk").attr("class","hide");
	 		break;
	 	case "success":		//success
	 		$("#alertInfo").html("成功提示");
	 		$("#alertOk").attr("class","hide");
	 		break;
	 	default:;
	 			
				 
	 }
	 $("#alertModal").modal("show");
 }
 
 //提交
 $('#alertOk').click(function(){
	 //常规确认刷新form提交，若url为空可视为不提交form，重写click用作Ajax提交或其他处理
	 if($("#url").html() != null && $("#url").html() != "")  formSubmit($("#url").html());	
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
							
	if($("#SIDEBAR").val().indexOf("sidebar_svc") == 0) $("#sidebar_svc").click(); 	//服务操作
	if($("#SIDEBAR").val().indexOf("sidebar_mng") == 0) $("#sidebar_mng").click(); 	//后台管理	 
		
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
 });
 

function formSubmit(url){
	url = url.replace(new RegExp(/(amp;)/g),'');
	document.forms[0].action = url;
	document.forms[0].submit();
}