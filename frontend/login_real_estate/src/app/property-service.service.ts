import { Injectable } from '@angular/core';
import { Property } from './models/property.model';
import { Router } from '@angular/router';
import { Customer } from './models/customer.model';
import { HttpClient } from '@angular/common/http';
import { track } from './models/track.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {

  base_url = "http://localhost:9002/PropertyCtrl/";
  delete_property = "Delete";
 
  prop : Property[] = [];
  track:track[]=[];
  cust:Customer[]=[];
  index:number;
  propertyId:number;
  updateProp :Property;
  customerId1:number;
  
  constructor(public http: HttpClient) { }
  
  
    addProp(prop : Property) {
      return this.http.post<Property>('http://localhost:9002/PropertyCtrl/addproperty',prop);
    }
  
    fetchAll()  {
        return this.http.get<Property[]>('http://localhost:9002/PropertyCtrl/all');
      }
  
    editProp(prop : Property) {
        return this.http.put('http://localhost:9002/PropertyCtrl/updateproperty',prop);
    }
  
   
    deleteProp(propertyId: number) {
     return this.http.delete('http://localhost:9002/PropertyCtrl/Delete/'+ propertyId);
    }

    searchProp(location:string){
       return this.http.get<Property[]>('http://localhost:9002/PropertyCtrl/searchLocation/' + location);
    }

    fetchByPropId(propertyId: number){
      return this.http.get<Property>('http://localhost:9002/PropertyCtrl/searchByPropId/' + propertyId);
    }

    fetchByCustId(customerId1: number){
      return this.http.get<Property[]>('http://localhost:9002/PropertyCtrl/searchCustomer/' + customerId1);
    }

    Track(location:string,customerId1: number){

      return this.http.get<track[]>('http://localhost:9002/PropertyCtrl/track/' + location + '/' +customerId1);
    }
      
    custTrack(visitorId: number){
      return this.http.get<track[]>('http://localhost:9002/PropertyCtrl/findTrackById/' + visitorId);
    }
}
