import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css'],
  providers:[CategoryService]
})
export class CreatecategoryComponent implements OnInit {

  private categoryLists:String[] = [];
  constructor(private _categoryservice:CategoryService,private router:Router) { }

  ngOnInit() {
    this._categoryservice.getCategoryList()
    .subscribe(response =>this.categoryLists = response);

    let url = "http://localhost:4200/createcategory";

    if(document.URL == url){
      $('#frontheader').css({
        'display':'none'
      });
    }

    if(localStorage.getItem('adminLoginData') == null){
      this.router.navigate(['adminlogin']);
    }
  }

  createCategoryData(inputData){
   var inputValue = inputData.value;
   this._categoryservice.CreateCategory(inputValue)
   .subscribe(response => {
     if(response.status == 1)
     {
       alert('Category Insert failed');
     }
     else{
       alert('Category Inserted Successfully');
       this.router.navigate(['/categorylist']);
     }
   })

  }
  

}
