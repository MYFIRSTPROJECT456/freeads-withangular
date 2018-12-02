import { Component, OnInit } from '@angular/core';
import { AdsService } from '../../service/ads.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateads',
  templateUrl: './updateads.component.html',
  styleUrls: ['./updateads.component.css'],
  providers:[AdsService]
})
export class UpdateadsComponent implements OnInit {
  private adsData:String[] = [];
  constructor(private _adsservice:AdsService, private router:ActivatedRoute,private route:Router,private toastr: ToastrService) { }

  ngOnInit() {
    this._adsservice.getAdsById(this.router.snapshot.params['id'])
    .subscribe(response => this.adsData = response[0])

    let url = "http://localhost:4200/updateads";

    if(document.URL == url){
      $('#frontheader').css({
        'display':'none'
      });
    }

    if(localStorage.getItem('adminLoginData') == null){
      this.route.navigate(['adminlogin']);
    }
  }

  updateAdsData(inputData){
    var inputValue = inputData.value;
    var id = this.router.snapshot.params['id'];
    this._adsservice.updateAds(inputValue, id)
    .subscribe(response => {
      if(response.status == 1){
        this.toastr.success('Ads Updated Successfully');
      }
      else{
        this.toastr.warning('Ads Update Failed');
        this.route.navigate(['/adslist']);
      }
      // console.log('07', response);
    })
  }
}
