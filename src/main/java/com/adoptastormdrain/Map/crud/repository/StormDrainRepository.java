package com.adoptastormdrain.Map.crud.repository;

import com.adoptastormdrain.Map.crud.entities.StormDrain;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StormDrainRepository
{
    StormDrain save(StormDrain stormdrain);

    Optional<StormDrain> findById(Long id);

    Iterable<StormDrain> findAll();
}
