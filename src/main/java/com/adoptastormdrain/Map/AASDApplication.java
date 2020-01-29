package com.adoptastormdrain.Map;

import com.adoptastormdrain.Map.properties.AASDProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AASDApplication {

    @Autowired
    private AASDProperties properties;

	public static void main(String[] args) {
		SpringApplication.run(AASDApplication.class, args);
	}

}
