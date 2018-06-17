import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css'],
  providers:[CategoryService]
})
export class CategorylistComponent implements OnInit {

  private categoryLists:String[] = [];
  constructor(private _categoryservice:CategoryService, private router:Router) { }

  ngOnInit() {
    this._categoryservice.getCategoryList()
    .subscribe(response =>this.categoryLists = response);
  }

  deleteCategory(id){
    this._categoryservice.deleteCategory(id)
    .subscribe(response => {
      if (response.status == 1){
        alert('Category Delete Failed');
      }
      else{
        alert('Category Deleted Successfully');
        this.router.navigateByUrl('/createcategory').then(()=>this.router.navigate(['/categorylist']))
      }
    })
  }
}
