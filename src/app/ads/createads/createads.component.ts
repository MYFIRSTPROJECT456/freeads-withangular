import { Component, OnInit, ElementRef } from '@angular/core';
import { AdsService } from '../../service/ads.service';
import { Router } from '@angular/router';
import { CityService } from '../../service/city.service';
import { LocalityService } from '../../service/locality.service';
import { CategoryService } from '../../service/category.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-createads',
  templateUrl: './createads.component.html',
  styleUrls: ['./createads.component.css'],
  providers:[AdsService],
  viewProviders:[CityService, LocalityService, CategoryService] 
})
export class CreateadsComponent implements OnInit {

  private stateLists:String[] = [];
  private categoryLists:String[] = [];
  private cityLists:String[] = [];
  private localityLists:String[] = [];
  private subcategoryLists:String[] = [];
  
  private imageData:File;
  constructor(private _adsservice:AdsService, private router:Router, private _cityservice:CityService, private _localityservice:LocalityService, private _categoryservice:CategoryService, private elem:ElementRef, private toastr: ToastrService) { }
 

  ngOnInit() {
    this._adsservice.stateList()
    .subscribe(response => {
      // console.log('011', response)
      this.stateLists = response;
    })
    this._adsservice.categoryList()
    .subscribe(response => {
      // console.log('011', response);
      this.categoryLists = response;
    })
  
    let url = "http://localhost:4200/createads";

    if(document.URL == url){
      $('#frontheader').css({
        'display':'none'
      });
    }

    if(localStorage.getItem('adminLoginData') == null){
      this.router.navigate(['adminlogin']);
    }
  }

  public fileEvent($event) {
    const fileSelected: File = $event.target.files[0];
    console.log('05', fileSelected);
    this.imageData = fileSelected;
 }

  createAdsData(inputData){
    
    let formData = new FormData();
		console.log(this.imageData)
    formData.append("image",this.imageData);
    
    var inputValue = inputData.value;
    formData.append('data', JSON.stringify(inputValue));
    
    this._adsservice.createAds(formData)
    .subscribe(response => {
     console.log('02', response);
    //  console.log('03', Object.values(response));
    //  console.log('03', Object.values(JSON.parse(response[0])));
    //  console.log('04', Object.values(response[0]));
      if(response.status == 0){
        // alert("Ads Created Successfully");
        this.toastr.success('Ads', 'Created Successfully');
        this.router.navigate(['/adslist']);
      }
      else{
        this.toastr.warning('Ads', 'Created Failed');
        // alert("Ads Creation Failed");
      }
    })
  }

  onChangeState(deviceValue) {
    // console.log('02', deviceValue);
    this._cityservice.gettCityByState(deviceValue)
    .subscribe(response => {
      // console.log('03', response);
      this.cityLists = response
    })
  }

  onChangeCity(id){
    // console.log('01', id);
    this._localityservice.getLocalityByCity(id)
    .subscribe(response =>{
      // console.log('02', response);
      this.localityLists = response
    })
  }

  onChangeCategory(id){
    this._categoryservice.getSubcategoryBycategory(id)
    .subscribe(response => this.subcategoryLists = response);
  }
}
