package com.calltree;

public class Manual {

	public static final int active=1;
	public static final int inactive=0;

	private int manualId;
	private String manualLocation;
	private String description;
	private String lastUpdateDate;
	public Manual() {
		
	}
	public int getManualId() {
		return manualId;
	}
	public void setManualId(int manualId) {
		this.manualId = manualId;
	}
	public String getManualLocation() {
		return manualLocation;
	}
	public void setManualLocation(String manualLocation) {
		this.manualLocation = manualLocation;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLastUpdateDate() {
		return lastUpdateDate;
	}
	public void setLastUpdateDate(String lastUpdateDate) {
		this.lastUpdateDate = lastUpdateDate;
	}
}
