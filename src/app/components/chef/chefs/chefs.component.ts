import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChefService } from 'src/app/services/chefs/chef.service';
import { IChef } from 'src/app/ViewModels/ichef';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {
  ChefList:any[]=[];
  subscription: Subscription|null=null;
  chefID:number=0;
  deletedChefID:number = 0 ;

  updatedChef:IChef = {
    id:0,
    name:'',
    image:'',
    description:'',
  };
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
  setChef(chef:IChef)
  {
    this.updatedChef = chef ;
  }
  setChefID(id:number)
  {
    this.deletedChefID= id;
  }
  deleteChef(){
    this.chefServiceApi.deleteChef(this.deletedChefID);
    alert("chef successfully deleted :)");
  }
  editChef(){
    console.log(this.updatedChef)
    this.chefServiceApi.updateChef(this.updatedChef);
    alert("meal successfully updated :)");
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  
}
