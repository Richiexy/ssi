<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isELIgnored="false"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="Cache-Control" content="no-store" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <!-- Title and other stuffs -->
  <title>404 - 页面不存在</title> 
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
  
</head>
<body>
	<!-- Matter beign -->
<div class="error-page">
  <div class="container">

    <div class="row">
      <div class="col-md-12">
        <!-- Widget starts -->
            <div class="widget">
              <!-- Widget head -->
              <div class="widget-head">
                <i class="icon-question-sign"></i> Error - 404 
              </div>

              <div class="widget-content">
                <div class="padd error">
                  
                  <h1>糟糕!!!页面不存在</h1>
                  <br />
                  <p>错误原因：找不到请求页面，请确认请求路径是否正确 </p>
                  <br />

                                 
                 <br />
                 <div class="horizontal-links">
                  <a href="index.html">Home</a> | <a href="#">About Us</a> | <a href="#">Contact us</a> | <a href="#">FAQ</a>
                 </div>

                </div>
                <div class="widget-foot">
                  <!-- Footer goes here -->
                </div>
              </div>
            </div>  
      </div>
    </div>
  </div> 
</div>
		<!-- Matter ends -->
		
</body>
</html>