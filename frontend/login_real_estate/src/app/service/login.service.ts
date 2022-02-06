import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
   return this.http.post("http://localhost:8084/login",user);
  }
 
  public registerUserFromRemote(user:User):Observable<any>{
    console.log(user);
    return this.http.post("http://localhost:8084/register",user);
   }

   public forgot(email:string,password:string){
    console.log(email);
    return this.http.get('http://localhost:8084/forgot/'+email+'/'+password);
}

}
