import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignedIn = false;
  user: string |null='{}';
  loginForm:any;
  constructor(
    private firebaseSignIn: AuthService,
    private route: Router
    ) { }

  ngOnInit(): void {

    if(localStorage.getItem('user') !== null){
      //console.log(this.user);
      this.isSignedIn = true;

    }
    else{
      this.isSignedIn = false;

    }

    this.loginForm= new FormGroup({

      userEmail: new FormControl('',[Validators.email,Validators.required]),
      userPassword: new FormControl('',[Validators.required,Validators.minLength(6)]),

    })
  }
  get userEmail() { return this.loginForm.get('userEmail'); }
  get userPassword() { return this.loginForm.get('userPassword'); }
  async onSignIn(email:string,password:string){

    await this.firebaseSignIn.signIn(email,password)
    .then(res =>{
      console.log(res);
      if(this.firebaseSignIn.isLoggedIn){
        this.isSignedIn = true;
        this.route.navigate(['/DashBoard'])

      }
      },(err)=>{
        console.log(err);
        alert('Email or password is incorrect')


    })


  }


// route(){
//   this.Router.navigate(['/Home'])
// }
}
