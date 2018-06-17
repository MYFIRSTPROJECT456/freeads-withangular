import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css'],
  providers:[UsersService]
})
export class CreateusersComponent implements OnInit {

  constructor(private _usersservice:UsersService, private router:Router) { }

  ngOnInit() {
  }

  createUserData(inputData){
    var inputValue = inputData.value;
    this._usersservice.createUsers(inputValue)
    .subscribe(response => {
      if(response.status == 1){
        alert("Users Creation Failed");
      }
      else{
        alert("Users Registred Successfully");
        this.router.navigate(['/userslist']);
      }
    })
  }
}
