import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyServiceService } from '../property-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  pro : Property = new Property();
  customerId:string;

  a=parseInt(sessionStorage.getItem("object"));
  constructor(private service : PropertyServiceService,private route : Router) {
 }

  ngOnInit(): void {

    this.pro = this.service.updateProp;

  }

 saveProp() { // call on submit of add form
    // delegating call to service
    //pass customer id 
    this.service.editProp(this.pro).subscribe(data => {} );
    // this.pro = new Property();
    window.alert("Property Updated SuccessFully");

  }

}
