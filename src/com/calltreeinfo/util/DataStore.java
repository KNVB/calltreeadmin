package com.calltreeinfo.util;
import java.util.Map;

import com.calltreeinfo.CallTree;
import com.calltreeinfo.CallTreeInfo;
import com.calltreeinfo.SharedCallTree;
public interface DataStore {

	public CallTreeInfo[] getAllCallTreeInfo();
	public String[] getActiveDivisionNameList();
	public Map<String,SharedCallTree[]> getSharedCallTree() throws Exception;
	
	public boolean addCallTreeInfo(CallTreeInfo callTreeInfo) throws Exception;
	public boolean updateCallTreeInfo(CallTreeInfo callTreeInfo) throws Exception;
	
	public boolean enableCallTreeInfo(int callTreeInfoId) throws Exception;
	public boolean disableCallTreeInfo(int callTreeInfoId) throws Exception;
	public void close()throws Exception;
}
