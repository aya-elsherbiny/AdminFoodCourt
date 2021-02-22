import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
