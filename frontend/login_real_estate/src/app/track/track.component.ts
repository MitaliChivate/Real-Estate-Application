import { Component, OnInit } from '@angular/core';
import { track } from '../models/track.model';
import { PropertyServiceService } from '../property-service.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  track : track[];
  location: string;
  customerId1:number;
  visitorId:number;
  constructor(private service : PropertyServiceService) { }

  onSubmit() {
   
  }
  ngOnInit(){}

  trackProp(){
    this.service.custTrack(this.visitorId).subscribe(response => {console.log(response)});
    this.service.custTrack(this.visitorId).subscribe(response=>this.track=response);
  }

}
