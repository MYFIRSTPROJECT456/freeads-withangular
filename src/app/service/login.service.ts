import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private _postLoginDatatUrl = "http://13.127.173.109:3000/adminlogin";

  constructor(private _http:Http) { }

  getLoginData(data){
    console.log('003', data);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new  RequestOptions({headers:headers});
   return this._http.post(this._postLoginDatatUrl, data, options)
    .map((response:Response) => response.json())
  }
}
