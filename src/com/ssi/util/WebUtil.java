package com.ssi.util;

import javax.servlet.http.HttpServletRequest;
/**
 * Controller WebUtil
 * 
 * @author ex_ouyangqun
 *
 */
public class WebUtil {
	/** session key **/
	public static final String SESSION_KEY_KEYS = "SESSION_KEYS";										
	public static final String SESSION_KEY_COMMANDS = "SESSION_COMMANDS";
	public static final String SESSION_KEY_STATS = "SESSION_STATS";
	public static final String SESSION_KEY_SIDEBAR = "SESSION_SIDEBAR";
	public static final String SESSION_KEY_SERVER = "SESSION_SERVER";
	public static final String SESSION_KEY_CLIENT = "SESSION_CLIENT";
	public static final String SESSION_KEY_SERVICE = "SESSION_SERVICE";
	public static final String SESSION_KEY_KEY = "SESSION_KEY";
	public static final String SESSION_KEY_POOL = "SESSION_POOL";
	public static final String SESSION_KEY_POOL_ATTR = "SESSION_POOL_ATTR";	
	public static final String SESSION_KEY_SYSCODE = "SESSION_SYSCODE";
	
	public static void setSession(HttpServletRequest request, String key, Object obj){		
		request.getSession().setAttribute(key, obj);
	}
	
	public static Object getSession(HttpServletRequest request, String key){		
		return request.getSession().getAttribute(key);
	}
	
	public static void removeSession(HttpServletRequest request, String key){		
		request.getSession().removeAttribute(key);
	}
	
}
