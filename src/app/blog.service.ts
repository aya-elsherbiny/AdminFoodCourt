import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from './ViewModels/post';
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
      return this.afs.collection("posts").snapshotChanges();
    }
  
    getAllComments() {
      return this.afs.collection("comments").snapshotChanges();
    }
   addPost(post:Post){
    this.afs.collection("posts").add(post)
   }
   deletePost(pID:number){
    this.afs.doc(`posts/${pID}`).delete();
  }
  updatePost(post:Post){
    this.afs.doc(`posts/${post.id}`).update(post);
  }

}
