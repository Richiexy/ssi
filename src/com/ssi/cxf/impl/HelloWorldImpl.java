package com.ssi.cxf.impl;

import com.ssi.cxf.facade.IHelloWorld;

public class HelloWorldImpl implements IHelloWorld {

	@Override
	public String sayHello(String world) {
		System.out.println("客户端调用：" + world);
		return "hello " + world;
	}

	
}
