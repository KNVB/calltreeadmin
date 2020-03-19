package com.calltree.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Map;
import java.util.TreeMap;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.calltree.CallTree;
import com.calltree.CallTreeEntry;
import com.calltree.Division;
import com.calltree.Manual;
import com.calltree.OperationResult;
import com.calltree.Utility;
import com.fasterxml.jackson.databind.ObjectMapper;

public class DbOp implements DataStore {

	private Connection dbConn = null;
	
	private String dbServerName=Utility.getParameterValue("dbServerName");
	private String dbms=Utility.getParameterValue("dbms");
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
	public OperationResult addCallTreeEntry(CallTreeEntry callTreeEntry) throws Exception {
		int callTreeId,callTreeEntryId=-1,manualId;
		OperationResult or=new OperationResult(); 
		PreparedStatement stmt = null;
		ResultSet rs = null; 
		try
		{
			sqlString ="insert into callTreeEntry ";
			sqlString+="(division,system_name,service_level,mission_critical,";
			sqlString+="time_to_start_procedure,time_to_escalate,log_recipients,status,version,location)";
			sqlString+="values (?,?,?,?,?,?,?,?,?,?)";
			
			logger.debug("Add a new call tree entry.");
			logger.debug(objectMapper.writeValueAsString(callTreeEntry));
			dbConn.setAutoCommit(false);
			stmt=dbConn.prepareStatement(sqlString,Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1,callTreeEntry.getDivision());
			stmt.setString(2,callTreeEntry.getSystemName());
			stmt.setInt(3,callTreeEntry.getServiceLevel());
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
			callTreeEntry.setCallTreeEntryId(callTreeEntryId);
			logger.debug("new call tree entry Id="+callTreeEntryId);
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
				callTreeEntry.getCallTree().setCallTreeId(callTreeId);
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
			if (callTreeEntry.getManuals().size()>0) {
				stmt.close();

				for (Manual manual:callTreeEntry.getManuals()) {
					logger.debug(objectMapper.writeValueAsString(manual));
					manualId=this.addManual(manual);
					this.addCallTreeEntryManualMapping(callTreeEntry.getCallTreeEntryId(), manualId);
					manual.setManualId(manualId);
				}
			}
			dbConn.commit();
			or.success=true;
			or.returnObj = callTreeEntry;
		}
		catch (Exception e) 
		{
			dbConn.rollback();
			e.printStackTrace();
			callTreeEntry=null;
		} 
		finally 
		{
			dbConn.setAutoCommit(true);
			releaseResource(rs, stmt);
		}
		return or;
	}
	@Override
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
	@Override
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
	@Override
	public OperationResult getActiveDivisionNameList() {
		ArrayList<String> result=new ArrayList<String>();
		OperationResult or=new OperationResult();
		PreparedStatement stmt = null;
		ResultSet rs = null; 
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
			or.success=true;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			releaseResource(rs, stmt);
		}
		or.returnObj=result.toArray(new String[0]);
		return or;
	}
	@Override
	public OperationResult getAllCallTreeEntry() {
		Map<Integer,CallTreeEntry> result=new TreeMap<Integer,CallTreeEntry>();
		CallTreeEntry callTreeEntry;
		CallTree callTree;
		OperationResult or =new OperationResult();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		
		sqlString ="select a.*,c.*,e.* from ";
		sqlString+="callTreeEntry a ";
		sqlString+="left outer join callTreeEntry_manual b on a.calltreeEntry_id = b.calltreeEntry_id "; 
		sqlString+="left outer join manual c on b.manual_id=c.manual_id ";
		sqlString+="inner join callTreeEntry_calltree d on a.calltreeEntry_id=d.calltreeEntry_Id "; 
		sqlString+="inner join calltree e on e.calltree_id=d.calltree_id ";
		sqlString+="order by a.division,system_name,a.callTreeEntry_id";
		try
		{
			stmt=dbConn.prepareStatement(sqlString);
			rs=stmt.executeQuery();
			while (rs.next())
			{
				if (result.containsKey(rs.getInt("calltreeentry_id"))) {
					callTreeEntry = result.remove(rs.getInt("calltreeentry_id"));
				} else {
					callTreeEntry =new CallTreeEntry();
					callTreeEntry.setDivision(rs.getString("division"));
					callTreeEntry.setLocation(rs.getString("location"));
					callTreeEntry.setMissionCritical(rs.getString("mission_Critical"));
					callTreeEntry.setLogRecipients(rs.getString("log_recipients"));
					callTreeEntry.setServiceLevel(rs.getInt("service_level"));
					callTreeEntry.setStatus(rs.getInt("status"));
					callTreeEntry.setSystemName(rs.getString("system_name"));
					callTreeEntry.setTimeToEscalate(rs.getString("time_to_escalate"));
					callTreeEntry.setTimeToStartProcedure(rs.getString("time_to_start_procedure"));
					callTreeEntry.setCallTreeEntryId(rs.getInt("callTreeEntry_id"));
					
					callTree=new CallTree();
					callTree.setCallTreeId(rs.getInt("calltree_id"));
					callTree.setCallTreeDetail(rs.getString("calltree_detail"));
		
					callTreeEntry.setCallTree(callTree);
				}
				if (rs.getString("manual_id") != null) {
					Manual manual=new Manual();
					manual.setManualId(rs.getInt("manual_id"));
					manual.setManualLocation(rs.getString("manual_Location"));
					manual.setDescription(rs.getString("manual_description"));
					manual.setLastUpdateDate(rs.getString("manual_last_update_date"));
					ArrayList<Manual>manuals=callTreeEntry.getManuals();
					manuals.add(manual);
					callTreeEntry.setManuals(manuals);
				}
				result.put(callTreeEntry.getCallTreeEntryId(), callTreeEntry);
			}
			or.success=true;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			releaseResource(rs, stmt);
		}
		or.returnObj=result.values().toArray(new CallTreeEntry[0]);
		return or;
	}	
	@Override
	public OperationResult getCallTreeEntryByCallTreeId(int callTreeId)throws Exception {
		ArrayList<CallTreeEntry> result=new ArrayList<CallTreeEntry>();
		CallTreeEntry callTreeEntry;
		
		OperationResult or=new OperationResult();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		logger.debug("call tree Id="+callTreeId);
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
				callTreeEntry.setServiceLevel(rs.getInt("service_level"));
				callTreeEntry.setStatus(rs.getInt("status"));
				callTreeEntry.setSystemName(rs.getString("system_name"));
				callTreeEntry.setTimeToEscalate(rs.getString("time_to_escalate"));
				callTreeEntry.setTimeToStartProcedure(rs.getString("time_to_start_procedure"));
				callTreeEntry.setCallTreeEntryId(rs.getInt("callTreeEntry_id"));
				result.add(callTreeEntry);
			}
			or.success=true;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		} 
		finally 
		{
			releaseResource(rs, stmt);
		}
		or.returnObj=result.toArray(new CallTreeEntry[0]);
		return or;
	}
	@Override
	public OperationResult getManualsByCallTreeEntryId(int callTreeEntryId)throws Exception {
		ArrayList<Manual> result=new ArrayList<Manual>();
		Manual manual;
		
		OperationResult or=new OperationResult();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		try
		{
			sqlString ="select a.* from ";
			sqlString+="manual a inner join callTreeEntry_manual b ";
			sqlString+="on b.calltreeentry_id=? and a.manual_id=b.manual_id";
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1, callTreeEntryId);
			rs=stmt.executeQuery();
			while (rs.next()) {
				manual=new Manual();
				manual.setDescription(rs.getString("manual_description"));
				manual.setLastUpdateDate(rs.getString("manual_last_update_date"));
				manual.setManualId(rs.getInt("manual_id"));
				manual.setManualLocation(rs.getString("manual_location"));
				result.add(manual);
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
		or.returnObj=result.toArray(new Manual[0]);
		return or;
	}	
	@Override
	public boolean updateCallTree(CallTree callTree) throws Exception {
		boolean updateSuccess=false;
		ResultSet rs = null;
		PreparedStatement stmt = null;
		try
		{
			sqlString ="update calltree ";
			sqlString+="set calltree_detail=? where calltree_id = ?";
			logger.debug("update a call tree.");
			logger.debug(objectMapper.writeValueAsString(callTree));
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setString(1,callTree.getCallTreeDetail());
			stmt.setInt(2,callTree.getCallTreeId());
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
	@Override
	public boolean updateCallTreeEntry(CallTreeEntry callTreeEntry) throws Exception {
		boolean updateSuccess=false;
		PreparedStatement stmt = null;
		ResultSet rs = null;
		try
		{
			sqlString ="update callTreeEntry ";
			sqlString+="set division = ?,system_name=?,service_level=?,mission_critical=?,time_to_start_procedure=?,";
			sqlString+="time_to_escalate=?,log_recipients=?,status=?,version=?,location=? ";
			sqlString+="where callTreeEntry_id=?";
			
			logger.debug("update a call tree entry.");
			logger.debug(objectMapper.writeValueAsString(callTreeEntry));
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setString(1,callTreeEntry.getDivision());
			stmt.setString(2,callTreeEntry.getSystemName());
			stmt.setInt(3,callTreeEntry.getServiceLevel());
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
	@Override
	public boolean updateCallTreeEntryManualsMapping(CallTreeEntry callTreeEntry) throws Exception {
		ResultSet rs = null;
		PreparedStatement stmt = null;
		boolean updateSuccess=false;
		logger.debug("update operation manual for call entry Id.="+callTreeEntry.getCallTreeEntryId());
		
		try 
		{
			dbConn.setAutoCommit(false);
			
			sqlString  ="delete from manual ";
			sqlString+="where  manual_id in (select manual_id from callTreeEntry_manual where calltreeEntry_id=?)";
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1, callTreeEntry.getCallTreeEntryId());
			stmt.executeUpdate();
			stmt.close();

			sqlString  ="delete from callTreeEntry_manual where calltreeEntry_id=?";
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1, callTreeEntry.getCallTreeEntryId());
			stmt.executeUpdate();
			stmt.close();
			
			for (Manual manual : callTreeEntry.getManuals()) {
				int manualId=this.addManual(manual);
				this.addCallTreeEntryManualMapping(callTreeEntry.getCallTreeEntryId(), manualId); 
			}
			
			dbConn.commit();
			updateSuccess=true;
		} 
		catch (Exception e) {
			dbConn.rollback();
			e.printStackTrace();
			callTreeEntry=null;
		}
		finally 
		{
			dbConn.setAutoCommit(true);
			releaseResource(rs, stmt);
		}		
		return updateSuccess;
	}
//----------------------------------------------------------------------------------------------------------------------	
	private void addCallTreeEntryManualMapping(int  callTreeEntryId,int manualId) throws Exception{
		ResultSet rs = null;
		PreparedStatement stmt = null;
		try {
			sqlString ="insert into callTreeEntry_manual ";
			sqlString+="(callTreeEntry_id,manual_id)";
			sqlString+="values(?,?)";
			
			stmt=dbConn.prepareStatement(sqlString);
			stmt.setInt(1,callTreeEntryId);
			stmt.setInt(2,manualId);
			stmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally 
		{
			releaseResource(rs, stmt);
		}
	}
	private int addManual(Manual manual) throws Exception {
		int manualId=-1;
		ResultSet rs = null;
		PreparedStatement stmt = null;
		sqlString ="insert into manual ";
		sqlString+="(manual_location,manual_description,manual_last_update_date)";
		sqlString+="values (?,?,?)";
		
		try {
			stmt=dbConn.prepareStatement(sqlString,Statement.RETURN_GENERATED_KEYS);
			stmt.setString(1, manual.getManualLocation());
			stmt.setString(2, manual.getDescription());
			stmt.setString(3, manual.getLastUpdateDate());
			stmt.executeUpdate();
			rs = stmt.getGeneratedKeys();
			rs.next();
			manualId=rs.getInt(1);	
		}catch (Exception e) {
			e.printStackTrace();
		}
		finally 
		{
			releaseResource(rs, stmt);
		}
		return manualId;
	}
//----------------------------------------------------------------------------------------------------------------------	
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
}
