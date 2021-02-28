import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getAllOrders() {
    return this.afs.collection("orders").snapshotChanges();
  }
}
