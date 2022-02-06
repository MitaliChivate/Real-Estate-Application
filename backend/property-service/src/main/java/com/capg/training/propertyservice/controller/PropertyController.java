package com.capg.training.propertyservice.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.capg.training.propertyservice.dao.PropertyDao;
import com.capg.training.propertyservice.dao.TrackDao;
import com.capg.training.propertyservice.entity.Property;
import com.capg.training.propertyservice.entity.track;
import com.capg.training.propertyservice.service.PropertyService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/PropertyCtrl")

public class PropertyController {

	@Autowired
	PropertyService service;
	@Autowired
	PropertyDao dao;
	@Autowired
	TrackDao trackDao;

	//Method for adding New Property
	@PostMapping(value = "/addproperty")
	public Property addProperty(@RequestBody Property prop) {
		return this.service.addProperty(prop);
	}

	//Method for viewing list of all Properties
	@GetMapping(value = "/all")
	public List<Property> getAllProperty() {
		return this.service.getAllProperty();
	}

	//Method for Updating the Property Details
	@PutMapping(value = "/updateproperty")
	public Property updateProperty(@RequestBody Property prop) {
		return this.service.updateProperty(prop);
	}
	
	//Method for deleting the Property by UserID
	@DeleteMapping(value = "/Delete/{id}")
	public void deleteProperty(@PathVariable int id) {
		this.service.deletePropertyById(id);
	}

	
	//Method for Searching the Property by Location entered by the user
	@RequestMapping(value = "/searchLocation/{location}", method = RequestMethod.GET)
	public List<Property> searchproperty(@PathVariable(name = "location") String location) {

		List<Property> propertyDetails = dao.findAll();
		List<Property> p = new ArrayList<>();

		Iterator<Property> iterator = propertyDetails.iterator();

		while (iterator.hasNext()) {
			Property prop = iterator.next();
			if (prop.getLocation().equals(location)) {
				p.add(prop);
			}
		}
		return p;
	}

	
	//Method for search the User by ID to View the User Profile
	@RequestMapping(value = "/searchCustomer/{id}", method = RequestMethod.GET)
	public List<Property> searchproperty(@PathVariable(name = "id") Integer id) {
		List<Property> propertyDetails = dao.findAll();
		List<Property> p = new ArrayList<>();

		Iterator<Property> iterator = propertyDetails.iterator();

		while (iterator.hasNext()) {
			Property prop = iterator.next();
			if (prop.getCustomerId() == id) {
				p.add(prop);
			}

		}
		return p;

	}

	//Searching by Property ID
	@RequestMapping(value = "/searchByPropId/{id1}", method = RequestMethod.GET)
	public List<Property> searchByPropId(@PathVariable(name = "id1") Integer id1) {
		List<Property> propertyDetails = dao.findAll();
		List<Property> p = new ArrayList<>();

		Iterator<Property> iterator = propertyDetails.iterator();

		while (iterator.hasNext()) {
			Property prop = iterator.next();
			if (prop.getPropertyId() == id1) {

				p.add(prop);
			}

		}
		return p;

	}

	//Method for keeping the track of Property search
	@RequestMapping(value = "/track/{location}/{custId}", method = RequestMethod.GET)
	public List<track> trackId(@PathVariable(name = "location") String location,
			@PathVariable(name = "custId") Integer custId) {

		List<Property> propertyDetails = dao.findAll();
		List<Property> p = new ArrayList<>();
		List<track> tracks = new ArrayList<>();
		Iterator<Property> iterator = propertyDetails.iterator();

		while (iterator.hasNext()) {
			Property prop = iterator.next();
			if (prop.getLocation().equals(location)) {
				track track1 = new track();
				track1.setVisitorId(custId);
				track1.setPropertyId(prop.getPropertyId());
				track1.setLocation(prop.getLocation());
				trackDao.save(track1);
				tracks.add(track1);
			}
		}
		return tracks;
	}
	
	//Method for tracking the User Search
	@GetMapping(value = "/track1")
	public List<track> trackPorp() {
		return this.trackDao.findAll();
	}

	@GetMapping(value = "/findTrackById/{id}")
	public List<track> trackPorpById(@PathVariable Integer id) {
		// return this.service.getAllProperty();
		return this.trackDao.findByVisitorId(id);
	}

	
	@DeleteMapping(value = "/all")
	public void deleteAllProperty() {
		this.service.deleteAllProperty();
		;
	}

	@GetMapping(value = "/{id}")
	public Optional<Property> getProperty(@PathVariable int id) {
		return this.service.getPropertyById(id);
	}

}
