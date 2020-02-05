package com.adoptastormdrain.Map.repository;

import com.adoptastormdrain.Map.entities.StormDrain;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StormDrainRepository extends CrudRepository<StormDrain, Long> {}
