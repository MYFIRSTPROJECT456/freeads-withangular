import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class StateService {

  private _getUrl = "http://13.127.173.109:3000/statelist";
  private _postUrl = "http://13.127.173.109:3000/statecreate";
  private _getStateById = "http://13.127.173.109:3000/update?sid=";
  private _postUpdateState = "http://13.127.173.109:3000/updatedata?sid=";
  private _getDeleteState = "http://13.127.173.109:3000/delete?sid=";
  constructor(private _http:Http) { }

  getList(){
   return this._http.get(this._getUrl)
    .map((response:Response) => response.json())
  }

  createStateNew(inputData){
    console.log('02', inputData);
    var headers = new Headers({'Content-Type':'application/json'});
    var options = new RequestOptions({headers:headers});
    return this._http.post(this._postUrl, JSON.stringify(inputData), options)
    .map((response:Response)=>response.json());
  }
  getStateById(id){
    return this._http.get(this._getStateById+''+id)
    .map((response:Response)=> response.json());
    
  }

  updateStateData(inputData, id){
    console.log('service',inputData, id);
    var headers = new Headers({'Content-Type':'application/json'});
    var options = new RequestOptions({headers:headers});
    return this._http.post(this._postUpdateState+''+id, JSON.stringify(inputData), options)
    .map((response:Response)=> {
      console.log(response);
    });
  }

  deleteStateData(id){
    console.log('serive', id);
    return this._http.get(this._getDeleteState+''+id)
    .map((response:Response) =>response.json());
  }

}
