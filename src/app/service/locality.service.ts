import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LocalityService {

  private _getLocalityListUrl = "http://13.127.173.109:3000/localitylist";
  private _getCityListUrl = "http://13.127.173.109:3000/addloc";
  private _getStateListUrl = "http://13.127.173.109:3000/localitylist";
  private _getLocalityById = "http://13.127.173.109:3000/updateloc?localityid=";
  private _postCreateLocalityUrl = "http://13.127.173.109:3000/addlocdata";
  private _postUpdateLocalityUrl = "http://13.127.173.109:3000/updatelocdata?localityid=";
  private _getDeleteLocalityUrl = "http://13.127.173.109:3000/deleteloc?localityid=";
  private _getLocalityByCity = "http://13.127.173.109:3000/getlocalitybycity?id=";

  constructor(private _http:Http) { }

  getLocalityList(){
    return this._http.get(this._getLocalityListUrl)
    .map((response:Response) => response.json());
  }

  getCityList(){
    return this._http.get(this._getCityListUrl)
    .map((response:Response)=> response.json())
  }

  createLocalityfunc(inputData){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
   return this._http.post(this._postCreateLocalityUrl, JSON.stringify(inputData), options)
    .map((response:Response) => response.json());
  }

  getLocalityById(id){
    // console.log('02', id);
    return this._http.get(this._getLocalityById+''+id)
    .map((response:Response)=> response.json())
  }

  updateLocalityData(inputData, id){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.post(this._postUpdateLocalityUrl+''+id, JSON.stringify(inputData), options)
    .map((response:Response) => response.json())
  }

  deleteLocality(id){
    return this._http.get(this._getDeleteLocalityUrl+''+id)
    .map((response:Response) => response.json());
  }

  getLocalityByCity(id){
    return this._http.get(this._getLocalityByCity+''+id)
    .map((response:Response) =>response.json());
  }
}
