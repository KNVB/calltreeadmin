package com.calltree.services;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.calltree.OperationResult;
import com.calltree.util.DbOp;
@Path("/DivisionService")
public class DivisionService {
	private static final Logger logger = LogManager.getLogger(Class.class.getSimpleName());
	
	@Path("/getActiveDivisionList")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getActiveDivisionNameList() throws Exception {
		logger.debug("getActiveDivisionList is called");
		DbOp dbo=new DbOp();
		OperationResult or=dbo.getActiveDivisionNameList();
		dbo.close();
		return Response.ok(or).build();
	}
}
