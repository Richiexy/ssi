<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="common/includeHead.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
<script type="text/javascript">

function pageSubmit(url){
	url = "${ctx}/userController/" + url;
	formSubmit(url);
}

//复选框选中取消事件
function selectCheckBox(com){
	
	if(com.checked){
		$(com).attr("checked", true);//选中，没有这个，批量删除时选不到数据
		com.checked = true;//页面渲染，显示对号
	}else{
		$(com).removeAttr("checked");//
		com.checked = false;//页面渲染，取消对号
	}
	
	var allChk = $("#chk_all");//全选
	var arrChk = $("input[name='chk_list'][checked]");//所有选中的
	var leftChk = $("input[name='chk_list']");//所有复选框
	if( (arrChk.length == 0 || leftChk.length == 0 )  && allChk.length >0 &&  allChk[0].checked){//全取消
		$("#chk_all").click();
	}
	if(arrChk.length == leftChk.length  && allChk.length >0 &&  !allChk[0].checked){//全选
		$("#chk_all").click();
	}
	
}

$(function(){
	//全选\取消全选监听
	$("#chk_all").click( function () {
		if(this.checked){
			//$("input[name='chk_list']").attr("checked", true);//选中，没有这个，批量删除时选不到数据
			$("input[name='chk_list']").each(function(){
				
				if(!this.disabled){//没有被禁用的
					var tmp = this.id.substring(9);//chk_list_1 --> 1
					 $("input[id='chk_list_" + tmp + "']").attr("checked", true)
					this.checked = true;//页面渲染，显示对号
				}
			})
		}else{
			$("input[name='chk_list']").removeAttr("checked");//
			$("input[name='chk_list']").each(function(){
				if(!this.disabled){//没有被禁用的
					this.checked = false;//页面渲染，取消对号
				}
			})
		}
	});
	
	$("input[name='chk_list']").click(function(){
		if(!this.disabled){//没有被禁用的
			selectCheckBox(this);
		}
	});
	
})

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
                  <div class="pull-left">查询条件</div>
                  <div class="widget-icons pull-right">
                    <a href="#" class="wminimize"><i class="icon-chevron-up"></i></a> 
                    <a href="#" class="wclose"><i class="icon-remove"></i></a>
                  </div>
                  <div class="clearfix"></div>
                </div>

                <div class="widget-content">
                  <div class="padd">
                    <!-- Form starts.  -->
                     <form class="form-horizontal" method="post" role="form" id="rolischeSearchForm" action="${ctx}/userController/search">
							<input type="hidden" id="sf" name="sf" value="${sf }"/>
							<input type="hidden" name="sidebarid" value="${sideBarId }"/>
							
							<div class="form-group">
	                           <label class="col-lg-4 control-label">用户名称</label>
	                           <div class="col-lg-4">
	                              <input type="text" class="form-control" value="${userNameFilter}" placeholder=" --- 请输入 --- " name="userNameFilter">
	                           </div>
	                         </div>
                                	                                
                             <div class="form-group">
                               <div class="col-lg-offset-1 col-lg-9">
                               	<button type="submit" class="btn btn-primary"> 查   询 </button>
                 				<button type="button" onclick="formSubmit('${ctx}/userController/insert?sf=list');" class="btn btn-primary"> 新   增 </button> 
                               </div>
                             </div>
                       	</form>
                  	</div>
                </div>
                 
              </div>  
              
              
               <!-- 结果 -->
			<div class="widget">

                <div class="widget-head">
                  <div class="widget-icons pull-right">
                    <a href="#" class="wminimize"><i class="icon-chevron-up"></i></a> 
                    <a href="#" class="wclose"><i class="icon-remove"></i></a>
                  </div>  
                  <div class="clearfix"></div>
                </div>

                  <div class="widget-content">

                    <table class="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
						  <th width="5%"><input type="checkbox" name="chk_all" id="chk_all"></th>
                          <th width="5%">序号</th>
                          <th width="30%">用户名</th>
                          <th width="30%">密码</th>
                          <th width="25%">操作</th>
                        </tr>
                      </thead>
                      <tbody>
							<c:forEach items="${dataList}" var="resultInfo" varStatus="status">
		                        <tr>
		                          <td>
		                          	<input type="checkbox" name="chk_list" value="${status.index + 1}" id="chk_list_${status.index + 1}" >
		                          </td>
		                          <td>${pageSize * (page.curPage - 1) + (status.index + 1) }</td>
		                          <td>
		                          	<a href="#" onclick="formSubmit('${ctx}/userController/view?sf=list&id=${resultInfo.id}');return false;" rel="tooltip" title="查看"> 
		                          		${resultInfo.userName }
		                          	</a></td>
		                          <td>${resultInfo.password }</td>
		                          <td>
										<button class="btn btn-xs btn-warning" title="编辑" onclick="formSubmit('${ctx}/userController/update?sf=list&id=${resultInfo.id}')"><i class="icon-pencil"></i> </button>
										<button class="btn btn-xs btn-danger" title="删除" onclick="alertMsg('是否要删除？','confirm','${ctx}/userController/delete?sf=list&id=${resultInfo.id}');"><i class="icon-remove"></i> </button>
		                          </td>
		                        </tr>
							</c:forEach>
                       </tbody>
                    </table>
					
					<%@include file="common/page.jsp"%>
					
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