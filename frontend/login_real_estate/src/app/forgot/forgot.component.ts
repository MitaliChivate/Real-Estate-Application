import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  username:string;
  password:string;
  msg='';
  user =new User();

  constructor(public router : Router, private formBuilder:FormBuilder,private service : LoginService) { }

  ngOnInit() {
  }

  forgetAction(){(
    this.service.forgot(this.user.email,this.user.password).subscribe(
      data=>{
        window.alert("password Changed !!!");
        this.router.navigate(['login']);
      },error=>{
        //window.alert(err.error.errorMessage);
        this.msg=JSON.stringify( error.error.message);
      }
    ));
    
}

}
