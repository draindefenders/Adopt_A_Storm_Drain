package com.adoptastormdrain.Map.crud.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.adoptastormdrain.Map.crud.StormdrainDAORepository;
import com.adoptastormdrain.Map.crud.entities.StormDrain;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class StormDrainRepositoryImpl implements StormDrainRepository
{
    @Autowired
    private StormdrainDAORepository stormdrainDAORepository;

    //use this to build queries if needed
    @PersistenceContext
    private EntityManager entityManager;

    public StormDrain save(StormDrain stormdrain)
    {
        return stormdrainDAORepository.save(stormdrain);
    }

    @Override
    public Optional<StormDrain> findById(Long id)
    {
        return stormdrainDAORepository.findById(id);
    }

    @Override
    public Iterable<StormDrain> findAll() {
        return stormdrainDAORepository.findAll();
    }

}