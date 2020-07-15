package com.adoptastormdrain.Map.operations;

import com.adoptastormdrain.Map.crud.entities.StormDrain;
import com.adoptastormdrain.Map.crud.repository.StormDrainRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class StormDrainOperations {

    @Autowired
    private StormDrainRepository stormDrainRepository;

    public Iterable<StormDrain> getAllStormDrains(){
        return stormDrainRepository.findAll();
    }

    public void getStormDrain(long Id){
        stormDrainRepository.findById(Id);
    }

    public void saveStormDrain(StormDrain stormDrain){
        stormDrainRepository.save(stormDrain);
    }

    public void saveAllStormDrains(List<StormDrain> stormDrains){
        stormDrains.forEach(stormDrain -> saveStormDrain(stormDrain));
    }


}
