import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) {
    this.posts = this.postService.getPosts();
  }
}
