package com.ssi.util;

import java.util.ArrayList;
import java.util.List;

/**
 * 翻页控制
 * 
 * 初始：5个页码按钮，2个缺省(。。。)按钮
 * 判断：
 * 1.页数小于等于5 => for循环总页数，输出页码，无缺省
 * 2.页数大于5 => 初始为1,2,3,4,...,end
 *  每点击任意按钮，分为左右缺省、左缺省、右缺省
 *  ①左右缺省排列为1,...,x-1,x,x+1,...end
 *  ②左缺省排列为1,...,end-3,end-2,end-1,end
 *  ③右缺省排列为1,2,3,4...end
 *  
 * 
 * @author ex_ouyangqun
 *
 */
public class Page implements java.io.Serializable {
    
    private static final long serialVersionUID = 1L;
    private static final int PAGE_NO = 5;
    //页面显示条数
    public static final int PAGE_SIZE = 10;
    private static final int MISS_VAL = -1;     //缺省
    private int curPage;                //当前页
    private int pageCount;      //总页数
    private int pageNo;                 //跳转
    private List<Integer> pageNoList;   //页码集合
    private int dataCount;          //记录总数

    public static Page getInstance(){
        Page page = new Page();
        return page;
    }
    
    public int getCurPage() {
        //避免分页计算取得负数，0则将当前页置为1
        if(curPage == 0) curPage = 1;
        return curPage;
    }

    public void setCurPage(int curPage) {
        this.curPage = curPage;
    }

    public int getPageNo() {
        return pageNo;
    }

    public void setPageNo(int pageNo) {
        this.pageNo = pageNo;
    }

    public int getPageCount() {
        return pageCount;
    }

    public int getDataCount() {
        return dataCount;
    }

    public void setDataCount(int dataCount) {
        this.dataCount = dataCount;
    }

    public void setPageCount(int pageCount) {
        //避免更改检索条件，实际分页数据小于页码，大于总页数置为1
        if(curPage > pageCount) curPage = 1;
        this.pageCount = pageCount;
    }
    
    //初始加载
    public List<Integer> initPage(){
        pageNoList = new ArrayList<Integer>();
        if(pageCount <= PAGE_NO){
            for(int i = 0; i < pageCount; i++){
                pageNoList.add(i + 1);
            }
        }else {
            //大于5页初始
            pageNoList.add(1);
            pageNoList.add(2);
            pageNoList.add(3);
            pageNoList.add(4);
            pageNoList.add(MISS_VAL);
            pageNoList.add(pageCount);
        }
        
        return pageNoList;
    }
    
    //翻页处理
    public List<Integer> turnPage(){
        pageNoList = new ArrayList<Integer>();
        if(pageCount <= PAGE_NO){
            for(int i = 0; i < pageCount; i++){
                pageNoList.add(i + 1);
            }
        }else {
            //大于5页翻页
            if(3 < curPage && curPage < pageCount - 2){
                //左右缺省情况
                pageNoList.add(1);
                pageNoList.add(MISS_VAL);
                pageNoList.add(curPage - 1);
                pageNoList.add(curPage);
                pageNoList.add(curPage + 1);
                pageNoList.add(MISS_VAL);
                pageNoList.add(pageCount);
            }else if(curPage <= 3){
                //右侧缺省
                pageNoList.add(1);
                pageNoList.add(2);
                pageNoList.add(3);
                pageNoList.add(4);
                pageNoList.add(MISS_VAL);
                pageNoList.add(pageCount);
            }else if(curPage >= pageCount - 2){
                //左侧缺省
                pageNoList.add(1);
                pageNoList.add(MISS_VAL);
                pageNoList.add(pageCount - 3);
                pageNoList.add(pageCount - 2);
                pageNoList.add(pageCount - 1);
                pageNoList.add(pageCount);
            }
            
        }
        return pageNoList;
    }
    
    public int getPageCount(int total){
        dataCount = total;
        int mod  = total % PAGE_SIZE;
        int divide = total / PAGE_SIZE;
        return divide + (mod > 0 ? 1 : 0);
    }
    
}