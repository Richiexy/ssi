package com.ssi.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.ssi.model.PubCode;
import com.ssi.model.User;
import com.ssi.service.IUserService;
import com.ssi.sys.Constants;
import com.ssi.util.Page;
import com.ssi.util.StringUtil;
import com.ssi.util.WebUtil;

/**
 * 用户控制器
 *
 * @author Administrator
 */
@Controller
@RequestMapping("/userController")
@SessionAttributes("user")
public class UserController {

    @Autowired(required = false)
    private IUserService userService;
    
    @RequestMapping("/toUserListPage")
    public String toUserListPage(@RequestParam Map<String , String> paraMap ,
            HttpServletRequest request,
            HttpSession session,
            ModelMap map) {
        
        String sidebarid = paraMap.containsKey(Constants.SIDEBARID) ? paraMap.get(Constants.SIDEBARID) : "";
        
        WebUtil.setSession(request, WebUtil.SESSION_KEY_SIDEBAR, sidebarid);
        
        map.putAll(paraMap);
        
        List<User> userList = userService.find();
        map.put("dataList", userList);
        
        Page page = Page.getInstance();
        String curPage = paraMap.containsKey("curPage") ? paraMap.get("curPage") : "1";
        page.setCurPage(Integer.valueOf(curPage));
        page.setPageCount(1);
        page.setDataCount(3);
        
        map.put("page" , page);
        map.put("pageSize", Page.PAGE_SIZE);
        
        
        map.put("areaCode", "02");
        map.put("state", "03");
        
        return "user_list";
    }
    
    @RequestMapping("/search")
    public ModelAndView search(@RequestParam Map<String , String> reqMap , ModelMap model){
        
        String userNameFilter = reqMap.containsKey("userNameFilter") ? reqMap.get("userNameFilter") : "";
        List<User> userList = userService.getUserByName(userNameFilter);
        
        model.putAll(reqMap);
        model.put("dataList", userList);
        return  new ModelAndView("user_list", model);
    }
    
    @RequestMapping("/insert")
    public String toInsertPage(@RequestParam Map<String , String> paraMap ,
            HttpServletRequest request,
            HttpSession session,
            ModelMap map) {
        
        map.putAll(paraMap);
        map.put("operType", Constants.OPERTYPE_INSERT) ;
        return "user_oper";
    }
    
    @RequestMapping("/view")
    public String toViewPage(@RequestParam Map<String , String> paraMap ,
            HttpServletRequest request,
            HttpSession session,
            ModelMap map) {
        
        map.putAll(paraMap);
        map.put("operType", Constants.OPERTYPE_VIEW) ;
        return "user_oper";
    }
    
    @RequestMapping("/update")
    public String toUpdatePage(@RequestParam Map<String , String> paraMap ,
            HttpServletRequest request,
            HttpSession session,
            ModelMap map) {
        
        String uid =  paraMap.containsKey("id") ? paraMap.get("id") : "0";
        
        User user = userService.getUserById(Integer.parseInt(uid));
        
        map.put("user", user);
        
        map.putAll(paraMap);
        map.put("operType", Constants.OPERTYPE_UPDATE) ;
        return "user_oper";
    }
    
    @RequestMapping("/saveOrUpdate")
    public String saveOrUpdate(@RequestParam Map<String , String> reqMap ,
            ModelMap map){
        
        String name =  reqMap.containsKey("userName") ? reqMap.get("userName") : "";
        String password =  reqMap.containsKey("password") ? reqMap.get("password") : "";
        
        User user = null;
        List<User> userList = userService.getUserByName(name);
        if(userList.size() > 0){
            user = userList.get(0);
            user.setUserName(name);
            user.setPassword(password);
            userService.updateUser(user);
            map.put("S_MSG", convertCharsetCode("更新成功！" , "UTF-8"));
        }else{
            user = new User();
            user.setUserName(name);
            user.setPassword(password);
            user.setPasswordNew(password);
            userService.addUser(user);
            map.put("S_MSG", convertCharsetCode("新增成功！" , "UTF-8"));
        }
        
        return "redirect:/userController/toUserListPage";
    }
    
    private Object convertCharsetCode(String msg, String charsetCode) {
        try {
            msg = new String(msg.getBytes("ISO8859-1"),charsetCode);
        } catch (UnsupportedEncodingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return msg;
    }

    @RequestMapping("/delete")
    public String delete(@RequestParam Map<String , String> reqMap ,
            ModelMap map){
        
        String uid =  reqMap.containsKey("id") ? reqMap.get("id") : "0";
        
        User user = userService.getUserById(Integer.parseInt(uid));
        if(user != null){
            userService.deleteUser(Integer.parseInt(uid));
        }
        map.put("S_MSG", convertCharsetCode("删除成功！" , "UTF-8"));
        return "redirect:/userController/toUserListPage";
    }

}
