package com.calltree.util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

public class Authenticator {
	private static final Logger logger = LogManager.getLogger(Class.class.getSimpleName());
	private static Authenticator instance = null;
    private  Authenticator(){}
    public static Authenticator getInstance() {
        if (instance == null){
            synchronized(Authenticator.class){
                if(instance == null) {
                     instance = new Authenticator();
                }
            }
        }
        return instance;
    }
    public String getJWT(String remoteIPAddress) {
    	String jwt = JWT.create()
				.withIssuer("HKO")
				.withClaim("isVip", "深水埗")
                .withClaim("isAuthenticated", true)
                //.withExpiresAt(expiresAt)
                // 使用了HMAC256加密算法。
                // mysecret是用来加密数字签名的密钥。
                .sign(Algorithm.HMAC256(remoteIPAddress));
    	return jwt;
    }
    public boolean isAuthenticated(String token,String remoteIPAddress) {
    	boolean result=true;
    	try {
    	    Algorithm algorithm = Algorithm.HMAC256(remoteIPAddress);
    	    JWTVerifier verifier = JWT.require(algorithm)
    	        .withIssuer("HKO")
    	        .withClaim("isVip", "深水埗")
                .withClaim("isAuthenticated", true)
    	        .build(); //Reusable verifier instance
    	    DecodedJWT jwt = verifier.verify(token);
    	    logger.debug("DecodedJWT="+ jwt);
    	} catch (JWTVerificationException exception){
    		result=false;
    	}
    	return result;
    }
}
