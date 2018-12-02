import {Component, OnInit} from '@angular/core';
import { StateService } from '../../service/state.service';
import { State } from '../../classes/state';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
declare var jquery: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[StateService]
})
export class ListComponent implements OnInit {
  private stateLists:string[]=[];
  constructor(private _stateservice:StateService, private router:Router) { }
  
  ngOnInit() {

    this._stateservice.getList()
    .subscribe(respData => this.stateLists = respData);
    
    let url = "http://localhost:4200/statelist";

    if(document.URL == url){
      $('#frontheader').css({
        'display':'none'
      });
    }

    if(localStorage.getItem('adminLoginData') == null){
      this.router.navigate(['adminlogin']);
    }
  }

  deleteState(id){
    // console.log('call', id);
    this._stateservice.deleteStateData(id)
    .subscribe(response => {
      this.router.navigateByUrl('/create').then(()=>this.router.navigate(['/statelist']));
    });
  }
}
