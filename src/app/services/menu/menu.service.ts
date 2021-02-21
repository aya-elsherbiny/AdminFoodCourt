import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { HttpClient } from '@angular/common/http';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];
  constructor(
    private http:HttpClient,
    private db: AngularFireDatabase,
    private afs: AngularFirestore
  ) { }
  getAllMeals() {
    return this.afs.collection("meals").snapshotChanges();
  }
  getMealByCategoryID(catID: number)
  {
    return this.afs.collection("meals",ref => ref.where('category','==',catID)).snapshotChanges();
  }
  getMealByID(pID:number)
  {
    return this.afs.collection("meals",ref => ref.where('id','==',pID)).snapshotChanges();
  }
  getMealByChefID(cID:number)
  {
    return this.afs.collection("meals",ref => ref.where('chef','==',cID)).snapshotChanges()
  }
}
