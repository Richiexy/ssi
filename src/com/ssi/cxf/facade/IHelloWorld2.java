package com.ssi.cxf.facade;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService
public interface IHelloWorld2 {

	@WebMethod
	public String sayHi(@WebParam String world) ;
}
