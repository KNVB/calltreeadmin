package com.calltree_entries.restful;
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

import com.calltree_entries.CallTreeEntry;
import com.calltree_entries.util.DbOp;

@Path("/CallTreeEntry")
public class CallTreeEntryService {
	private static final Logger logger = LogManager.getLogger(Class.class.getSimpleName());
	
	@Path("/getAllCallTreeEntry")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllCallTreeEntry() throws Exception {
		logger.debug("getAllCallTreeEntry is called");
		DbOp dbo=new DbOp();
		CallTreeEntry[] result= dbo.getAllCallTreeEntry();
		dbo.close();
		return Response.ok(result).build();
	}
	
	@Path("/addCallTreeEntry")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addCallTreeEntry (CallTreeEntry callTreeEntry) throws Exception {
		logger.debug("addCallTreeEntry is called");
		DbOp dbo=new DbOp();
		CallTreeEntry resultCallTreeEntry=dbo.addCallTreeEntry(callTreeEntry);
		dbo.close();
		return Response.ok(resultCallTreeEntry).build();
	}
	@Path("/updateCallTreeEntry")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateCallTreeEntry (CallTreeEntry callTreeEntry) throws Exception {
		logger.debug("updateCallTreeEntry is called");
		DbOp dbo=new DbOp();
		boolean updateResult=dbo.updateCallTreeEntry(callTreeEntry);
		dbo.close();
		return Response.ok(updateResult).build();
	}
	
	@Path("/enableCallTreeEntry")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response enableCallTreeEntry (@FormParam("callTreeEntryId") int callTreeEntryId) throws Exception {
		logger.debug("enableCallTreeEntry is called");
		DbOp dbo=new DbOp();
		boolean updateResult=dbo.enableCallTreeEntry(callTreeEntryId);
		dbo.close();
		return Response.ok(updateResult).build();
	}
	@Path("/disableCallTreeEntry")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response disableCallTreeEntry(@FormParam("callTreeEntryId") int callTreeEntryId) throws Exception {
		logger.debug("disableCallTreeEntry is called");
		DbOp dbo=new DbOp();
		boolean updateResult=dbo.disableCallTreeEntry(callTreeEntryId);
		dbo.close();
		return Response.ok(updateResult).build();
	}
}
