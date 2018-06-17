import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css'],
  providers:[CategoryService]
})
export class UpdatecategoryComponent implements OnInit {
  private categoryData:String[] =[];
  constructor(private _categoryservice:CategoryService, private router:ActivatedRoute, private route:Router) { }

  ngOnInit() {
    // console.log('02',this.router.snapshot.params.id)
    this._categoryservice.getCategoryById(this.router.snapshot.params.id)
    .subscribe(response => this.categoryData = response[0])
  }
  
  updateCategoryData(inputData){
    var inputValue = inputData.value;
    this._categoryservice.updateCategory(inputValue, this.router.snapshot.params.id)
    .subscribe(response => {
      if(response.status == 1){
        alert('Category Update Failed');
      }else{
        alert('Category Updated Successfully');
        this.route.navigate(['/categorylist']);
      }
      // console.log('07', response);
    })
  }
}
