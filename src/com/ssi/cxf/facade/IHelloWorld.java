package com.ssi.cxf.facade;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService
public interface IHelloWorld {

	@WebMethod
	public String sayHello(@WebParam String world) ;
}
