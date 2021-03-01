import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from 'src/app/services/Orders/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  subscription:Subscription|null = null;
  orderList:any[]=[];
  meals:any[]=[];
  constructor(
    private order:OrdersService
  ) { }

  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders(){
    this.subscription = this.order.getAllOrders().subscribe(
      (res)=>{
        console.log(res);
        res.forEach((element)=>{
          console.log(element.payload.doc.data());
          this.orderList.push(element.payload.doc.data());
        })
        
        console.log(this.orderList);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
