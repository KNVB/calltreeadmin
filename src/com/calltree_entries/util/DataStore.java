package com.calltree_entries.util;

import com.calltree_entries.CallTree;
import com.calltree_entries.CallTreeEntry;

public interface DataStore {

	public CallTreeEntry[] getAllCallTreeEntry();
	public String[] getActiveDivisionNameList();
	public CallTreeEntry[] getCallTreeEntryByCallTreeId(int callTreeId)throws Exception;
	public int addCallTreeEntry(CallTreeEntry callTreeEntry) throws Exception;
	public boolean updateCallTreeEntry(CallTreeEntry callTreeEntry) throws Exception;
	
	public boolean enableCallTreeEntry(int callTreeEntryId) throws Exception;
	public boolean disableCallTreeEntry(int callTreeEntryId) throws Exception;
	public void close()throws Exception;
}
