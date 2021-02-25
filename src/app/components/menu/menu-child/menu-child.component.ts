import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Imeal } from 'src/app/ViewModels/imeal';

@Component({
  selector: 'app-menu-child',
  templateUrl: './menu-child.component.html',
  styleUrls: ['./menu-child.component.scss']
})
export class MenuChildComponent implements OnInit {
  subscription: Subscription|null = null;
  MealsList: any[] = [];
  mID:number=0;
  deletedMealID:number = 0 ;

  updatedMeal:Imeal = {
    id:0,
    name:'',
    image:'',
    chefID:0,
    categoryID:0,
    price:0,
    description:'',
    discount:'',
    show:false
  };

  selectedMeal: {mealImage:string, mealID:number, mealName:string, mealPrice:number, mealDescription:string}=
  {
    mealImage:'',
    mealID:0,
    mealDescription:'',
    mealName:'',
    mealPrice:0
  };
  @Input() InputCategoryID:number=1;

  constructor(private mealService:MenuService,
    private router:Router) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.getMealbyCatID();
  }
  getMealbyCatID(){
    this.mealService.getMealByCategoryID(this.InputCategoryID).subscribe(
      (res) =>{
        this.MealsList=[];
        //console.log(res);
        res.forEach((element)=>{
          //console.log(element.payload.doc.data());
          this.MealsList.push(element.payload.doc.data())
        })
        
        this.MealsList.forEach((element)=>{
          console.log(element);
        })
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  viewDetails(mID:number){
    
    this.router.navigate(['/MealDetails',mID]);
  }
  setMeal(meal:Imeal)
  {
    this.updatedMeal = meal ;
  }
  setMealID(id:number)
  {
    this.deletedMealID= id;
  }
  deleteMeal(){
    this.mealService.deleteMeal(this.deletedMealID);
    alert("meal successfully deleted :)");
  }
  editMeal(){
    console.log(this.updatedMeal)
    this.mealService.updateMeal(this.updatedMeal);
    alert("meal successfully updated :)");
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
 
}
