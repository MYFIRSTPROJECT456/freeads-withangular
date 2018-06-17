import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class CityService {

  private _getListUrl = "http://13.127.173.109:3000/citylist";
  private _postCreateUrl = "http://13.127.173.109:3000/addcitydata";
  private _getCityById = "http://13.127.173.109:3000/updatecity?cityid=";
  private _postUpdateCity = "http://13.127.173.109:3000/updatecitydata?id=";
  private _getDeleteCity = "http://13.127.173.109:3000/citydelete?deleteid=";
  private _getListState = "http://13.127.173.109:3000/addcity";
  private _postCityByState = "http://13.127.173.109:3000/getcitybystate?id=";

  constructor(private _http:Http) { }

  getCityList(){
    return this._http.get(this._getListUrl)
    .map((response:Response) => response.json());
  }

  createNewCity(inpuData){
    var headers = new Headers({'Content-Type':'application/json'});
    var options = new RequestOptions({headers:headers});
    return this._http.post(this._postCreateUrl, JSON.stringify(inpuData), options)
    .map((response:Response) => response.json());
  }

  getCityById(id){
    console.log('serv', id);
    return this._http.get(this._getCityById+''+id)
    .map((response:Response) => response.json())
  }
  
  updateCityById(inputData, id){
    console.log(inputData, id);
    var headers = new Headers({'Content-Type':'application/json'});
    var options = new RequestOptions({headers:headers});
    return this._http.post(this._postUpdateCity+''+id, JSON.stringify(inputData), options)
    .map((response:Response)=> response.json());
  }

  deleteCityById(id){
    // console.log('02', id);
    return this._http.get(this._getDeleteCity+''+id)
    .map((response:Response)=>response.json());
  }
  getStateList(){
    return this._http.get(this._getListState)
    .map((response:Response)=>response.json());
  }

  gettCityByState(id){
   return this._http.get(this._postCityByState+''+id)
   .map((response:Response)=>response.json());
  }
}
