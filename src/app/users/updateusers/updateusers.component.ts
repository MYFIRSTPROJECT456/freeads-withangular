import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css'],
  providers:[UsersService]
})
export class UpdateusersComponent implements OnInit {
  private usersData:String[] =[];
  constructor(private _usersservice:UsersService, private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this._usersservice.getUsersById(this.router.snapshot.params['id'])
    .subscribe(response => this.usersData = response[0])
  }

  updateUsers(inputData){
    var inputValue = inputData.value;
    var id = this.router.snapshot.params['id'];
    this._usersservice.updateUsers(inputValue, id)
    .subscribe(response => {
      if(response.status == 1){
        alert("User Update Failed");
      }
      else{
        alert('User Updated Successfully');
        this.route.navigate(['/userslist']);
      }
      // console.log('07', response);
    })
  }

}
