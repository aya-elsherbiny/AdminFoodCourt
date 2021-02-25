import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];
  constructor(
    private afs: AngularFirestore
  ) { }
  getAllCategories()
  {
    return this.afs.collection("categories").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en").snapshotChanges();
  }
}
