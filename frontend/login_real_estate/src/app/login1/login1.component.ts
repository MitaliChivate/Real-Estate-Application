import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';
import { LoginService } from '../service/login.service';
import { PropertyServiceService } from '../property-service.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  user =new User();
  loginForm: FormGroup;
  msg='';
  submitted = false;
   
  constructor(private service :LoginService,
    private service1:PropertyServiceService,
      private router : Router,private formBuilder: FormBuilder,
      public auth : AuthenticationService){
 }

  ngOnInit() {
   
  }
  
  loginAdmin(){
   if(this.user.email=='admin123@gmail.com' && this.user.password=='123'){
      console.log("print success");
      this.router.navigate(['/admin']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
