package com.adoptastormdrain.Map.crud;

import com.adoptastormdrain.Map.crud.entities.StormDrain;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StormdrainDAORepository extends PagingAndSortingRepository<StormDrain, Long>
{
}