import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(userid : string, password : string):boolean{
    // hard coded validation
    if(userid == "First" && password == "abc"){
      sessionStorage.setItem("userid", userid);
      // based on type of user
      sessionStorage.setItem("usertype", "admin");

      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(): boolean{
    let user = sessionStorage.getItem("userid");
    if(user == null)
      return false;
    return true;  
  }

  typeOfUser():string{
    let userType = sessionStorage.getItem("usertype");
    return userType;
  }

  logout(){
    sessionStorage.removeItem("userid");
    sessionStorage.clear();
    return true;

  }

}
