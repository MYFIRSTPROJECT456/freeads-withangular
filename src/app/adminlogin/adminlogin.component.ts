import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
  providers:[LoginService]
})
export class AdminloginComponent implements OnInit {

  constructor(private _loginservice:LoginService, private router:Router, private toastr: ToastrService) { }

  ngOnInit() {
    var url = "http://localhost:4200/adminlogin";
    if(document.URL == url){
      $('#frontheader').css({
        'display':'none'
      });
    }
  }

  loginData(inputData){
    let formData  = inputData.value;
    // console.log('002', formData);
    this._loginservice.getLoginData(formData)
    .subscribe(response => {
      console.log('004', response.length);
      if (response.length > 0){
        localStorage.setItem('adminLoginData', JSON.stringify(response[0]));
        let sessionData = localStorage.getItem('adminLoginData');
        if(JSON.parse(sessionData).ADMINID){
          this.toastr.success('You Logedin');
          this.router.navigate(['statelist']);
        }
      }
      else{
        let errorMessage = "Wrong Credintionals";
        $('#msgbox').css({
          'color':'red',
          'font-size':'25px',
          'display':'block',
          'text-align':'center'  
        });
        $('#msgbox').text(errorMessage);
        // this.router.navigate(['adminlogin']);
      }
    })
  }
}
