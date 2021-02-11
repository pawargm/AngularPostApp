import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {


  post:any = {};
  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }

  submitPost() {
    this.postService.addPost(this.post)
  }

}
