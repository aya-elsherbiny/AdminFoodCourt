import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];
  constructor(private afs: AngularFirestore) { }
  getOffers(){
    return this.afs.collection("meals",ref=>ref.where('show','==',true)).snapshotChanges();
  }
}
