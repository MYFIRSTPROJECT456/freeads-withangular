import { Component, OnInit } from '@angular/core';
import { LocalityService } from '../../service/locality.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-localitylist',
  templateUrl: './localitylist.component.html',
  styleUrls: ['./localitylist.component.css'],
  providers:[LocalityService]
})
export class LocalitylistComponent implements OnInit {
  private localityLists:String[] = [];
  
  constructor( private _localityservice:LocalityService, private router:Router )  { }

  ngOnInit() {
   this._localityservice.getLocalityList()
   .subscribe(response =>this.localityLists = response)

  }

  deleteLocality(id){
    this._localityservice.deleteLocality(id)
    .subscribe(response =>{
      this.router.navigateByUrl('/createlocality').then(()=>this.router.navigate(['/localitylist']))
  })
  }
}
