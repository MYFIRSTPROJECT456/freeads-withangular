import { Component, OnInit } from '@angular/core';
import { LocalityService } from '../../service/locality.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createlocality',
  templateUrl: './createlocality.component.html',
  styleUrls: ['./createlocality.component.css'],
  providers:[LocalityService]
})
export class CreatelocalityComponent implements OnInit {
  private cityLists:String[] = [];
  constructor(private _localityservice:LocalityService, private router:Router) { }

  ngOnInit() {
    this._localityservice.getCityList()
    .subscribe(response => this.cityLists = response)
  }

  createLocality(inputData){
    var inputValue = inputData.value;
    this._localityservice.createLocalityfunc(inputValue)
    .subscribe(response => {
      this.router.navigate(['/localitylist']);
    });
  }
}
