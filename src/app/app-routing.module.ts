import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomeComponent } from './components/admin/home/home.component';
import { LoginComponent } from './components/admin/login/login.component';
import { OffersComponent } from './components/admin/offers/offers.component';
import { BlogComponent } from './components/blog/blog.component';
import { ChefDishesComponent } from './components/chef/chef-dishes/chef-dishes.component';
import { ChefProfileComponent } from './components/chef/chef-profile/chef-profile.component';
import { ChefsComponent } from './components/chef/chefs/chefs.component';
import { AddMealComponent } from './components/menu/add-meal/add-meal.component';
import { MealDetailsComponent } from './components/menu/meal-details/meal-details.component';
import { MenuParentComponent } from './components/menu/menu-parent/menu-parent.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'DashBoard', component:DashboardComponent},
  {path: 'Chefs', component:ChefsComponent},
  {path:'Profile/:cID',component:ChefProfileComponent},
  {path: 'Offers', component:OffersComponent},
  {path: 'Home', component:HomeComponent},
  {path:'LogIn', component:LoginComponent},
  {path:'Dishes/:cID',component:ChefDishesComponent},
  {path: 'Blog', component:BlogComponent},
  {path:'MealDetails/:mID', component:MealDetailsComponent},
  {path: 'MenuParent', component:MenuParentComponent},
  {path: 'AddMeal', component:AddMealComponent},
  {path: '', redirectTo: '/DashBoard', pathMatch:'full'},
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
