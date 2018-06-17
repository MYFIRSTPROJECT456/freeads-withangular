import { Component, OnInit } from '@angular/core';
import { LocalityService } from '../../service/locality.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-updatelocality',
  templateUrl: './updatelocality.component.html',
  styleUrls: ['./updatelocality.component.css'],
  providers:[LocalityService]
})
export class UpdatelocalityComponent implements OnInit {
  private cityLists:String[] = [];
  private localityData:String[] = [];
  constructor(private _localityservice:LocalityService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this._localityservice.getLocalityById(this.route.snapshot.params['id'])
    .subscribe(response=> {
      this.cityLists = response.result,
      this.localityData = response.localityData[0]
      console.log(this.localityData);
    });
  }

  updateLocality(inputData){
    var inputValue = inputData.value;
    this._localityservice.updateLocalityData(inputValue, this.route.snapshot.params['id'])
    .subscribe(response =>{
      this.router.navigate(['/localitylist']);
    });
  }

}
