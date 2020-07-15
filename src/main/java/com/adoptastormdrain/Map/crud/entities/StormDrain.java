package com.adoptastormdrain.Map.crud.entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "storm_drain")
public class StormDrain extends DAOBase implements Serializable
{
    private static final Long serialVersionUID = 1L;

    private Long id;
    private Long latitude;
    private Long longitude;
    private String createdBy;
    private String drainName;
    private String drainStatus;

    public StormDrain()
    {
        super();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    @Column(name = "latitude")
    public Long getLatitude()
    {
        return latitude;
    }

    public void setLatitude(Long latitude)
    {
        this.latitude = latitude;
    }

    @Column(name = "longitude")
    public Long getLongitude()
    {
        return longitude;
    }

    public void setLongitude(Long longitude)
    {
        this.longitude = longitude;
    }

    public String getCreatedBy()
    {
        return createdBy;
    }

    public void setCreatedBy(String createdBy)
    {
        this.createdBy = createdBy;
    }

    public String getDrainName()
    {
        return drainName;
    }

    public void setDrainName(String drainName)
    {
        this.drainName = drainName;
    }

    public String getDrainStatus()
    {
        return drainStatus;
    }

    public void setDrainStatus(String drainStatus)
    {
        this.drainStatus = drainStatus;
    }
}