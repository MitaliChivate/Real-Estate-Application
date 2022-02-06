import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyServiceService } from '../property-service.service';
import { Router } from '@angular/router';
import { track } from '../models/track.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  prop : Property[];
  location: string;
  customerId1:number;
  track : track[];
  
  constructor(private service : PropertyServiceService,private route:Router) { }

  onSubmit() {

    // this. customerId1=parseInt(sessionStorage.getItem("object"));
 }
 
  ngOnInit(){
    this. customerId1=parseInt(sessionStorage.getItem("customerId"));
  }

  searchProp(){
    this.service.searchProp(this.location).subscribe(response=>this.prop=response);
    console.log(this.location)
    console.log(this.customerId1)

    this.service.Track(this.location,this.customerId1).subscribe(response=>this.track=response);
  }

  getUserDetails(){
    this.route.navigate(['userdetails']);
  }

  goback(){

    this.route.navigate(['postproperty']);

  }

}
