import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChefService } from 'src/app/services/chefs/chef.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {
  ChefList:any[]=[];
  subscription: Subscription|null=null;
  chefID:number=0;
  constructor(
    private router:Router,
    private chefServiceApi:ChefService,
  ) { }

  ngOnInit(): void {
    this.getAllChefs();
  }
  getAllChefs(){
    this.chefServiceApi.getAllChefs().subscribe(
          (res) =>{
            this.ChefList=[];
            //console.log(res);
            res.forEach((element)=>{
              //console.log(element.payload.doc.data());
              this.ChefList.push(element.payload.doc.data())
            })
    
            this.ChefList.forEach((element)=>{
              console.log(element);
            })
          },
          (err)=>{
            console.log(err);
          }
        )
    

  }
  viewChef(ChefID:number){
   
    this.router.navigate(['/Profile',ChefID])
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
