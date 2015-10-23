package com.ssi.cxf.client;

import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;
import org.junit.Test;

import com.ssi.cxf.facade.IHelloWorld;
import com.ssi.cxf.facade.IHelloWorld2;

public class CXFClient2 {
	
	/**
	 * @Description: ESB测试
	 * @author: 俞根海
	 * @date: 2015年10月23日 上午11:20:59
	 */
	@Test
	public void test9999_1() {
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
		factory.setAddress("http://127.0.0.1:9999/webService/demo/helloWorld");
		factory.setServiceClass(IHelloWorld.class);
		IHelloWorld helloWorld = (IHelloWorld) factory.create();
		String result = helloWorld.sayHello(" Hello esb proxy demo");
		System.out.println("调用结果：" + result);
	}
	
	@Test
	public void test9999_2() {
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
		factory.setAddress("http://127.0.0.1:9999/webService/demo/helloWorld2");
		factory.setServiceClass(IHelloWorld2.class);
		IHelloWorld2 helloWorld = (IHelloWorld2) factory.create();
		String result = helloWorld.sayHi(" Hi esb proxy demo");
		System.out.println("调用结果：" + result);
	}
	
	@Test
	public void test9999_3() {
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
		factory.setAddress("http://localhost:9999/webservice3?demo/helloWorld2");
		factory.setServiceClass(IHelloWorld2.class);
		IHelloWorld2 helloWorld = (IHelloWorld2) factory.create();
		String result = helloWorld.sayHi(" Hi esb proxy demo");
		System.out.println("调用结果：" + result);
	}
	
	@Test
	public void test9999_4() {
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
		factory.setAddress("http://localhost:9999/webservice3?demo/helloWorld");
		factory.setServiceClass(IHelloWorld.class);
		IHelloWorld helloWorld = (IHelloWorld) factory.create();
		String result = helloWorld.sayHello(" Hello esb proxy demo");
		System.out.println("调用结果：" + result);
	}
	
	@Test
	public void test8080() {
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
		factory.setServiceClass(IHelloWorld.class);
		factory.setAddress("http://localhost:8080/webservice");
		
		IHelloWorld helloWorld = (IHelloWorld) factory.create();
		String result = helloWorld.sayHello(" esb proxy demo");
		System.out.println("调用结果：" + result);
	}
	
	
	@Test
	public void test9090_1() {
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
		factory.setAddress("http://localhost:9090/ssi/cxfServices/helloWorld");
		factory.setServiceClass(IHelloWorld.class);
		IHelloWorld helloWorld = (IHelloWorld) factory.create();
		String result = helloWorld.sayHello(" Hello esb proxy demo");
		System.out.println("调用结果：" + result);
	}
	
	@Test
	public void test9090_2() {
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
		factory.setAddress("http://localhost:9090/ssi/cxfServices/helloWorld2");
		factory.setServiceClass(IHelloWorld2.class);
		IHelloWorld2 helloWorld = (IHelloWorld2) factory.create();
		String result = helloWorld.sayHi(" Hi esb proxy demo");
		System.out.println("调用结果：" + result);
	}
	
	@Test
	public void test() {
		System.out.println("--null---：" + System.getProperty("webapp.root"));
	}
	
}
