import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/Header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  HeaderItems: any;

  constructor(
    private headerLang: HeaderService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getHeaderLang();
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
}
