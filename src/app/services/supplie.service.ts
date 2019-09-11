import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Supplie } from '../models/supplie';
import {SuppliesComponent } from '../components/supplies/supplies.component';

@Injectable({
  providedIn: 'root'
})
export class SupplieService {

  selectedSupplie: Supplie;
  supplies: Supplie[];
  

   //URL LOCAL
  //  readonly URL_API = 'http://localhost:3000/api/supplies';

   //URL HEROKU
   readonly URL_API = '/api/supplies';

  constructor(public http: HttpClient) { 
    this.selectedSupplie = new Supplie();
  }

  getSupplies(){
    return this.http.get(this.URL_API);
  }

  postSupplie(Supplie: Supplie) {
    return this.http.post(this.URL_API, Supplie);
  }

  putSupplie(supplie: Supplie){
      return this.http.put(this.URL_API + `/${supplie._id}`, supplie);
  }

  deleteSupplie(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
