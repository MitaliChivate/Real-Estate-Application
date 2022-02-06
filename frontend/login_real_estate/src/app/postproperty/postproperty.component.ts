import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-postproperty',
  templateUrl: './postproperty.component.html',
  styleUrls: ['./postproperty.component.css']
})
export class PostpropertyComponent implements OnInit {
constructor(public authService:AuthenticationService,public router:Router) { }
 ngOnInit(){
  }
  logoutAction(){
    if(this.authService.logout())
    {
      this.router.navigate(['/login']);
    }
  }


}
