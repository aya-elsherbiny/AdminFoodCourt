import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from 'src/app/ViewModels/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];
  constructor(private http: HttpClient,
    private db: AngularFireDatabase,
    private afs: AngularFirestore) { }

    getAllPosts() {
      return this.afs.collection("posts").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en").snapshotChanges();
    }
  
    getAllComments() {
      return this.afs.collection("comments").snapshotChanges();
    }
   addPost(post:Post){
    this.afs.collection("posts").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en").doc(`${post.id}`).set({
      id:Number(post.id),
      image:post.image,
      title:post.title,
      date:post.date,
      postBody:post.postBody
    })
   }
   deletePost(pID:number){
    this.afs.doc(`posts/${pID}`).delete();
  }
  updatePost(post:Post){
    this.afs.collection("posts").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en").doc(`${post.id}`).set({
      id:Number(post.id),
      image:post.image,
      title:post.title,
      date:post.date,
      postBody:post.postBody
    })
  }



}
