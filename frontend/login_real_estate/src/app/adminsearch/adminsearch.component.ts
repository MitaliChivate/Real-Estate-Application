import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyServiceService } from '../property-service.service';
import { Router } from '@angular/router';
import { track } from '../models/track.model';

@Component({
  selector: 'app-adminsearch',
  templateUrl: './adminsearch.component.html',
  styleUrls: ['./adminsearch.component.css']
})
export class AdminsearchComponent implements OnInit {

  prop : Property[];
  location: string;
  customerId1:number;
  track : track[];
  constructor(private service : PropertyServiceService,private route:Router) { }

  ngOnInit() {
    this. customerId1=parseInt(sessionStorage.getItem("customerId"));
  }

  searchProp(){
    this.service.searchProp(this.location).subscribe(response=>this.prop=response);
    console.log(this.location)
    console.log(this.customerId1)

    this.service.Track(this.location,this.customerId1).subscribe(response=>this.track=response);
  }

  

  goback(){

    this.route.navigate(['admin']);

  }


}
