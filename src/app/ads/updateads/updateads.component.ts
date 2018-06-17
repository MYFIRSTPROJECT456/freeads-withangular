import { Component, OnInit } from '@angular/core';
import { AdsService } from '../../service/ads.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateads',
  templateUrl: './updateads.component.html',
  styleUrls: ['./updateads.component.css'],
  providers:[AdsService]
})
export class UpdateadsComponent implements OnInit {
  private adsData:String[] = [];
  constructor(private _adsservice:AdsService, private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this._adsservice.getAdsById(this.router.snapshot.params['id'])
    .subscribe(response => this.adsData = response[0])
  }

  updateAdsData(inputData){
    var inputValue = inputData.value;
    var id = this.router.snapshot.params['id'];
    this._adsservice.updateAds(inputValue, id)
    .subscribe(response => {
      if(response.status == 1){
        alert("Ads Update Failed");
      }
      else{
        alert('Ads Updated Successfully');
        this.route.navigate(['/adslist']);
      }
      // console.log('07', response);
    })
  }
}
