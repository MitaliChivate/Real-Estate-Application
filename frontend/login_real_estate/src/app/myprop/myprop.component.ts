import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyServiceService } from '../property-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprop',
  templateUrl: './myprop.component.html',
  styleUrls: ['./myprop.component.css']
})
export class MypropComponent implements OnInit {

  prop : Property[];
  customerId1:number;

  constructor(private service : PropertyServiceService,private route : Router) { }

  ngOnInit(): void {
    this.customerId1=this.service.customerId1;
    this.service.fetchByCustId(this.customerId1).subscribe(data => {this.prop=data})
  
  }
  remove(propertyId: number){
    this.service.deleteProp(propertyId).subscribe(
      () => this.fetchByCustId(this.customerId1)
    );
  }

 fetchByCustId(customerId1:number){
    this.service.fetchByCustId(customerId1).subscribe(response=>{
      this.prop = response;
    })
  }

  updateProp(a:Property){
    this.service.updateProp=a;
    this.route.navigate(['delete']);
  }

  goback(){

    this.route.navigate(['postproperty']);

  }

}
