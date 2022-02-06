import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {

  propertyId:number;

  baseUrl: string = 'http://localhost:4000/uploadFile';

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File,  url) : Observable<HttpEvent<{}>>{
    
    const formdata: FormData = new FormData();
    

    console.log(this.propertyId)
    formdata.append('file', file, url);
    formdata.append('id',sessionStorage.getItem("propertyId"));
    formdata.append('column','1');
   

   
    const req = new HttpRequest('POST', `${this.baseUrl}`, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
