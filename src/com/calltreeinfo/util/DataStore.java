package com.calltreeinfo.util;

import com.calltreeinfo.CallTree;
import com.calltreeinfo.CallTreeInfo;

public interface DataStore {

	public CallTreeInfo[] getAllCallTreeInfo();
	public String[] getActiveDivisionNameList();
	
	public boolean addCallTreeInfo(CallTreeInfo callTreeInfo) throws Exception;
	public boolean updateCallTreeInfo(CallTreeInfo callTreeInfo) throws Exception;
	
	public boolean enableCallTreeInfo(int callTreeInfoId) throws Exception;
	public boolean disableCallTreeInfo(int callTreeInfoId) throws Exception;
	public void close()throws Exception;
}
