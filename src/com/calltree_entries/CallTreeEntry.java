package com.calltree_entries;

import java.util.ArrayList;

public class CallTreeEntry {
	public static final int active=1;
	public static final int inactive=0;
	private CallTree callTree=null;
	private String division=new String();
	private String systemName=new String();
	private String location=new String();
	private String serviceLevel=new String();
	private String missionCritical=new String();
	private String timeToStartProcedure=new String();
	private String timeToEscalate=new String();
	private String logRecipients=new String();
	private int status=CallTreeEntry.inactive;	
	private int callTreeEntryId;
	private float version=0.0f;

	private ArrayList<Manual> manuals=new ArrayList<Manual>();
	
	public CallTreeEntry() {
		
	}
	
	public CallTree getCallTree() {
		return callTree;
	}

	public void setCallTree(CallTree callTree) {
		this.callTree = callTree;
	}

	public int getCallTreeEntryId() {
		return callTreeEntryId;
	}

	public void setCallTreeEntryId(int callTreeEntryId) {
		this.callTreeEntryId = callTreeEntryId;
	}
	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public String getSystemName() {
		return systemName;
	}

	public void setSystemName(String systemName) {
		this.systemName = systemName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getServiceLevel() {
		return serviceLevel;
	}

	public void setServiceLevel(String serviceLevel) {
		this.serviceLevel = serviceLevel;
	}

	public String getMissionCritical() {
		return missionCritical;
	}

	public void setMissionCritical(String missionCritical) {
		this.missionCritical = missionCritical;
	}

	public String getTimeToStartProcedure() {
		return timeToStartProcedure;
	}

	public void setTimeToStartProcedure(String timeToStartProcedure) {
		this.timeToStartProcedure = timeToStartProcedure;
	}

	public String getTimeToEscalate() {
		return timeToEscalate;
	}

	public void setTimeToEscalate(String timeToEscalate) {
		this.timeToEscalate = timeToEscalate;
	}

	public String getLogRecipients() {
		return logRecipients;
	}

	public void setLogRecipients(String logRecipients) {
		this.logRecipients = logRecipients;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public ArrayList<Manual>getManuals() {
		return manuals;
	}

	public void setManuals(ArrayList<Manual> manuals) {
		this.manuals = manuals;
	}
	public float getVersion() {
		return version;
	}
	public void setVersion(float version) {
		this.version = version;
	}
}
