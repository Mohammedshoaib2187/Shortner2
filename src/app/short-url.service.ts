import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './modal';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  UrlData:Array<url> = [];
  constructor(private http:HttpClient) { }

  saveURL(url:url){
    this.UrlData.push(url)
    return this.http.post(`https://616a588316e7120017fa0f27.mockapi.io/short-url`,url)
  }
  getAllURL(){
    return this.http.get<Array<url>>(`https://616a588316e7120017fa0f27.mockapi.io/short-url`)
  }
  updateUrlById(urldata:url,urlId:number|undefined){
    return this.http.put(`https://616a588316e7120017fa0f27.mockapi.io/short-url/${urlId}`,urldata)
  }
  deleteUserById(id:number){
    return this.http.delete(`https://616a588316e7120017fa0f27.mockapi.io/short-url/${id}`)
  }
}
