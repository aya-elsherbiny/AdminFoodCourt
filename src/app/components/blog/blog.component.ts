import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  AllPosts: any[]=[];
  AllComments:any[]=[];
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
}
