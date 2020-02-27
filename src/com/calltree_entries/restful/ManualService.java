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
import com.calltree_entries.CallTreeEntry;
import com.calltree_entries.Manual;
import com.calltree_entries.util.DbOp;
import com.fasterxml.jackson.databind.ObjectMapper;

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
	
	@Path("/updateCallTreeEntryManualsMapping")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateCallTreeEntryManualsMapping (CallTreeEntry callTreeEntry) throws Exception {
		logger.debug("updateCallTreeEntryManualsMapping is called");
		 boolean updateResult=false;
		 DbOp dbo=null;
		 try 
		 {
			dbo=new DbOp();
			updateResult=dbo.updateCallTreeEntryManualsMapping(callTreeEntry);
		 }	
		 catch (Exception err)
		 {
			 err.printStackTrace();
		 }
		 finally
		 {
			 dbo.close();
		 }
		return Response.ok(updateResult).build();
	}
	
	/*
	 * To the following code working, a lot of work need to do.
	 * Please refer the following web page for detail:
	 * 
	 * https://stackoverflow.com/questions/39635108/java-jersey-creating-own-injection-resolver-with-paraminjectionresolver-stra/39636141#39636141
	 * https://stackoverflow.com/questions/45625925/what-exactly-is-the-resourceconfig-class-in-jersey-2
	 */
	/*
	@Path("/updateManuals")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateManuals (@FormParam("callTreeEntryId") int callTreeEntryId,@FormParam("manuals") Manual manuals) throws Exception {
		boolean updateResult=false;
		logger.debug("updateManuals is called");
		DbOp dbo=new DbOp();
		//boolean updateResult=dbo.updateManuals(callTreeEntryId,manuals);
		dbo.close();
		return Response.ok(updateResult).build();
	}
	*/
}
