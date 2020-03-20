package com.calltree.services;
//import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.glassfish.jersey.server.ResourceConfig;

import com.calltree.LoginResult;
import com.calltree.util.Authenticator;

@Path("/AuthService")
public class AuthService {
	private static final Logger logger = LogManager.getLogger(Class.class.getSimpleName());
	public AuthService() {
		// TODO Auto-generated constructor stub
	}
	@Path("/doLogin")
	@POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response doLogin(@FormParam("userName") String userName,
    						@FormParam("password") String password,
    						@Context HttpServletRequest request,
    						@Context ResourceConfig config)
    {
		String adminUserName=(String)config.getProperty("adminUserName");
		String adminPassword=(String)config.getProperty("adminPassword");
		LoginResult loginResult=new LoginResult();
		userName=((userName==null)?"":userName);
		password=((password==null)?"":password);
		loginResult.setResultCode(-1);
		  
		logger.debug("Request IP address="+request.getRemoteAddr());
		logger.debug("adminUserName="+adminUserName);
		logger.debug("adminPassword="+adminPassword);
		if (userName.equals(adminUserName) && password.equals(adminPassword))
		{
			//Date expiresAt = new Date(System.currentTimeMillis()+ 24L * 3600L * 1000L);
			//Date expiresAt = new Date(System.currentTimeMillis()+10000L);
			String jwt = Authenticator.getInstance().getJWT(request.getRemoteAddr()); 
			
			loginResult.setResultCode(0);
			loginResult.setAccessToken(jwt);
		}
		else
		{
			loginResult.setResultCode(-2);
		}
		logger.debug("loginResult="+loginResult.getResultCode());
		return Response.ok(loginResult).build();
    }
}
