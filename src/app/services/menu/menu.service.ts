import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { HttpClient } from '@angular/common/http';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database'
import { Imeal } from 'src/app/ViewModels/imeal';
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
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en").snapshotChanges();
  }
  getMealByCategoryID(catID: number)
  {
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.where('categoryID','==',catID)).snapshotChanges();
  }
  getMealByID(pID:number)
  {
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.where('id','==',pID)).snapshotChanges();
  }
  getMealByChefID(cID:number)
  {
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.where('chefID','==',cID)).snapshotChanges()
  }
  addMeal(meal:Imeal){
    // this.afs.collection("meals").add(meal)
    this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en").doc(`${meal.id}`).set({
      id: Number(meal.id),
      name: meal.name,
      chefID: Number(meal.chefID),
      categoryID: Number(meal.categoryID),
      price:Number(meal.price),
      description:meal.description,
      image: meal.image,
      show: Boolean(meal.show),
      discount: meal.discount
    }
    )
  }
  deleteMeal(mID:number){
    this.afs.doc(`meals/${mID}`).delete();
  }
  updateMeal(meal:Imeal){
    // this.afs.doc(`meals/${meal.id}`).update(meal);
    this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en").doc(`${meal.id}`).set({
      id: Number(meal.id),
      name: meal.name,
      chefID: Number(meal.chefID),
      categoryID: Number(meal.categoryID),
      price:Number(meal.price),
      description:meal.description,
      image: meal.image,
      show: Boolean(meal.show),
      discount: meal.discount
    }
    )
  }
}
