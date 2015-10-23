package com.ssi.cxf.client;

import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;

import com.ssi.cxf.facade.IHelloWorld;

public class CXFClient {

	public static void main(String[] args) {
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
		factory.setAddress("http://localhost:8888/helloWorld");
		factory.setServiceClass(IHelloWorld.class);
		
		IHelloWorld helloWorld = (IHelloWorld) factory.create();
		String result = helloWorld.sayHello(" cxf demo");
		System.out.println("调用结果：" + result);
	}
}
