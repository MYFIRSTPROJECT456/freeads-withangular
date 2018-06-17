import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UsersService {

  private _getUsersListUrl = "http://13.127.173.109:3000/userslist";
  private _postCreateUsersUrl = "http://13.127.173.109:3000/addusedata";
  private _getUsersDataByIdUrl = "http://13.127.173.109:3000/updateuse?id=";
  private _postUpdateUsersUrl = "http://13.127.173.109:3000/updateusedata?id=";
  private _getDeleteUsersUrl = "http://13.127.173.109:3000/deleteusers?id=";
  // private _getUsersListUrl = "http://13.127.173.109:3000/userslist";

  constructor(private _http:Http) { }

  getUserList(){
   return this._http.get(this._getUsersListUrl)
    .map((response:Response)=> response.json())
  }

  createUsers(inputData){
    let headers = new Headers({'content-type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.post(this._postCreateUsersUrl, JSON.stringify(inputData), options)
    .map((response:Response) => response.json())
  }

  getUsersById(id){
    // console.log('02', id);
    return this._http.get(this._getUsersDataByIdUrl+''+id)
    .map((response:Response)=> response.json())
  }

  updateUsers(inputData, id){
    
    let headers = new Headers({'content-type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.post(this._postUpdateUsersUrl+''+id, JSON.stringify(inputData), options)
    .map((response:Response)=> response.json())
  }

  deleteUsers(id){
    return this._http.get(this._getDeleteUsersUrl+''+id)
    .map((response:Response) =>response.json())
  }
}
