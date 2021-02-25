import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/services/userHome/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscription: Subscription|null = null;
  HomeList: any[] = [];
  HomeItems: any;
  ListOffers: any[]=[];
  ListRecommended: any[]=[];
  generalProducts: any[]=[];
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.getHomeGeneralProduct();
    this.getHomeOffers();
    this.getHomeRecommended();
  }
  getHomeGeneralProduct(){
    this.homeService.getHomeItems().subscribe(
      (res)=>{
        this.HomeItems=res.payload.data();
      },(err)=>{
        console.log(err);
      }
    )
  }

  getHomeOffers(){
    this.homeService.getHomeOffer().subscribe(
      (res)=>{
        
        res.forEach((element)=>{
          //console.log(element.payload.doc.data());
          this.ListOffers.push(element.payload.doc.data());
        })
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  getHomeRecommended(){
    this.homeService.getHomeRecommended().subscribe(
      (res)=>{
        
        res.forEach((element)=>{
          //console.log(element.payload.doc.data());
          this.ListRecommended.push(element.payload.doc.data());
        })
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
