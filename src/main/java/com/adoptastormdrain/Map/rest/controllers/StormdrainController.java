package com.adoptastormdrain.Map.rest.controllers;

import com.adoptastormdrain.Map.crud.entities.StormDrain;
import com.adoptastormdrain.Map.crud.repository.StormDrainRepository;
import com.adoptastormdrain.Map.util.RestControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stormdrains")
public class StormdrainController {

    @Autowired
    private StormDrainRepository stormDrainRepository;

    @GetMapping
    public ResponseEntity<?> getAllStormDrains()
    {
        Iterable<StormDrain> stormDrains = stormDrainRepository.findAll();
        return RestControllerUtil.getResponse(stormDrains, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSingleStormDrain(@PathVariable("id") long id)
    {
        StormDrain stormDrain = stormDrainRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Stormdrain Id:" + id));

        return RestControllerUtil.getResponse(stormDrain, HttpStatus.OK);
    }

    @PostMapping("/{id}")
    public ResponseEntity<?> updateStormDrain(@PathVariable("id") long id,
                                              @PathVariable("drainName") String drainName,
                                              @PathVariable("email") String email,
                                              @PathVariable("drainStatus") String drainStatus)
    {
        StormDrain stormDrain = stormDrainRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Stormdrain Id:" + id));

        stormDrain.setCreatedBy(email);
        stormDrain.setDrainStatus(drainStatus);
        stormDrain.setDrainName(drainName);

        StormDrain updatedStormDrain = stormDrainRepository.save(stormDrain);

        return RestControllerUtil.getResponse(updatedStormDrain, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> createStormDrain(@RequestParam("latitude") Double latitude,
                                              @RequestParam("longitude") Double longitude,
                                              @RequestParam("drainName") String drainName,
                                              @RequestParam("email") String email,
                                              @RequestParam("drainStatus") String drainStatus)
    {
        StormDrain stormDrain = new StormDrain();
        stormDrain.setLatitude(latitude);
        stormDrain.setLongitude(longitude);
        stormDrain.setCreatedBy(email);
        stormDrain.setDrainStatus(drainStatus);
        stormDrain.setDrainName(drainName);

        StormDrain updatedStormDrain = stormDrainRepository.save(stormDrain);

        return RestControllerUtil.getResponse(HttpStatus.ACCEPTED);
    }
}
