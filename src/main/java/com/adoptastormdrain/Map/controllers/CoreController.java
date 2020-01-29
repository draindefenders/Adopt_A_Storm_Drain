package com.adoptastormdrain.Map.controllers;

import com.adoptastormdrain.Map.core.HealthCheck;
import com.adoptastormdrain.Map.operations.HealthCheckOperation;
import com.adoptastormdrain.Map.util.RestControllerUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoreController {

    @RequestMapping(method = RequestMethod.GET, value = "/healthcheck", produces = "application/hal+json")
    public ResponseEntity<?> healthcheck(){
        HealthCheckOperation operation = new HealthCheckOperation();
        HealthCheck healthCheck = operation.healthCheck();
        return RestControllerUtil.getResponse(healthCheck, HttpStatus.OK);
    }
}
