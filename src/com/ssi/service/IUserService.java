package com.ssi.service;

import java.util.List;

import com.ssi.model.User;

/**
 * 用户服务接口
 *
 * @author Administrator
 */
public interface IUserService {

    //添加用户
    void addUser(User user);
    
    //根据用户Id查询用户
    User getUserById(int userId);
    
    //查询用户
    List<User> find();
    
    //根据用户名称查询用户
    List<User> getUserByName(String userName) ;

    //修改用户信息
    void updateUser(User user);

    //根据用户Id删除用户
    int deleteUser(int userId);
}
