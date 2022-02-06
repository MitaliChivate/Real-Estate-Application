package com.capg.training.propertyservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//A class that represents Property Entity
@Entity
@Table(name = "PropertyDetails")
public class Property {

	@Column(name = "Property_Id")
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer propertyId;
	
	@Column(name = "Customer_Id")
	private Integer customerId;
	
	@Column(name = "Property_Type")
	private String propertyType;
	
	@Column(name = "Property_Category")
	private String propertyCategory;
	
	@Column(name = "Location")
	private String location;
	
	@Column(name = "Address")
	private String address;
	
	@Column(name = "Price")
	private Integer price;
	
	@Column(name = "Contact")
	private String contact;
	
	
	public Property() {
		
	}


	public Property(Integer customerId, String propertyType, String propertyCategory, String location, String address,
			Integer price, String contact) {
		super();
		this.customerId = customerId;
		this.propertyType = propertyType;
		this.propertyCategory = propertyCategory;
		this.location = location;
		this.address = address;
		this.price = price;
		this.contact = contact;
	}


	public Integer getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(Integer propertyId) {
		this.propertyId = propertyId;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public String getContact() {
		return contact;
	}


	public void setContact(String contact) {
		this.contact = contact;
	}


	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public String getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}

	public String getPropertyCategory() {
		return propertyCategory;
	}

	public void setPropertyCategory(String propertyCategory) {
		this.propertyCategory = propertyCategory;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Property [propertyId=" + propertyId + ", customerId=" + customerId + ", propertyType=" + propertyType
				+ ", propertyCategory=" + propertyCategory + ", location=" + location + ", address=" + address
				+ ", price=" + price + "]";
	}
	
}
