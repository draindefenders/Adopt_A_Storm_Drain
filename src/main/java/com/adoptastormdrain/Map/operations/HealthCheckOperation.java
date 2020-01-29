package com.adoptastormdrain.Map.operations;

import com.adoptastormdrain.Map.core.HealthCheck;

public class HealthCheckOperation {

    public HealthCheck healthCheck(){
        HealthCheck healthCheck = new HealthCheck(
                getDatabaseStatus()
        );
        return healthCheck;
    }

    public String getDatabaseStatus(){
        //TODO: update the status method to call an actual repository findAll() to check the status
        return "OK";
    }
}
