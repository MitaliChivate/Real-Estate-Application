import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { PropertyServiceService } from '../property-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user : User[];
  constructor(private service : PropertyServiceService,private route:Router) { }

  ngOnInit() {
  }



  goback(){
    this.route.navigate(['search']);
  }
}
