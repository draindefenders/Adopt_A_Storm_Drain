package com.adoptastormdrain.Map.util;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.servlet.http.HttpServletRequest;
import java.util.Collection;
import java.util.Enumeration;

public class RestControllerUtil {

    public static ResponseEntity<?> getResponse(HttpStatus status){
        return new ResponseEntity<>("", new HttpHeaders(), status);
    }

    public static ResponseEntity<?> getResponse(Object object, HttpStatus status){
        return new ResponseEntity<>(object, new HttpHeaders(), status);
    }

    public static void validateRequestParams(HttpServletRequest request, Collection<String> validParams) throws Exception {
        if (request != null && request.getParameterNames() != null){
            Enumeration<String> parameterNames = request.getParameterNames();
            while(parameterNames.hasMoreElements()){
                String name = parameterNames.nextElement();
                if (! validParams.contains(name)){
                    throw new Exception("Unknown request query parameter" + name);
                }
            }
        }
    }
}
