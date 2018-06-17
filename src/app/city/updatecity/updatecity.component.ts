import { Component, OnInit } from '@angular/core';
import { CityService } from '../../service/city.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-updatecity',
  templateUrl: './updatecity.component.html',
  styleUrls: ['./updatecity.component.css'],
  providers: [CityService]
})
export class UpdatecityComponent implements OnInit {
  private cityLists:String[] = [];
  private cities:String[] = [];
  constructor(private _cityservice:CityService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
    this._cityservice.getCityById(this.route.snapshot.params['id'])
    .subscribe(response =>{
      this.cityLists = response.list, 
      this.cities = response.data[0]
      // console.log('01', response.list);
      // console.log('02', response.data[0]);
    });
    
  }

  updateCity(inputData){
    var inputValue = inputData.value;
    this._cityservice.updateCityById(inputValue, this.route.snapshot.params['id'])
    .subscribe(response => {
      this.router.navigate(['/citylist']);
    })
  }
}
