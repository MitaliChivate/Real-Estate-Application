package com.capg.training.propertyservice.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//Class that represents User Search Track 
@Entity
@Table(name = "track")
public class track {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "trackId")
	private Integer trackId;

	@Column(name = "visitorId")
	private Integer visitorId;

	@Column(name = "propertyId")
	private Integer propertyId;

	@Column(name = "location")
	private String location;

	public Integer getVisitorId() {
		return visitorId;
	}

	public void setVisitorId(Integer visitorId) {
		this.visitorId = visitorId;
	}

	public Integer getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(Integer propertyId) {
		this.propertyId = propertyId;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public track(Integer visitorId, Integer propertyId, String location) {
		super();
		this.visitorId = visitorId;
		this.propertyId = propertyId;
		this.location = location;
	}

	public track() {
		// TODO Auto-generated constructor stub
	}

}
