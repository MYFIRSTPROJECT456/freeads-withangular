import { Component, OnInit, ViewChild } from '@angular/core';
import { CityService } from '../../service/city.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css'],
  providers:[CityService]
})
export class CitylistComponent implements OnInit {
  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }

  private cityLists:String[] = [];
  constructor(private _cityservice:CityService, private router:Router) { }

  ngOnInit() {
    this._cityservice.getCityList()
    .subscribe(repsonse => this.cityLists = repsonse)

    
  }

  deleteCity(id){
    console.log('03', id);
    this._cityservice.deleteCityById(id)
    .subscribe(response => {
      this.router.navigateByUrl('/createcity').then(()=>this.router.navigate(['/citylist']));
    });
  }
}
