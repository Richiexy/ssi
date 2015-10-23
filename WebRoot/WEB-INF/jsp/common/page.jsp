<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>

<!-- 翻页begin -->
<input type="hidden" id="curPage" name="curPage"
	value="${page.curPage }" />
<input type="hidden" id="pageCount" name="pageCount"
	value="${page.pageCount }" />
<input type="hidden" id="dataCount" name="dataCount"
	value="${page.dataCount }" />

<div class="widget-foot">
			<div class="input-group">
				<span class="input-group-btn"> 
				<c:if test="${page.curPage - 1 == 0}">
						<button class="btn btn-default" disabled="disabled" style="cursor:not-allowed" type="button">上一页</button>
					</c:if> <c:if test="${page.curPage - 1 > 0}">
						<button class="btn btn-default"
							onclick="pageSubmit('callType=search&curPage=${page.curPage - 1}');return false;"
							type="button">上一页</button>

					</c:if> <c:forEach items="${pageNoList}" var="pageNo" varStatus="status">
						<c:if test="${pageNo == -1}">
							<button class="btn btn-default disabled" type="button">...</button>
						</c:if>
						<c:if test="${pageNo != -1}">
							<c:if test="${page.curPage == pageNo}">
								<button class="btn btn-primary disabled" type="button">${pageNo}</button>
							</c:if>
							<c:if test="${page.curPage != pageNo}">
								<button class="btn btn-default"
									onclick="pageSubmit('callType=search&curPage=${pageNo}');return false;"
									type="button">${pageNo}</button>

							</c:if>
						</c:if>

					</c:forEach> <c:if test="${page.curPage + 1 > page.pageCount}">
						<button class="btn btn-default disabled" style="cursor:not-allowed"  type="button">下一页</button>
					</c:if> <c:if test="${page.curPage + 1 <= page.pageCount}">
						<button class="btn btn-default"
							onclick="pageSubmit('callType=search&curPage=${page.curPage + 1}');return false;"
							type="button">下一页</button>
					</c:if>
				</span> 
				
				<div class="col-lg-5">
				 <div class="input-group">
				<input type="text" class="form-control"
					value="${page.pageNo == 0 ? '' : page.pageNo}" name="pageNo"
					id="pageNo"> 
						<span class="input-group-btn">
								<button onclick="return turnPage()" class="btn btn-default"
						type="button">Go</button>
						共<font color=red>${page.dataCount }</font>条记录数，当前页<font color=red>${page.curPage }</font>/${page.pageCount }
						</span>
					</div>
				</div>
				
			</div>

	<div class="clearfix"></div>

</div>
<!-- 翻页end -->

<script>
		function turnPage(){
				var curPage = $("#curPage").val();
				var pageNo = $("#pageNo").val();
				var pageCount = $("#pageCount").val();
				var url = "callType=search&curPage=" + pageNo;
				
				if(pageNo == "") return false;
			    if (isNaN(pageNo) ||parseInt(pageNo) <= 0 || parseInt(pageNo) > parseInt(pageCount)){
			    	$("#pageNo").val("");
			    	return false;
			    }
			    
				pageSubmit(url);
				return false;
		}
		$("#pageNo").keydown(function(event){
		    var e = event || window.event || arguments.callee.caller.arguments[0];
		     if(e && e.keyCode==13){ // enter 键
		    	 turnPage();
		    }
		}); 
</script>