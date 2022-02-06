import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyServiceService } from '../property-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
   user =new User();
   msg='';
   submitted = false;
   customerId1:number;
   
  constructor(private service :LoginService,
    private service1:PropertyServiceService,
      private router : Router,private formBuilder: FormBuilder,
      public auth : AuthenticationService){}

  ngOnInit() {
    
  }
  
  loginUser(){
      this.service.loginUserFromRemote(this.user).subscribe(
      data =>{ 
        console.log("response recieved"),
        sessionStorage.setItem("customerId",data.id);
        console.log(sessionStorage.getItem("customerId"));
        this.customerId1=data.id;
        this.service1.customerId1=data.id;

        this.router.navigate(['/postproperty']);
    },
      error => {
        console.log("exception occurred");
        this.msg="Check Your Credentials";
      }
    )
 }
  
 gotoregistration(){
    this.router.navigate(['/registration'])
  }

gotoforgot(){
  this.router.navigate(['/forgot']);
}
}

 



 

