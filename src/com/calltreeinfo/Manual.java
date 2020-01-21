package com.calltreeinfo;

public class Manual {

	public static final int active=1;
	public static final int inactive=0;

	private String manualLink=new String();
	private String manualDescription=new String();
	private int status=Manual.inactive;	
	public Manual() {
		
	}
	public String getManualLink() {
		return manualLink;
	}
	public void setManualLink(String manualLink) {
		this.manualLink = manualLink;
	}
	public String getManualDescription() {
		return manualDescription;
	}
	public void setManualDescription(String manualDescription) {
		this.manualDescription = manualDescription;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}

}
