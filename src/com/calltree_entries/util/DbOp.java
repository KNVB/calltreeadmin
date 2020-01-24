package com.calltree_entries.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.calltree_entries.CallTree;
import com.calltree_entries.CallTreeEntry;
import com.calltree_entries.Division;
import com.calltree_entries.Manual;
import com.calltree_entries.Utility;
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
	public CallTreeEntry[] getAllCallTreeEntry() {
		ArrayList<CallTreeEntry> result=new ArrayList<CallTreeEntry>();
		CallTreeEntry callTreeEntry;
		CallTree callTree;
		ResultSet rs = null;
		PreparedStatement stmt = null;
	 
		sqlString ="select a.*,c.* from ";  
		sqlString+="callTreeEntry a inner join callTreeEntry_calltree b ";
		sqlString+="on a.callTreeEntry_id = b.callTreeEntry_id ";
		sqlString+="left outer join calltree c ";
		sqlString+="on b.calltree_id= c.calltree_id ";
		sqlString+="order by a.division,system_name,a.callTreeEntry_id";
		try
		{
			stmt=dbConn.prepareStatement(sqlString);
			rs=stmt.executeQuery();
			while (rs.next())
			{
				callTreeEntry =new CallTreeEntry();
				callTreeEntry.setDivision(rs.getString("division"));
				callTreeEntry.setLocation(rs.getString("location"));
				callTreeEntry.setMissionCritical(rs.getString("mission_Critical"));
				callTreeEntry.setLogRecipients(rs.getString("log_recipients"));
				callTreeEntry.setServiceLevel(rs.getString("service_level"));
				callTreeEntry.setStatus(rs.getInt("status"));
				callTreeEntry.setSystemName(rs.getString("system_name"));
				callTreeEntry.setTimeToEscalate(rs.getString("time_to_escalate"));
				callTreeEntry.setTimeToStartProcedure(rs.getString("time_to_start_procedure"));
				callTreeEntry.setCallTreeEntryId(rs.getInt("callTreeEntry_id"));
				callTree=new CallTree();
				if (rs.getString("calltree_id")!=null) {
					callTree.setCallTreeId(rs.getInt("calltree_id"));
					callTree.setCallTreeDetail(rs.getString("calltree_detail"));
				}
				callTreeEntry.setCallTree(callTree);
				result.add(callTreeEntry);
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
		return result.toArray(new CallTreeEntry[0]);
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
	public CallTreeEntry[] getCallTreeEntryByCallTreeId(int callTreeId)throws Exception {
		ArrayList<CallTreeEntry> result=new ArrayList<CallTreeEntry>();
		CallTreeEntry callTreeEntry;
		ResultSet rs = null;
		PreparedStatement stmt = null;
		try
		{
			sqlString ="select a.* from ";  
			sqlString+="callTreeEntry a inner join callTreeEntry_calltree b ";
			sqlString+="on b.calltree_id=? and a.callTreeEntry_id = b.callTreeEntry_id ";
			sqlString+="order by a.division,system_name,a.callTreeEntry_id";
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1, callTreeId);
			rs=stmt.executeQuery();
			while (rs.next()) {
				callTreeEntry =new CallTreeEntry();
				callTreeEntry.setDivision(rs.getString("division"));
				callTreeEntry.setLocation(rs.getString("location"));
				callTreeEntry.setMissionCritical(rs.getString("mission_Critical"));
				callTreeEntry.setLogRecipients(rs.getString("log_recipients"));
				callTreeEntry.setServiceLevel(rs.getString("service_level"));
				callTreeEntry.setStatus(rs.getInt("status"));
				callTreeEntry.setSystemName(rs.getString("system_name"));
				callTreeEntry.setTimeToEscalate(rs.getString("time_to_escalate"));
				callTreeEntry.setTimeToStartProcedure(rs.getString("time_to_start_procedure"));
				callTreeEntry.setCallTreeEntryId(rs.getInt("callTreeEntry_id"));
				result.add(callTreeEntry);
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
		return result.toArray(new CallTreeEntry[0]);
	}
	@Override
	public int addCallTreeEntry(CallTreeEntry callTreeEntry) throws Exception {
		int callTreeId,callTreeEntryId=-1,manualId;
		ResultSet rs = null;
		PreparedStatement stmt = null;
		String insertMappingSqlString;
		try
		{
			sqlString ="insert into callTreeEntry ";
			sqlString+="(division,system_name,service_level,mission_critical,";
			sqlString+="time_to_start_procedure,time_to_escalate,log_recipients,status,version,location)";
			sqlString+="values (?,?,?,?,?,?,?,?,?,?)";
			
			logger.debug("Add a new call tree info.");
			logger.debug(objectMapper.writeValueAsString(callTreeEntry));
			dbConn.setAutoCommit(false);
			stmt=dbConn.prepareStatement(sqlString,Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,callTreeEntry.getDivision());
			stmt.setString(2,callTreeEntry.getSystemName());
			stmt.setString(3,callTreeEntry.getServiceLevel());
			stmt.setString(4,callTreeEntry.getMissionCritical());
			stmt.setString(5,callTreeEntry.getTimeToStartProcedure());
			stmt.setString(6,callTreeEntry.getTimeToEscalate());
			stmt.setString(7,callTreeEntry.getLogRecipients());
			stmt.setInt(8,callTreeEntry.getStatus());
			stmt.setFloat(9,callTreeEntry.getVersion());
			stmt.setString(10,callTreeEntry.getLocation());
			stmt.executeUpdate();
			rs = stmt.getGeneratedKeys();
			rs.next();
			callTreeEntryId=rs.getInt(1);
			logger.debug("new call tree Info Id="+callTreeEntryId);
			rs.close();
			stmt.close();
			if (callTreeEntry.getCallTree().getCallTreeId()==-1) {
				sqlString ="insert into calltree ";
				sqlString+="(calltree_detail)";
				sqlString+="values (?)";
				stmt=dbConn.prepareStatement(sqlString,Statement.RETURN_GENERATED_KEYS);
				stmt.setString(1,callTreeEntry.getCallTree().getCallTreeDetail());
				stmt.executeUpdate();
				rs = stmt.getGeneratedKeys();
				rs.next();
				callTreeId=rs.getInt(1);
				logger.debug("new call tree Id="+callTreeId);
				rs.close();
				stmt.close();
			} else {
				callTreeId=callTreeEntry.getCallTree().getCallTreeId();
			}
			sqlString ="insert into callTreeEntry_calltree ";
			sqlString+="(callTreeEntry_id,calltree_id)";
			sqlString+="values (?,?)";
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1,callTreeEntryId);
			stmt.setInt(2,callTreeId);
			stmt.executeUpdate();
			if (callTreeEntry.getManuals().length>0) {
				stmt.close();
				sqlString ="insert into manual ";
				sqlString+="(manual_location,manual_description,manual_last_update_date)";
				sqlString+="values (?,?,?)";
				
				insertMappingSqlString ="insert into callTreeEntry_manual ";
				insertMappingSqlString+="(callTreeEntry_id,manual_id)";
				insertMappingSqlString+="values(?,?)";
				for (Manual manual:callTreeEntry.getManuals()) {
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
					stmt.setInt(1,callTreeEntryId);
					stmt.setInt(2,manualId);
					stmt.executeUpdate();
					stmt.close();
					rs.close();
				}
			}
			dbConn.commit();
		}
		catch (Exception e) 
		{
			dbConn.rollback();
			e.printStackTrace();
		} 
		finally 
		{
			dbConn.setAutoCommit(true);
			releaseResource(rs, stmt);
		}
		return callTreeEntryId;
	}
	@Override
	public boolean updateCallTreeEntry(CallTreeEntry callTreeEntry) throws Exception {
		boolean updateSuccess=false;
		ResultSet rs = null;
		PreparedStatement stmt = null;
		try
		{
			sqlString ="update callTreeEntry ";
			sqlString+="set division = ?,system_name=?,service_level=?,mission_critical=?,time_to_start_procedure=?,";
			sqlString+="time_to_escalate=?,log_recipients=?,status=?,version=?,location=? ";
			sqlString+="where callTreeEntry_id=?";
			
			logger.debug("update a new call tree info.");
			logger.debug(objectMapper.writeValueAsString(callTreeEntry));
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setString(1,callTreeEntry.getDivision());
			stmt.setString(2,callTreeEntry.getSystemName());
			stmt.setString(3,callTreeEntry.getServiceLevel());
			stmt.setString(4,callTreeEntry.getMissionCritical());
			stmt.setString(5,callTreeEntry.getTimeToStartProcedure());
			stmt.setString(6,callTreeEntry.getTimeToEscalate());
			stmt.setString(7,callTreeEntry.getLogRecipients());
			stmt.setInt(8,callTreeEntry.getStatus());
			stmt.setFloat(9,callTreeEntry.getVersion());
			stmt.setString(10,callTreeEntry.getLocation());
			stmt.setInt(11,callTreeEntry.getCallTreeEntryId());
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
	
	public boolean enableCallTreeEntry(int callTreeEntryId) throws Exception {
		ResultSet rs = null;
		PreparedStatement stmt = null;
		boolean updateSuccess=false;
		try
		{
			sqlString ="update callTreeEntry set status=? where callTreeEntry_Id=?";
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1,CallTreeEntry.active);
			stmt.setInt(2,callTreeEntryId);
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
	public boolean disableCallTreeEntry(int callTreeEntryId) throws Exception {
		ResultSet rs = null;
		PreparedStatement stmt = null;
		boolean updateSuccess=false;
		try
		{
			sqlString ="update callTreeEntry set status=? where callTreeEntry_Id=?";
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1,CallTreeEntry.inactive);
			stmt.setInt(2,callTreeEntryId);
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
