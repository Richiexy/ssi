<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="common/includeHead.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
<script type="text/javascript">
$(document).ready(function() {		
	$("#userOperForm").validate({
		rules : {
			userName : {//区域
				required : true
			},
			password : {//
				required : true
			}
		},
		submitHandler: function(form){
			$("#submitDiv").modal("show");
            globalSubmitHandler(form,function(json){
            	
            });
		}
	});

});
</script>
</head>

<body>
<div class="container">

   <!-- Matter -->

	<div class="row">

		<div class="col-md-12">

			<!-- 条件 -->
			<div class="widget wgreen">

				<div class="widget-head">
					<div class="pull-left">${"view"==operType ? '用户查看' : '用户编辑'} </div>
					<div class="widget-icons pull-right">
						<a href="#" class="wminimize"><i class="icon-chevron-up"></i></a>
						<a href="#" class="wclose"><i class="icon-remove"></i></a>
					</div>
					<div class="clearfix"></div>
				</div>

				<div class="widget-content">
					<div class="padd">
						<!-- Form starts.  -->
						<form class="form-horizontal" method="post" role="form"
							id="userOperForm"
							action="${ctx}/userController/saveOrUpdate">
							<input type="hidden" id="operType" name="operType" value="${operType }"/>
							<input type="hidden" id="sf" name="sf" value="${sf }"/>
							<input type="hidden" id="sidebarid" name="sidebarid" value="${sideBarId }"/>
							
							
							<input type="hidden" name="id" value="${user.id }"/>
							
							<div class="form-group">
								<label class="col-lg-2">用户名：</label>
								<div class="col-lg-4">
									<input type="text" class="form-control"
										style="ime-mode: disabled;"
										value="${user.userName}" ${"insert"==operType ? 'placeholder=" --- 请输入用户名 --- "' : ''}
										name="userName" >
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-lg-2">密码：</label>
								<div class="col-lg-4">
									<input type="text" class="form-control"
										style="ime-mode: disabled;"
										value="${user.password}" ${"insert"==operType ? 'placeholder=" --- 请输入密码 --- "' : ''}
										name="password" >
								</div>
							</div>
							
							<!-- 保存按钮 -->
							<div class="form-group">
								<div class="col-lg-9">
									<c:if test="${operType eq 'update' or operType eq 'insert'}">
										<button type="submit" class="btn btn-primary">保 存</button>
									</c:if>
									<button type="button" onclick="formSubmit('${ctx}/userController/toUserListPage');" class="btn btn-default"> 返 回 </button>
								</div>
							</div>
						</form>
					</div>
				</div>

			</div>


		</div>

	</div>

	<!-- Matter ends -->

	<!-- Mainbar ends -->
	<div class="clearfix"></div>

<!-- Content ends -->
 </div> 

</body>
</html>