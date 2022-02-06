import { Component, OnInit, ViewChild } from '@angular/core';
import { Property } from '../models/property.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyServiceService } from '../property-service.service';
import { NgForm } from '@angular/forms';
import { ImageserviceService } from '../iservices/imageservice.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  pro : Property;
  customerId:string;
  propertyId:number;
  propertyCategory : string[];
  propertyType : string[];
  constructor(private service : PropertyServiceService,private route : Router,private service1:ImageserviceService) {
    this.pro = new Property();
    this.propertyCategory = ["Sale","Rent"];
    this.propertyType = ["Flat","Banglow","Ville"];
   }

  ngOnInit(): void {
  }
  
  saveProp() { // call on submit of add form
    // delegating call to service
    this.pro.customerId=parseInt(sessionStorage.getItem("customerId"));//pass customer id 
    console.log(this.customerId)
    this.service.addProp(this.pro).
    subscribe(data => {
      sessionStorage.setItem("propertyId",String(data.propertyId));
    
    }
    );
    console.log(this.propertyId)
    this.route.navigate(['image']);
    window.alert("Property Added SuccessFully");
  }
}