import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  baseUrl ="http://localhost:5000/";
  constructor(private _http:HttpClient) { }
  
  getData(url:string){
    return this._http.get(this.baseUrl + url)
  }

  UpdateData(url:string,body: any,id: any){
    return this._http.get(this.baseUrl + url)
  }
  deleteData(url:string,id: any){
    return this._http.get(this.baseUrl + url)
  }
  postData(url:string){
    return this._http.get(this.baseUrl + url)
  }
}
