package com.calltree.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.calltree.util.Authenticator;

/**
 * Servlet Filter implementation class RestfulServicesFilter
 */
@WebFilter("/RestfulServices/*")
public class RestfulServicesFilter implements Filter {
	FilterConfig filterConfig;
	private static final Logger logger = LogManager.getLogger(Class.class.getSimpleName());
    /**
     * Default constructor. 
     */
    public RestfulServicesFilter() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		this.filterConfig = null;
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		String requestURI,restfulServicesURI,authServiceURI;
		
		logger.debug("RestfulServicesFilter is here.");	
		// pass the request along the filter chain
		HttpServletRequest httpServletRequest=(HttpServletRequest)request;
		ServletContext context =httpServletRequest.getServletContext();
		FilterRegistration fr= context.getFilterRegistration(this.getClass().getName());
		restfulServicesURI=httpServletRequest.getContextPath()+fr.getUrlPatternMappings().toArray(new String[0])[0];
		restfulServicesURI=restfulServicesURI.replaceAll("\\*","");
		authServiceURI= restfulServicesURI+"AuthService/";
		requestURI = httpServletRequest.getRequestURI();
		logger.debug("requestURI="+requestURI+",is authServiceURI="+requestURI.startsWith(authServiceURI));
		if (requestURI.startsWith(authServiceURI)) {
			chain.doFilter(request, response);
		} else {
			logger.debug("Request Header="+httpServletRequest.getHeader("Authorization"));
			String token=httpServletRequest.getHeader("Authorization").replaceAll("Bearer ", "");
			boolean isAuthenticated=Authenticator.getInstance().isAuthenticated(token, request.getRemoteAddr());
		}
		 
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		this.filterConfig=fConfig;
	}

}
