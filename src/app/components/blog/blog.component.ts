import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';
import { Post } from 'src/app/ViewModels/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  AllPosts: any[]=[];
  AllComments:any[]=[];
  deletedPostID:number=0;
  updatedPost:Post = {
    id:0,
    image:'',
    title:'',
    date: new Date(),
    postBody:'',
    
  };
  constructor(private fb:FormBuilder, private blog:BlogService) {
   }
  
  ngOnInit(): void {
    this.getAllPosts();
    this.getAllComments();
  }
  getAllPosts(){
    this.blog.getAllPosts().subscribe(
      (res) =>{
        //console.log(res);
        res.forEach((element)=>{
          //console.log(element.payload.doc.data());
          this.AllPosts.push(element.payload.doc.data())
        })

        this.AllPosts.forEach((element)=>{
          console.log(element);
        })
      },
      (err)=>{
        console.log(err);
      }
    )

  }

  getAllComments(){
    this.blog.getAllComments().subscribe(
      (res) =>{
        //console.log(res);
        res.forEach((element)=>{
          //console.log(element.payload.doc.data());
          this.AllComments.push(element.payload.doc.data())
        })

        this.AllComments.forEach((element)=>{
          console.log(element);
        })
      },
      (err)=>{
        console.log(err);
      }
    )

  }
  setPostID(id:number)
  {
    this.deletedPostID= id;
  }
  deletePost(){
    this.blog.deletePost(this.deletedPostID);
    alert("post successfully deleted :)");
  }
  setPost(post:Post)
  {
    this.updatedPost = post ;
  }
  editPost(){
    console.log(this.updatedPost)
    this.blog.updatePost(this.updatedPost);
    alert("post successfully updated :)");
  }
}
