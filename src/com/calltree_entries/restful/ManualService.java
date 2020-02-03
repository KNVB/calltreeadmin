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
import com.calltree_entries.Manual;
import com.calltree_entries.util.DbOp;

@Path("/ManualService")
public class ManualService {
	private static final Logger logger = LogManager.getLogger(Class.class.getSimpleName());
	
	@Path("/getManualsByCallTreeEntryId")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response getManualsByCallTreeEntryId(@FormParam("callTreeEntryId") int callTreeEntryId) throws Exception {
		logger.debug("getManualsByCallTreeEntryId is called,callTreeEntryId="+callTreeEntryId);
		DbOp dbo=new DbOp();
		Manual[] result= dbo.getManualsByCallTreeEntryId(callTreeEntryId);
		dbo.close();
		return Response.ok(result).build();
	}
	
	@Path("/updateManuals")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateManuals (@FormParam("callTreeEntryId") int callTreeEntryId,@FormParam("manuals") Manual[] manuals) throws Exception {
		logger.debug("updateManuals is called");
		DbOp dbo=new DbOp();
		boolean updateResult=dbo.updateManuals(callTreeEntryId,manuals);
		dbo.close();
		return Response.ok(updateResult).build();
	}
	
}
