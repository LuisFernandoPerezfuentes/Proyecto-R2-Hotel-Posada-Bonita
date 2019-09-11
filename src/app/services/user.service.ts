import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  selectedUser: User = {
    _id: '',
    first_name: '',
    last_name: '',
    address:'',
    phone: 0,
    email: '',
    perfil: '',
    password: ''
  };

  users: User[];

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
   
  
  //URL LOCAL
  // readonly URL_API = 'http://localhost:3000/api/users';
  // readonly URL_APIC = 'http://localhost:3000/api';

  //URL HEROKU
  readonly URL_API = '/api/users';
  readonly URL_APIC = '/api';
  constructor(public http: HttpClient) { 
    this.selectedUser = new User();
  }

  getUsers(){
    return this.http.get(this.URL_API);
  }

  postUser(User: User) {
    return this.http.post(this.URL_API, User);
  }

  putUser(user: User){
      return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  //HttpMethods
  postUserlog(user: User) {
    return  this.http.post(this.URL_APIC+'/register',user, this.noAuthHeader);
   }
 
   login(authCredentials){
     return this.http.post(this.URL_APIC + '/authenticate', authCredentials, this.noAuthHeader);
   }
 
   getUserProfile(){
     return this.http.get(this.URL_APIC + '/userProfile');
   }
 
   //Helper Methods
 
   setToken(token: string){
     localStorage.setItem('token', token);
   }
 
   getToken(){
    return localStorage.getItem('token');
   }
 
   deleteToken() {
     localStorage.removeItem('token');
   }
 
   getUserPayload() {
     var token = this.getToken();
     if (token) {
       var userPayload = atob(token.split('.')[1]);
       return JSON.parse(userPayload);
     }
     else
       return null;
   }
 
   isLoggedIn(){
     var userPayload = this.getUserPayload();
     if (userPayload)
       return userPayload.exp > Date.now() /1000;
     else
       return false;
     }
 }

