import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Welcome to the Blog',
      body: 'Hello, World!',
      dateCreated: new Date('2024-11-13'),
      userName: 'rdelpilar',
      firstName: 'Ruthyl',
      lastName: 'Del Pilar'
    },
    {
      id: 2,
      title: 'How to use github?',
      body: 'Commit & Push tutorial',
      dateCreated: new Date('2024-11-13'),
      userName: 'bgumtang',
      firstName: 'Braemar',
      lastName: 'Gumtang'
    },
    {
      id: 3,
      title: 'System Integration and Architecture 2',
      body: 'Lab Exercise 5: Frontend Angular Project',
      dateCreated: new Date('2024-11-13'),
      userName: 'acabiao',
      firstName: 'Alliah',
      lastName: 'Cabiao'
    }
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }
}
