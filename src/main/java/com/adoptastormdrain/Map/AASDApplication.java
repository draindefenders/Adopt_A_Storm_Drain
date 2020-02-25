package com.adoptastormdrain.Map;

import com.adoptastormdrain.Map.properties.AASDProperties;
import com.adoptastormdrain.Map.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class AASDApplication {

    @Autowired
    private AASDProperties properties;

	public static void main(String[] args) {
		SpringApplication.run(AASDApplication.class, args);
	}

}
