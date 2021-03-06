import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './components/Blogg/add-post/add-post.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/admin/login/login.component';
import { BlogComponent } from './components/Blogg/blog/blog.component';
import { ChefDishesComponent } from './components/chef/chef-dishes/chef-dishes.component';
import { ChefProfileComponent } from './components/chef/chef-profile/chef-profile.component';
import { ChefsComponent } from './components/chef/chefs/chefs.component';
import { AddMealComponent } from './components/menu/add-meal/add-meal.component';
import { MealDetailsComponent } from './components/menu/meal-details/meal-details.component';
import { MenuParentComponent } from './components/menu/menu-parent/menu-parent.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddChefComponent } from './components/chef/add-chef/add-chef.component';
import { SignupComponent } from './components/admin/signup/signup.component';

const routes: Routes = [
  {path: 'DashBoard', component:DashboardComponent},
  {path: 'Chefs', component:ChefsComponent},
  {path:'Profile/:cID',component:ChefProfileComponent},
  {path:'LogIn', component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'Dishes/:cID',component:ChefDishesComponent},
  {path: 'Blog', component:BlogComponent},
  {path: 'AddPost', component:AddPostComponent},
  {path: 'AddChef', component:AddChefComponent},
  {path:'MealDetails/:mID', component:MealDetailsComponent},
  {path: 'MenuParent', component:MenuParentComponent},
  {path: 'AddMeal', component:AddMealComponent},
  {path: '', redirectTo: '/LogIn', pathMatch:'full'},
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
