import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../models/property.model';
import { PropertyServiceService } from '../property-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  prop : Property[];
  r:Router;
  location:string;
public submitted : boolean;
  constructor( private router : Router,private service : PropertyServiceService) { 
   
  }

  ngOnInit() {
  }

  search(){
    console.log("hooo");
    this.service.searchProp(this.location).subscribe(response=>this.prop=response);
    if(this.location!=null){
      this.submitted = true;
   }
   
   }

}
