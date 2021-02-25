import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];
  constructor(private afs: AngularFirestore) { }
  getHeaderLang(){

    return this.afs.collection("static").doc("header").collection(localStorage.getItem("lang")||"en").doc(localStorage.getItem("lang")||"en").snapshotChanges();
  }
}
