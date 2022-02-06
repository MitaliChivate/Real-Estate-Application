package com.capg.training.propertyservice.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.capg.training.propertyservice.entity.track;

//Repository for Maintaining the user search record
public interface TrackDao extends JpaRepository<track, Integer>{
	public List<track> findByVisitorId(Integer visitorId);
	
}
