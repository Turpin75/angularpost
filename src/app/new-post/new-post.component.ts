import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postsService: PostsService, private formBuilder: FormBuilder, 
              private router: Router) { }
  
  postForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onBack(){
    this.router.navigate(['/posts']);
  }

  onSavePost(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const createdAt = new Date();
    const newPost = new Post(title, content);
    newPost.createdAt = createdAt;
    newPost.loveIts = 0;
    this.postsService.createPost(newPost);
    this.router.navigate(['/posts']);
  }

}
