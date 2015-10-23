package com.ssi.cxf.client;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.ssi.cxf.facade.IHelloWorld;

@RunWith(SpringJUnit4ClassRunner.class) 
@ContextConfiguration(
		locations={
				"classpath:mvc-servlet.xml",
				"classpath:com/ssi/cxf/client/applicationContext-cxf-client.xml",
				"classpath:applicationContext-data.xml"
		})
public class CXFClient3 {
	
	@Autowired
	private IHelloWorld helloWorldService; 
	
	
	@Test
	public void test9090() {
		
		String result = helloWorldService.sayHello(" Hello esb proxy demo");
		System.out.println("调用结果：" + result);
	}
}
