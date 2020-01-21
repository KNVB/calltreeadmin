package com.calltreeinfo.restful;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.POST;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.calltreeinfo.CallTreeInfo;
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
}
