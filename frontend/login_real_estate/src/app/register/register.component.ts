import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  msg='';
  constructor(private service : LoginService,private router : Router) { }

  ngOnInit() {
  }

  registerUser(){
   
    this.service.registerUserFromRemote(this.user).subscribe(
      data =>{ 
        console.log("response recieved");
        window.alert("User Registered Successfully")
        this.router.navigate(['/login']);

    },
      error => {
        console.log("exception occurred");
        this.msg=error.error;
        ;
      }

    )
    
  }

}
