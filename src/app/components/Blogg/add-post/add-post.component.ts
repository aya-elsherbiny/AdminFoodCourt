import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/Blog/blog.service';

import { Post } from 'src/app/ViewModels/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  addPost:Post = {
    id:0,
    image:'',
    title:'',
    date:new Date(),
    postBody:'',
  };
  constructor( private router: Router,private blog:BlogService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.addPost.title!='' && this.addPost.postBody!='' ){
      this.blog.addPost(this.addPost);
      this.router.navigate(['/Blog']);
    }

  }

}
