import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(data:user){
    return this.http.post("https://shortnerapi.herokuapp.com/user-register",data)
  }
  login(data:user){
    return this.http.post("https://shortnerapi.herokuapp.com/user-login",data)
  }
}
