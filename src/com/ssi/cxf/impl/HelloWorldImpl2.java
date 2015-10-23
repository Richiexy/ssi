package com.ssi.cxf.impl;

import com.ssi.cxf.facade.IHelloWorld2;

public class HelloWorldImpl2 implements IHelloWorld2 {

	@Override
	public String sayHi(String world) {
		System.out.println("客户端调用2：" + world);
		return "hello " + world;
	}

	
}
