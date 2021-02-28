import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/services/menu/menu.service';
import {Location} from '@angular/common'
@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent implements OnInit {
  private subscriptionList: Subscription[]=[] ;
  meals:any;
  mID:number=0;
  count:number=1;
  subscription: Subscription|null = null;
  MealsList: any[] = [];
  deletedMealID:number = 0 ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mService:MenuService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getMealByID();
  }
  getMealByID(){
    let mealSubscription:Subscription|null=null;
    let routeParam:Subscription = this.activatedRoute.paramMap.subscribe((params)=>{
      let mealID:string|null = params.get('mID');
      this.mID=(mealID)? parseInt(mealID):0;

      mealSubscription = this.mService.getMealByID(this.mID).subscribe(
        (res)=>{
          res.forEach((element)=>{
            console.log(element.payload.doc.data());
            this.meals = element.payload.doc.data()
          })},
        (err)=>{console.log(err)}
      )
      this.subscriptionList.push(mealSubscription);
    })
    this.subscriptionList.push(routeParam);
  }
  deleteMeal(){
    this.mService.deleteMeal(this.mID);
    alert("meal successfully deleted :)");
  }
  editMeal(){
    this.mService.updateMeal(this.meals);
    alert("meal successfully updated :)");
  }
  back(){
    this.location.back();
  }
}
