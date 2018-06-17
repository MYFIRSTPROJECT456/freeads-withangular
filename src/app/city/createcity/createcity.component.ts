import { Component, OnInit } from '@angular/core';
import { CityService } from '../../service/city.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createcity',
  templateUrl: './createcity.component.html',
  styleUrls: ['./createcity.component.css'],
  providers:[CityService]
})
export class CreatecityComponent implements OnInit {

  private stateLists:string[] = [];
  
  constructor(private _cityservice:CityService, private router:Router) { }

  ngOnInit() {
    this._cityservice.getStateList()
    .subscribe(response => this.stateLists = response)
  }

  createCity(inpuData){
    let inputValue = inpuData.value;
    this._cityservice.createNewCity(inputValue)
    .subscribe(response => {
      this.router.navigate(['/citylist']);
    });
  }

}
