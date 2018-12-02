import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-back-side',
  templateUrl: './back-side.component.html',
  styleUrls: ['./back-side.component.css']
})
export class BackSideComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.test').click(function(){
      console.log('04');
      $('.panel-inverse').text('<app-list></app-list>');
    });
    let url = "http://localhost:4200/admindash";

    if(document.URL == url){
      $('#frontheader').css({
        'display':'none'
      });
    }

  }

}
