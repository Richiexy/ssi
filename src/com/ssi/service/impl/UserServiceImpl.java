package com.ssi.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssi.model.User;
import com.ssi.service.BaseService;
import com.ssi.service.IUserService;

/**
 * 用户接口实现类
 *
 * @author Administrator
 */
@Service("userService")
@Transactional
public class UserServiceImpl extends BaseService implements IUserService {


    @Override
    public List<User> find() {
        return this.selectList("com.ssi.model.UserMapper.getAll");
    }

    @Override
    public User getUserById(int userId) {
        
        return this.selectOne("com.ssi.model.UserMapper.getUserById" , userId) ;
    }

    @Override
    public List<User> getUserByName(String userName) {
        
        return this.selectList("com.ssi.model.UserMapper.getUserByName" , userName) ;
    }

    @Override
    public void addUser(User user) {
        this.insert("com.ssi.model.UserMapper.insertUser", user);
    }

    @Override
    public void updateUser(User user) {
        // TODO Auto-generated method stub
        this.update("com.ssi.model.UserMapper.updateUser", user);
    }

    @Override
    public int deleteUser(int userId) {
       
        return this.delete("com.ssi.model.UserMapper.deleteUser", userId);
    }

}
