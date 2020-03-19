package com.calltree.util;

import com.calltree.CallTree;
import com.calltree.CallTreeEntry;
import com.calltree.OperationResult;

public interface DataStore {

	public OperationResult getAllCallTreeEntry();
	public OperationResult getActiveDivisionNameList();
	public OperationResult getCallTreeEntryByCallTreeId(int callTreeId)throws Exception;
	public OperationResult getManualsByCallTreeEntryId(int callTreeEntryId)throws Exception;
	public OperationResult addCallTreeEntry(CallTreeEntry callTreeEntry) throws Exception;
	public boolean updateCallTree(CallTree callTree) throws Exception;
	public boolean updateCallTreeEntry(CallTreeEntry callTreeEntry) throws Exception;
	public boolean updateCallTreeEntryManualsMapping(CallTreeEntry callTreeEntry) throws Exception;
	
	public boolean enableCallTreeEntry(int callTreeEntryId) throws Exception;
	public boolean disableCallTreeEntry(int callTreeEntryId) throws Exception;
	public void close()throws Exception;
}
