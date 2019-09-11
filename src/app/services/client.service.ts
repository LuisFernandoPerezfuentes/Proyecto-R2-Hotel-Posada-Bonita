import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Client } from '../models/client';
import {ClientsComponent } from '../components/clients/clients.component';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  selectedClient: Client;
  clients: Client[];
  
  //URL LOCAL
  // readonly URL_API = 'http://localhost:3000/api/clients';

  //URL HEROKU
  readonly URL_API = '/api/clients';

  constructor(public http: HttpClient) { 
    this.selectedClient = new Client();
  }

  getClients(){
    return this.http.get(this.URL_API);
  }

  postClient(Client: Client) {
    return this.http.post(this.URL_API, Client);
  }

  putClient(client: Client){
      return this.http.put(this.URL_API + `/${client._id}`, client);
  }

  deleteClient(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
