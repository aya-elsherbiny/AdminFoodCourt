import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Imeal } from 'src/app/ViewModels/imeal';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {
  addedMeal:Imeal = {
    id:0,
    name:'',
    image:'',
    chef:0,
    category:0,
    price:0,
    description:'',
    discount:'',
    show:false
  };
  constructor(private menuService: MenuService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.addedMeal.name!='' && this.addedMeal.description!='' && this.addedMeal.image!=''
    && this.addedMeal.discount!=''
    )
    {
      this.menuService.addMeal(this.addedMeal);
      this.router.navigate(['/MenuParent']);
    }
    

  }
}
