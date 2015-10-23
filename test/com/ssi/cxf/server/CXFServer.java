package com.ssi.cxf.server;

import org.apache.cxf.endpoint.Server;
import org.apache.cxf.jaxws.JaxWsServerFactoryBean;

import com.ssi.cxf.impl.HelloWorldImpl;
import com.ssi.cxf.impl.HelloWorldImpl2;

public class CXFServer {
	
	public static void main(String[] args) {
		JaxWsServerFactoryBean factory1 = new JaxWsServerFactoryBean();
		factory1.setAddress("http://localhost:8888/demo/helloWorld2");
		factory1.setServiceClass(HelloWorldImpl2.class);
		
		Server server1 = factory1.create();
		server1.start();
		
		JaxWsServerFactoryBean factory2 = new JaxWsServerFactoryBean();
		factory2.setAddress("http://localhost:8888/demo/helloWorld");
		factory2.setServiceClass(HelloWorldImpl.class);
		
		Server server2 = factory2.create();
		server2.start();
	}
}
