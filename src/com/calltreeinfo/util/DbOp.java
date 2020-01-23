package com.calltreeinfo.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.calltreeinfo.CallTree;
import com.calltreeinfo.CallTreeInfo;
import com.calltreeinfo.Division;
import com.calltreeinfo.Manual;
import com.calltreeinfo.Utility;

import com.fasterxml.jackson.databind.ObjectMapper;

public class DbOp implements DataStore {

	private Connection dbConn = null;
	
	private String dbServerName=Utility.getParameterValue("dbServerName");
	private	String dbms=Utility.getParameterValue("dbms");
	private String dbName=Utility.getParameterValue("dbName");
	private String dbUserName=Utility.getParameterValue("dbUserName");
	private String dbUserPwd=Utility.getParameterValue("dbUserPwd");
	private String jdbcDriver =Utility.getParameterValue("jdbcDriver");
	private String jdbcURL = new String("jdbc:");
	
	private String sqlString;
	private static final Logger logger = LogManager.getLogger(Class.class.getSimpleName());
	private ObjectMapper objectMapper = new ObjectMapper();
	public DbOp() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException
	{
		jdbcURL =jdbcURL +dbms+"://";
		jdbcURL =jdbcURL +dbServerName+"/"+dbName+"?useUnicode=true&characterEncoding=UTF-8";
		Class.forName(jdbcDriver);
		dbConn= DriverManager.getConnection(jdbcURL,dbUserName,dbUserPwd);
	}
	@Override
	public CallTreeInfo[] getAllCallTreeInfo() {
		ArrayList<CallTreeInfo> result=new ArrayList<CallTreeInfo>();
		CallTreeInfo callTreeInfo;
		CallTree callTree;
		ResultSet rs = null;
		PreparedStatement stmt = null;
	 
		sqlString ="select a.*,c.* from ";  
		sqlString+="calltreeinfo a inner join calltreeinfo_calltree b ";
		sqlString+="on a.calltreeinfo_id = b.calltreeinfo_id ";
		sqlString+="left outer join calltree c ";
		sqlString+="on b.calltree_id= c.calltree_id ";
		sqlString+="order by a.division,system_name,a.calltreeinfo_id";
		try
		{
			stmt=dbConn.prepareStatement(sqlString);
			rs=stmt.executeQuery();
			while (rs.next())
			{
				callTreeInfo =new CallTreeInfo();
				callTreeInfo.setDivision(rs.getString("division"));
				callTreeInfo.setLocation(rs.getString("location"));
				callTreeInfo.setMissionCritical(rs.getString("mission_Critical"));
				callTreeInfo.setLogRecipients(rs.getString("log_recipients"));
				callTreeInfo.setServiceLevel(rs.getString("service_level"));
				callTreeInfo.setStatus(rs.getInt("status"));
				callTreeInfo.setSystemName(rs.getString("system_name"));
				callTreeInfo.setTimeToEscalate(rs.getString("time_to_escalate"));
				callTreeInfo.setTimeToStartProcedure(rs.getString("time_to_start_procedure"));
				callTreeInfo.setCallTreeInfoId(rs.getInt("calltreeinfo_id"));
				callTree=new CallTree();
				if (rs.getString("calltree_id")!=null) {
					callTree.setCallTreeId(rs.getInt("calltree_id"));
					callTree.setCallTreeDetail(rs.getString("calltree_detail"));
				}
				callTreeInfo.setCallTree(callTree);
				result.add(callTreeInfo);
			}
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			releaseResource(rs, stmt);
		}
		return result.toArray(new CallTreeInfo[0]);
	}

	@Override
	public String[] getActiveDivisionNameList() {
		ResultSet rs = null;
		PreparedStatement stmt = null;
		ArrayList<String> result=new ArrayList<String>(); 
		sqlString="select * from division where status=? order by division_name";
		try
		{
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1,Division.active);
			rs=stmt.executeQuery();
			while (rs.next())
			{
				result.add(rs.getString("division_name"));
			}
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			releaseResource(rs, stmt);
		}
		return result.toArray(new String[0]);
	}

	@Override
	public boolean addCallTreeInfo(CallTreeInfo callTreeInfo) throws Exception {
		int callTreeId,callTreeInfoId,manualId;
		boolean addSuccess=false;
		ResultSet rs = null;
		PreparedStatement stmt = null;
		String insertMappingSqlString;
		try
		{
			sqlString ="insert into calltreeinfo ";
			sqlString+="(division,system_name,service_level,mission_critical,";
			sqlString+="time_to_start_procedure,time_to_escalate,log_recipients,status,version,location)";
			sqlString+="values (?,?,?,?,?,?,?,?,?,?)";
			
			logger.debug("Add a new call tree info.");
			logger.debug(objectMapper.writeValueAsString(callTreeInfo));
			dbConn.setAutoCommit(false);
			stmt=dbConn.prepareStatement(sqlString,Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,callTreeInfo.getDivision());
			stmt.setString(2,callTreeInfo.getSystemName());
			stmt.setString(3,callTreeInfo.getServiceLevel());
			stmt.setString(4,callTreeInfo.getMissionCritical());
			stmt.setString(5,callTreeInfo.getTimeToStartProcedure());
			stmt.setString(6,callTreeInfo.getTimeToEscalate());
			stmt.setString(7,callTreeInfo.getLogRecipients());
			stmt.setInt(8,callTreeInfo.getStatus());
			stmt.setFloat(9,callTreeInfo.getVersion());
			stmt.setString(10,callTreeInfo.getLocation());
			stmt.executeUpdate();
			rs = stmt.getGeneratedKeys();
			rs.next();
			callTreeInfoId=rs.getInt(1);
			logger.debug("new call tree Info Id="+callTreeInfoId);
			rs.close();
			stmt.close();
			if (callTreeInfo.getCallTree().getCallTreeId()==-1) {
				sqlString ="insert into calltree ";
				sqlString+="(calltree_detail)";
				sqlString+="values (?)";
				stmt=dbConn.prepareStatement(sqlString,Statement.RETURN_GENERATED_KEYS);
				stmt.setString(1,callTreeInfo.getCallTree().getCallTreeDetail());
				stmt.executeUpdate();
				rs = stmt.getGeneratedKeys();
				rs.next();
				callTreeId=rs.getInt(1);
				logger.debug("new call tree Id="+callTreeId);
				rs.close();
				stmt.close();
			} else {
				callTreeId=callTreeInfo.getCallTree().getCallTreeId();
			}
			sqlString ="insert into calltreeinfo_calltree ";
			sqlString+="(calltreeinfo_id,calltree_id)";
			sqlString+="values (?,?)";
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1,callTreeInfoId);
			stmt.setInt(2,callTreeId);
			stmt.executeUpdate();
			if (callTreeInfo.getManuals().length>0) {
				stmt.close();
				sqlString ="insert into manual ";
				sqlString+="(manual_location,manual_description,manual_last_update_date)";
				sqlString+="values (?,?,?)";
				
				insertMappingSqlString ="insert into calltreeinfo_manual ";
				insertMappingSqlString+="(calltreeinfo_id,manual_id)";
				insertMappingSqlString+="values(?,?)";
				for (Manual manual:callTreeInfo.getManuals()) {
					logger.debug(objectMapper.writeValueAsString(manual));
					stmt=dbConn.prepareStatement(sqlString,Statement.RETURN_GENERATED_KEYS);
					stmt.setString(1, manual.getManualLocation());
					stmt.setString(2, manual.getDescription());
					stmt.setString(3, manual.getLastUpdateDate());
					stmt.executeUpdate();
					rs = stmt.getGeneratedKeys();
					rs.next();
					manualId=rs.getInt(1);
					rs.close();
					stmt.close();
					stmt=dbConn.prepareStatement(insertMappingSqlString);
					stmt.setInt(1,callTreeInfoId);
					stmt.setInt(2,manualId);
					stmt.executeUpdate();
					stmt.close();
					rs.close();
				}
			}
			dbConn.commit();
			dbConn.setAutoCommit(true);
			addSuccess=true;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			releaseResource(rs, stmt);
		}
		return addSuccess;
	}
	@Override
	public boolean updateCallTreeInfo(CallTreeInfo callTreeInfo) throws Exception {
		boolean updateSuccess=false;
		ResultSet rs = null;
		PreparedStatement stmt = null;
		try
		{
			sqlString ="update calltreeinfo ";
			sqlString+="set division = ?,system_name=?,service_level=?,mission_critical=?,time_to_start_procedure=?,";
			sqlString+="time_to_escalate=?,log_recipients=?,status=?,version=?,location=? ";
			sqlString+="where calltreeinfo_id=?";
			
			logger.debug("update a new call tree info.");
			logger.debug(objectMapper.writeValueAsString(callTreeInfo));
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setString(1,callTreeInfo.getDivision());
			stmt.setString(2,callTreeInfo.getSystemName());
			stmt.setString(3,callTreeInfo.getServiceLevel());
			stmt.setString(4,callTreeInfo.getMissionCritical());
			stmt.setString(5,callTreeInfo.getTimeToStartProcedure());
			stmt.setString(6,callTreeInfo.getTimeToEscalate());
			stmt.setString(7,callTreeInfo.getLogRecipients());
			stmt.setInt(8,callTreeInfo.getStatus());
			stmt.setFloat(9,callTreeInfo.getVersion());
			stmt.setString(10,callTreeInfo.getLocation());
			stmt.setInt(11,callTreeInfo.getCallTreeInfoId());
			stmt.executeUpdate();
			updateSuccess=true;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			releaseResource(rs, stmt);
		}
		return updateSuccess;
	}
	
	public boolean enableCallTreeInfo(int callTreeInfoId) throws Exception {
		ResultSet rs = null;
		PreparedStatement stmt = null;
		boolean updateSuccess=false;
		try
		{
			sqlString ="update calltreeinfo set status=? where callTreeInfo_Id=?";
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1,CallTreeInfo.active);
			stmt.setInt(2,callTreeInfoId);
			stmt.executeUpdate();
			updateSuccess=true;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			releaseResource(rs, stmt);
		}
		return updateSuccess;
	}
	public boolean disableCallTreeInfo(int callTreeInfoId) throws Exception {
		ResultSet rs = null;
		PreparedStatement stmt = null;
		boolean updateSuccess=false;
		try
		{
			sqlString ="update calltreeinfo set status=? where callTreeInfo_Id=?";
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1,CallTreeInfo.inactive);
			stmt.setInt(2,callTreeInfoId);
			stmt.executeUpdate();
			updateSuccess=true;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			releaseResource(rs, stmt);
		}
		return updateSuccess;
	}
	/**
	 * Release resource for 
	 * @param r ResultSet object
	 * @param s PreparedStatement object
	 */
	private void releaseResource(ResultSet r, PreparedStatement s) 
	{
		if (r != null) 
		{
			try 
			{
				r.close();
			} 
			catch (SQLException e) 
			{
				e.printStackTrace();
			}
		}
		if (s != null) 
		{
			try 
			{
				s.close();
			} 
			catch (SQLException e) 
			{
				e.printStackTrace();
			}
		}
		r = null;
		s = null;
	}
	/**
	 * Close db connection
	 * @throws Exception if a data store access error occurs
	 */
	@Override
	public void close() throws Exception 
	{
		dbConn.close();
		dbConn = null;
	}
	
}
