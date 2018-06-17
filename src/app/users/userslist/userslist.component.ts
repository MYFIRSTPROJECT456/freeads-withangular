import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
  providers:[UsersService]
})
export class UserslistComponent implements OnInit {

  private userslist:String[]=[];
  constructor(private _usersservice:UsersService, private router:Router) { }

  ngOnInit() {
    this._usersservice.getUserList()
    .subscribe(response => this.userslist = response)
  }

  deleteUsers(id){
    this._usersservice.deleteUsers(id)
    .subscribe(response =>{
      if(response.status == 1){
        alert("User Delete Failed");
      }
      else{
        alert("User Deleted Successfully");
        this.router.navigateByUrl('/createusers').then(()=>this.router.navigate(['/userslist']))
      }
    })
  }

}
