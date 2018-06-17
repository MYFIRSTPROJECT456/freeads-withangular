import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'; 
@Injectable()
export class AdsService {

  private _getAdsListUrl = "http://13.127.173.109:3000/adslist";
  private _postCreateAdsUrl = "http://13.127.173.109:3000/addadsdata";
  private _getAdsDataByIdUrl = "http://13.127.173.109:3000/updateads?id=";
  private _postUpdateAdsUrl = "http://13.127.173.109:3000/updateadsdata?id=";
  private _getDeleteAdsUrl = "http://13.127.173.109:3000/deleteads?id=";
  private _getSteateListUrl = "http://13.127.173.109:3000/statelist";
  private _getCategoryListUrl = "http://13.127.173.109:3000/categorylist";
  private _getAdsActionUrl = "http://13.127.173.109:3000/changestatus";
  
  constructor(private _http:Http) { }

  getAdsList(){
  return this._http.get(this._getAdsListUrl)
    .map((response:Response)=> response.json())
  }

  createAds(formData){
   console.log('data01', formData);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions ({headers:headers});
    return this._http.post(this._postCreateAdsUrl, formData)
    .map((response:Response)=>response.json());
  }

  getAdsById(id){
    // console.log('04', id);
  return this._http.get(this._getAdsDataByIdUrl+''+id)
    .map((response:Response)=> response.json())
  }

  updateAds(inputData, id){
    // console.log(inputData, id);
    let headers = new Headers({'content-type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return  this._http.post(this._postUpdateAdsUrl+''+id, JSON.stringify(inputData), options)
    .map((response:Response)=> response.json())
  }

  deleteAds(id){
    return this._http.get(this._getDeleteAdsUrl+''+id)
    .map((response:Response) =>response.json())
  }
  stateList(){
    return this._http.get(this._getSteateListUrl)
    .map((response:Response)=> response.json())
  }

  categoryList(){
   return this._http.get(this._getCategoryListUrl)
    .map((response:Response)=>response.json())
  }

  actionChangeData(ActionData){
    console.log('04', ActionData);
    var myActionData = {
      ActionData:ActionData[0],
      aid:ActionData[1]
    }
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions ({headers:headers});
    return this._http.post(this._getAdsActionUrl, myActionData)
    .map((response:Response)=>response.json());
  }
  
}
