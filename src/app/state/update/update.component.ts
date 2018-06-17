import { Component, OnInit } from '@angular/core';
import { StateService } from '../../service/state.service';
import { ActivatedRoute, Router } from '@angular/router'; 
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[StateService]
})
export class UpdateComponent implements OnInit {
  private states:string[]=[];
  constructor(private _stateservice:StateService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this._stateservice.getStateById(this.route.snapshot.params['sid'])
    .subscribe(response => this.states = response[0]);
    
  }

  updateState(inputData){
    var inputValue = inputData.value;
    console.log('01', inputValue);
    this._stateservice.updateStateData(inputValue, this.route.snapshot.params['sid'])
    .subscribe(response =>{
      this.router.navigate(['/statelist']);
    }, (error) =>{
      console.log(error);
    });
  }
}
