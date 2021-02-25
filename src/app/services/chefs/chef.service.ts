import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];
  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private afs: AngularFirestore
  ) { }
  getAllChefs()
  {
    return this.afs.collection("chefs").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en").snapshotChanges();
  }

  getChefsByID(cID:number)
  {
    return this.afs.collection("chefs").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.where('id','==', cID)).snapshotChanges();
  }
}
