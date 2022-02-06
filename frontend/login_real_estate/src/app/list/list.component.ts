import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyServiceService } from '../property-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  prop : Property[];
  customerId:number;

  constructor(private service : PropertyServiceService,private route : Router) { }

  ngOnInit(): void {
    this.service.fetchAll().subscribe(data => {this.prop=data})
  }

  remove(propertyId: number){
    this.service.deleteProp(propertyId).subscribe(
      () => this.fetchAll()
    );
  }

  fetchAll(){
    this.service.fetchAll().subscribe(response=>{
      this.prop = response;
    })
  }

  updateProp(a:Property){
    // sessionStorage.setItem("object", String(a));
    this.service.updateProp=a;
    this.route.navigate(['delete']);
  }

  goback(){
    this.route.navigate(['admin']);
  }
}
