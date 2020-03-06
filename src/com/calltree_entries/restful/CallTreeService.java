package com.calltree_entries.restful;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.calltree_entries.CallTree;
import com.calltree_entries.OperationResult;
import com.calltree_entries.util.DbOp;

@Path("/CallTree")
public class CallTreeService {
	private static final Logger logger = LogManager.getLogger(Class.class.getSimpleName());
	
	@Path("/getCallTreeEntryByCallTreeId")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCallTreeEntryByCallTreeId(@FormParam("callTreeId") int callTreeId) throws Exception {
		logger.debug("getCallTreeEntryByCallTreeId is called,callTreeId="+callTreeId);
		DbOp dbo=new DbOp();
		OperationResult or= dbo.getCallTreeEntryByCallTreeId(callTreeId);
		dbo.close();
		return Response.ok(or).build();
	}
	@Path("/updateCallTree")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateCallTree (CallTree callTree) throws Exception {
		logger.debug("updateCallTree is called");
		DbOp dbo=new DbOp();
		boolean updateResult=dbo.updateCallTree(callTree);
		dbo.close();
		return Response.ok(updateResult).build();
	}
}
