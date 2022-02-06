package com.capg.training.propertyservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.training.propertyservice.dao.PropertyDao;
import com.capg.training.propertyservice.entity.Property;

@Service
public class PropertyService {

	@Autowired
	PropertyDao propertyDao;

	public List<Property> getAllProperty() {
		return this.propertyDao.findAll();
	}

	public Property addProperty(Property prop) {
		return this.propertyDao.save(prop);
	}

	public Property updateProperty(Property prop) {
		return this.propertyDao.save(prop);
	}

	public void deletePropertyById(int id) {
		this.propertyDao.deleteById(id);
	}

	public void deleteAllProperty() {
		this.propertyDao.deleteAll();
	}

	public Optional<Property> getPropertyById(int id) {
		return this.propertyDao.findById(id);
	}

}
