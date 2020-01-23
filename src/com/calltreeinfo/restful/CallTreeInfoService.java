package com.calltreeinfo.restful;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.POST;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.calltreeinfo.CallTree;
import com.calltreeinfo.CallTreeInfo;
import com.calltreeinfo.SharedCallTree;
import com.calltreeinfo.util.DbOp;

@Path("/CallTreeInfo")
public class CallTreeInfoService {
	private static final Logger logger = LogManager.getLogger(Class.class.getSimpleName());
	
	@Path("/getAllCallTreeInfo")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllCallTreeInfo() throws Exception {
		logger.debug("getAllCallTree is called");
		DbOp dbo=new DbOp();
		CallTreeInfo[] result= dbo.getAllCallTreeInfo();
		dbo.close();
		return Response.ok(result).build();
	}
	@Path("/getCallTreeByDivision")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSharedCallTree() throws Exception {
		logger.debug("getSharedCallTree is called");
		DbOp dbo=new DbOp();
		Map<String,SharedCallTree[]> result= dbo.getSharedCallTree();
		dbo.close();
		return Response.ok(result).build();
	}
	@Path("/addCallTreeInfo")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addCallTreeInfo (CallTreeInfo callTreeInfo) throws Exception {
		logger.debug("addCallTreeInfo is called");
		DbOp dbo=new DbOp();
		boolean updateResult=dbo.addCallTreeInfo(callTreeInfo);
		dbo.close();
		return Response.ok(updateResult).build();
	}
	@Path("/updateCallTreeInfo")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateCallTreeInfo (CallTreeInfo callTreeInfo) throws Exception {
		logger.debug("addCallTreeInfo is called");
		DbOp dbo=new DbOp();
		boolean updateResult=dbo.updateCallTreeInfo(callTreeInfo);
		dbo.close();
		return Response.ok(updateResult).build();
	}
	
	@Path("/enableCallTreeInfo")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response enableCallTreeInfo (@FormParam("callTreeInfoId") int callTreeInfoId) throws Exception {
		logger.debug("enableCallTreeInfo is called");
		DbOp dbo=new DbOp();
		boolean updateResult=dbo.enableCallTreeInfo(callTreeInfoId);
		dbo.close();
		return Response.ok(updateResult).build();
	}
	@Path("/disableCallTreeInfo")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response disableCallTreeInfo(@FormParam("callTreeInfoId") int callTreeInfoId) throws Exception {
		logger.debug("disableCallTreeInfo is called");
		DbOp dbo=new DbOp();
		boolean updateResult=dbo.disableCallTreeInfo(callTreeInfoId);
		dbo.close();
		return Response.ok(updateResult).build();
	}
}
