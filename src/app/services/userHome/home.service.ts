import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];
  constructor(
    private afs: AngularFirestore
  ) { }
  getHomeItems() {
    return this.afs.collection("home").snapshotChanges();
  }

  getHomeGeneralProducts(){
    return this.afs.collection("home").doc("general").collection("items").snapshotChanges();
  }

  getHomeMealByID(pID:number)
  {
    return this.afs.collection("meals",ref => ref.where('id','==',pID)).snapshotChanges();
  }

  getHomeOffer()
  {
    return this.afs.collection("meals",ref=>ref.where('show','==',true).limit(6)).snapshotChanges();
  }

  getHomeRecommended()
  {
    return this.afs.collection("meals",ref=> ref.limit(9)).snapshotChanges();
  }
}
