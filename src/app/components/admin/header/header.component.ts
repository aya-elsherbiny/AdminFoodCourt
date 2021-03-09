import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HeaderService } from 'src/app/services/Header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  HeaderItems: any;
  isUserlogged:string|null=localStorage.getItem('user');

  @Output() isLogout = new EventEmitter<void>()
  constructor(
    private firebaselogout: AuthService,
    private headerLang: HeaderService,
    private route: Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') === null){

      this.route.navigate(['/LogIn']);

    }
    this.getHeaderLang();
  }
  changeLang(lang: any){
    //console.log(event.target.value);
    localStorage.setItem('lang',lang);
    window.location.reload();
  }

  getHeaderLang(){
    this.headerLang.getHeaderLang().subscribe(
      (res)=>{
        
        //console.log(res.payload.data());
        this.HeaderItems = res.payload.data();
        //console.log(this.HeaderItems.home);
      },(err)=>{
        console.log(err);
      }
    )
  }

  logout(){
    localStorage.removeItem('user');
    this.firebaselogout.logout()
    this.isLogout.emit()
    window.location.reload();
    //this.route.navigate(['/LogIn'])
  }
  
}
