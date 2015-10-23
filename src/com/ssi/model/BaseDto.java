package com.ssi.model;


public class BaseDto implements java.io.Serializable{
	//序列化
	private static final long serialVersionUID = 1L;
	//是否有效
	private int isValid;
	// 创建时间
	private String createDate;
	// 创建人
	private String createUser;
	// 最后操作时间
	private String latestOpDate;
	// 最后操作人
	private String latestOpUser;
	
	public int getIsValid() {
		return isValid;
	}
	public void setIsValid(int isValid) {
		this.isValid = isValid;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getCreateUser() {
		return createUser;
	}
	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}
	public String getLatestOpDate() {
		return latestOpDate;
	}
	public void setLatestOpDate(String latestOpDate) {
		this.latestOpDate = latestOpDate;
	}
	public String getLatestOpUser() {
		return latestOpUser;
	}
	public void setLatestOpUser(String latestOpUser) {
		this.latestOpUser = latestOpUser;
	}
	
	
}
