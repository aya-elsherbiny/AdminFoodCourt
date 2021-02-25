import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/Footer/footer.service';
import { HeaderService } from 'src/app/services/Header/header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  lang:any;
  FooterItems: any;
  HeaderItems: any;
  constructor(
    private headerLang: HeaderService,
    private footerLang: FooterService,
  ) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.getHeaderLang();
    this.getFooterLang();
  }
  changeLang(event: any){
    console.log(event.target.value);
    localStorage.setItem('lang',event.target.value);
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

  getFooterLang(){
    this.footerLang.getFooterLang().subscribe(
      (res)=>{
        
        //console.log(res.payload.data());
        this.FooterItems = res.payload.data();
        //console.log(this.FooterItems);
      },(err)=>{
        console.log(err);
      }
    )
  }
}
