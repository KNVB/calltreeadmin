package com.calltreeinfo.util;

import com.calltreeinfo.CallTreeInfo;

public interface DataStore {

	public CallTreeInfo[] getAllCallTreeInfo();
	public String[] getActiveDivisionNameList();
		
	public boolean saveCallTreeInfo(CallTreeInfo callTreeInfo) throws Exception;
	public void close()throws Exception;
}
