package com.calltree_entries;

public class Division {
	public static final int active=1;
	public static final int inactive=0;
	
	private int divisionId=-1;
	private String divisionName=new String();
	public int getDivisionId() {
		return divisionId;
	}
	public void setDivisionId(int divisionId) {
		this.divisionId = divisionId;
	}
	public String getDivisionName() {
		return divisionName;
	}
	public void setDivisionName(String divisionName) {
		this.divisionName = divisionName;
	}	
}
