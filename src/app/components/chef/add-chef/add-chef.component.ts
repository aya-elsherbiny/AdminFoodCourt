import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chefs/chef.service';
import { IChef } from 'src/app/ViewModels/ichef';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.scss']
})
export class AddChefComponent implements OnInit {
  addChef:IChef = {
    id:0,
    name:'',
    image:'',
    description:'',
  };
  constructor(private router: Router,private chef:ChefService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.addChef.name!='' && this.addChef.description!='' ){
      this.chef.addChef(this.addChef);
      this.router.navigate(['/Chefs']);
    }
  }

}
