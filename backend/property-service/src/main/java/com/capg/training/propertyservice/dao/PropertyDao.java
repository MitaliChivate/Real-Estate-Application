package com.capg.training.propertyservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capg.training.propertyservice.entity.Property;

//Repository for Property Model
public interface PropertyDao extends JpaRepository<Property, Integer>{

}
