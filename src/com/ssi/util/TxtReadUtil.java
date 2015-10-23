package com.ssi.util;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.Test;

public class TxtReadUtil {

	public BufferedReader loadFile(String filePath) {
		try {
			FileReader fr=new FileReader(filePath);
			BufferedReader br=new BufferedReader(fr);
			return br;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		return null;
	}
	@Test
	public void test(){
		BufferedReader br1 = loadFile("c:/Users/Administrator/Desktop/POLICYNO-1");
		List set1 = getListResult(br1);
		
		BufferedReader br2 = loadFile("c:/Users/Administrator/Desktop/POLICYNO-2");
		List set2 = getListResult(br2);
		
		System.out.println(set1.size());
		set1.removeAll(set2);
		System.out.println(set1.size());
//		for( Iterator it = set1.iterator(); it.hasNext(); ){  
//			System.out.println(it.next().toString() );
//	    }
//		System.out.println("====================================");
//		for( Iterator it = set2.iterator(); it.hasNext(); ){  
//			System.out.println(it.next().toString() );
//		}
		for(int i=0;i<set1.size();i++){
			String[] tmp = set1.get(i).toString().split("-");
			System.out.println("select * from CLM_CLAIM_STATUS_DETAIL a where a.registno='" + tmp[0] + "' and a.policyno='" + tmp[1] + "' and a.plancode='"
					+ tmp[2] + "' and a.riskcode='" + tmp[3] + "' and a.itemno='" + tmp[4] + "' and a.nodetype='" + tmp[5] + "';");
		}
	}
	public Set getHashSetResult(BufferedReader br) {
		
		try {
			Set set1 = new HashSet();
			while(br.readLine()!=null){
				 String str=br.readLine();
				 if(StringUtil.isNotNull(str)){
					 String strArr[] = str.split("\t");
					 String ret = "";
					 for(String tmp : strArr){
						 ret += tmp.trim()+"-";
					 }
					 if(ret.length() > 0){
						 set1.add(ret.substring(0, ret.length() -1));
					 }
					 
				 }
				
			}
			if(br != null){
				br.close();
			}
			return set1;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}
	public List getListResult(BufferedReader br) {
		
		try {
			List list = new ArrayList();
			while(br.readLine()!=null){
				String str=br.readLine();
				if(StringUtil.isNotNull(str)){
					String strArr[] = str.split("\t");
					String ret = "";
					for(String tmp : strArr){
						ret += tmp.trim()+"-";
					}
					if(ret.length() > 0){
						list.add(ret.substring(0, ret.length() -1));
					}
					
				}
			}
			if(br != null){
				br.close();
			}
			return list;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}
}
