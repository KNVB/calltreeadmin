package com.calltree_entries.util;

import com.calltree_entries.CallTree;
import com.calltree_entries.CallTreeEntry;
import com.calltree_entries.Manual;

public interface DataStore {

	public CallTreeEntry[]getAllCallTreeEntry();
	public String[] getActiveDivisionNameList();
	public CallTreeEntry[] getCallTreeEntryByCallTreeId(int callTreeId)throws Exception;
	public Manual[] getManualsByCallTreeEntryId(int callTreeEntryId)throws Exception;
	public CallTreeEntry addCallTreeEntry(CallTreeEntry callTreeEntry) throws Exception;
	public boolean updateCallTree(CallTree callTree) throws Exception;
	public boolean updateCallTreeEntry(CallTreeEntry callTreeEntry) throws Exception;
	public boolean updateManuals(CallTreeEntry callTreeEntry) throws Exception;
	
	public boolean enableCallTreeEntry(int callTreeEntryId) throws Exception;
	public boolean disableCallTreeEntry(int callTreeEntryId) throws Exception;
	public void close()throws Exception;
}
