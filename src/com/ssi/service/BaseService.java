package com.ssi.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.ExecutorType;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;


/**
 * @Description: 基础接口
 * @author: 俞根海
 * @date： 2015-1-29 上午11:22:16
 */
public class BaseService {
    
    protected Logger log = LoggerFactory.getLogger(BaseService.class);
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    @Autowired
    private SqlSession sqlSession; 
    
    @SuppressWarnings("unchecked")
    public <T> List<T> selectList(String sqlid, Object paramObj) {
        return (List<T>) sqlSession.selectList(sqlid, paramObj);
    }
 
    @SuppressWarnings("unchecked")
    public <T> List<T> selectList(String sqlid) {
        return (List<T>) sqlSession.selectList(sqlid);
    }
    @SuppressWarnings("unchecked")
    public <T> List<T> selectList(String sqlid,Object paramObj,RowBounds arg3) {
        return (List<T>) sqlSession.selectList(sqlid, paramObj, arg3);
    }
    @SuppressWarnings("unchecked")
    public <T> T selectOne(String sqlid) {
        return (T) sqlSession.selectOne(sqlid);
    }
    @SuppressWarnings("unchecked")
    public <T> T selectOne(String sqlid, Object paramObj) {
        return (T) sqlSession.selectOne(sqlid, paramObj);
    }
    @SuppressWarnings("unchecked")
    public Map selectMap(String arg0,String arg1) {
        return sqlSession.selectMap(arg0, arg1);
    }
    @SuppressWarnings("unchecked")
    public Map selectMap(String arg0,Object arg1,String arg2) {
        return sqlSession.selectMap(arg0, arg1, arg2);
    }
    @SuppressWarnings("unchecked")
    public Map selectMap(String arg0,Object arg1,String arg2,RowBounds arg3) {
        return sqlSession.selectMap(arg0, arg1, arg2, arg3);
    }
    public int delete(String sqlid) {
        return sqlSession.delete(sqlid);
    }
     
    public int delete(String sqlid,Object paramObj) {
        return sqlSession.delete(sqlid, paramObj);
    }
     
    public int insert(String sqlid,Object paramObj) {
        return sqlSession.insert(sqlid, paramObj);
    }
    public int insert(String sqlid) {
        return sqlSession.insert(sqlid);
    }
    public void select(String sqlid,ResultHandler arg1) {
        sqlSession.select(sqlid, arg1);
    }
    public void select(String sqlid,Object paramObj,ResultHandler arg1) {
        sqlSession.select(sqlid, paramObj,arg1);
    }
    public void select(String sqlid,Object paramObj,RowBounds arg3,ResultHandler arg1) {
        sqlSession.select(sqlid,paramObj,arg3, arg1);
    }
     
    public int update(String sqlid,Object paramObj) {
        return sqlSession.update(sqlid, paramObj);
    }
    public int update(String sqlid) {
        return sqlSession.update(sqlid);
    }
    
    /**
     * 批量更新
     * 方法描述：批量更新（效率没有在配置文件上的高）
     * @param statementName
     * @param list
     * @throws DataAccessException
     * @author anps
     * @date 2013-4-3 上午11:14:37
     * @comment
     */
    public void batchUpdate(final String statementName, final List list)  throws DataAccessException{
        SqlSession session = sqlSessionTemplate.getSqlSessionFactory().openSession(ExecutorType.BATCH, false);
        try{
            if(null != list || list.size() > 0){
                int size = 10000;
             
                for (int i = 0, n = list.size(); i < n; i++) {
                    this.update(statementName, list.get(i));
                    if (i % 1000 == 0 || i == size - 1) {
                        //手动每1000个一提交，提交后无法回滚
                        session.commit();
                        //清理缓存，防止溢出
                        session.clearCache();
                    }
                }
            }
        }catch (Exception e){
            session.rollback();
            if (log.isDebugEnabled()) {
                e.printStackTrace();
                log.debug("batchUpdate error: id [" + statementName + "], parameterObject [" + list + "].  Cause: " + e.getMessage());
            }
        } finally {
            session.close();
        }
    }
     
    /**
     * 批量插入
     * 方法描述：批量插入（效率没有在配置文件上的高）
     * @param statementName
     * @param list
     * @throws DataAccessException
     * @author anps
     * @date 2013-4-3 上午11:27:39
     * @comment
     */
    public void batchInsert(final String statementName, final List list)  throws DataAccessException{
 
        SqlSession session = sqlSessionTemplate.getSqlSessionFactory().openSession(ExecutorType.BATCH, false);
         
        int size = 10000;
        try{
            if(null != list || list.size() > 0){
                for (int i = 0, n = list.size(); i < n; i++) {
                    this.insert(statementName, list.get(i));
                    if (i % 1000 == 0 || i == size - 1) {
                        //手动每1000个一提交，提交后无法回滚
                        session.commit();
                        //清理缓存，防止溢出
                        session.clearCache();
                    }
                }
            }
        }catch (Exception e){
            session.rollback();
            if (log.isDebugEnabled()) {
                e.printStackTrace();
                log.debug("batchInsert error: id [" + statementName + "], parameterObject [" + list + "].  Cause: " + e.getMessage());
            }
        } finally {
            session.close();
        }
    }
 
    /**
     * 批量删除
     * 方法描述：批量删除（效率没有在配置文件上的高）
     * @param statementName
     * @param list
     * @throws DataAccessException
     * @author anps
     * @date 2013-4-3 上午11:29:53
     * @comment
     */
    public void batchDelete(final String statementName, final List list)  throws DataAccessException{
        SqlSession session = sqlSessionTemplate.getSqlSessionFactory().openSession(ExecutorType.BATCH, false);
         
        int size = 10000;
        try{
            if(null != list || list.size() > 0){
                for (int i = 0, n = list.size(); i < n; i++) {
                    this.delete(statementName, list.get(i));
                    if (i % 1000 == 0 || i == size - 1) {
                        //手动每1000个一提交，提交后无法回滚
                        session.commit();
                        //清理缓存，防止溢出
                        session.clearCache();
                    }
                }
            }
        }catch (Exception e){
            session.rollback();
            if (log.isDebugEnabled()) {
                e.printStackTrace();
                log.debug("batchDelete error: id [" + statementName + "], parameterObject [" + list + "].  Cause: " + e.getMessage());
            }
        } finally {
            session.close();
        }
    }
    
}
