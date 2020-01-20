package com.calltree.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.calltree.CallTree;
import com.calltree.CallTreeInfo;
import com.calltree.Division;

import com.calltree.Utility;
import com.fasterxml.jackson.core.JsonProcessingException;
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
		// TODO Auto-generated method stub
		return null;
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
	public boolean saveCallTreeInfo(CallTreeInfo callTreeInfo) throws Exception {
		// TODO Auto-generated method stub
		return false;
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
