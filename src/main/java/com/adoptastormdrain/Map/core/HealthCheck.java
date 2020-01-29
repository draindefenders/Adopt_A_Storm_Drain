package com.adoptastormdrain.Map.core;

import java.io.Serializable;

public class HealthCheck implements Serializable {

    private String database = null;

    public HealthCheck(){}

    public HealthCheck(String database){
        this.database = database;
    }

    public String getDatabase(){
        return this.database;
    }

    public void setDatabase(String database){
        this.database = database;
    }
}
