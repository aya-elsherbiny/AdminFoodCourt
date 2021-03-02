import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuParentComponent } from './components/menu/menu-parent/menu-parent.component';
import { MenuChildComponent } from './components/menu/menu-child/menu-child.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BlogComponent } from './components/Blogg/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { ChefProfileComponent } from './components/chef/chef-profile/chef-profile.component';
import { ChefDishesComponent } from './components/chef/chef-dishes/chef-dishes.component';
import { ChefsComponent } from './components/chef/chefs/chefs.component';
import { MealDetailsComponent } from './components/menu/meal-details/meal-details.component';
import { HomeComponent } from './components/admin/home/home.component';
import { OffersComponent } from './components/admin/offers/offers.component';
import { LoginComponent } from './components/admin/login/login.component';

import { AddMealComponent } from './components/menu/add-meal/add-meal.component'
import { AddPostComponent } from './components/Blogg/add-post/add-post.component';
import { AddChefComponent } from './components/chef/add-chef/add-chef.component';
import { SignupComponent } from './components/admin/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuParentComponent,
    MenuChildComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    BlogComponent,
    ChefProfileComponent,
    ChefDishesComponent,
    ChefsComponent,
    MealDetailsComponent,
    HomeComponent,
    OffersComponent,
    LoginComponent,
    AddPostComponent,
    AddMealComponent,
    AddChefComponent,
    SignupComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
