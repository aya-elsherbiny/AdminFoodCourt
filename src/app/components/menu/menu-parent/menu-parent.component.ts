import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/menu/category.service';
import { MenuChildComponent } from '../menu-child/menu-child.component';

@Component({
  selector: 'app-menu-parent',
  templateUrl: './menu-parent.component.html',
  styleUrls: ['./menu-parent.component.scss']
})
export class MenuParentComponent implements OnInit {
  CategoryList: any[]=[];
  SelectedCategory: number = 1;

  @ViewChild(MenuChildComponent) DetailsRef:any;
  subscription:Subscription|null = null;
  constructor(private catService:CategoryService) { }

  setCatID(id:number): void {
    this.SelectedCategory = id;
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  //Filling the button values from the data base.
  getAllCategories(){
    this.subscription = this.catService.getAllCategories().subscribe(
      (res)=>{
        console.log(res);
        res.forEach((element)=>{
          console.log(element.payload.doc.data());
          this.CategoryList.push(element.payload.doc.data())
        })
        
        console.log(this.CategoryList);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
