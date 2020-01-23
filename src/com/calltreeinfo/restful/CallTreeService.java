package com.calltreeinfo.restful;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.calltreeinfo.CallTreeInfo;
import com.calltreeinfo.util.DbOp;

@Path("/CallTree")
public class CallTreeService {
	private static final Logger logger = LogManager.getLogger(Class.class.getSimpleName());
	
	@Path("getCallTreeInfoByCallTreeId")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCallTreeInfoByCallTreeId(@FormParam("callTreeId") int callTreeId) throws Exception {
		logger.debug("getCallTreeInfoByCallTreeId is called,callTreeId="+callTreeId);
		DbOp dbo=new DbOp();
		CallTreeInfo[] result= dbo.getCallTreeInfoByCallTreeId(callTreeId);
		dbo.close();
		return Response.ok(result).build();
	}
}
