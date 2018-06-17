import { Component, OnInit } from '@angular/core';
import { StateService } from '../../service/state.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[StateService]
})
export class CreateComponent implements OnInit {
  private stateLists:String[] = [];
  constructor(private _stateservice: StateService, private router:Router ) { }

  ngOnInit() {
  }

  createState(inputdata){
    var inputValue = inputdata.value;
    console.log('01', inputValue);
    this._stateservice.createStateNew(inputValue)
    .subscribe(response => {
      this.router.navigate(['/statelist']);
    }, (error)=>{
      console.log(error);
    })
  }
}
