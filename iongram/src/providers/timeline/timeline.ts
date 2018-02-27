import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Post } from './../../models/post.model';

@Injectable()
export class TimelineProvider {

  posts: Post[] = [];

  constructor(public http: HttpClient) {
    console.log('Hello TimelineProvider Provider');
  }

  getPosts() {
    if (this.posts.length > 0) {
      return of(this.posts);
    }
    return this.http.get<Post[]>('./assets/data/timeline.json')
    .pipe(
      tap(data => this.posts = data)
    );
  }

  addPost(post: Post) {
    this.posts.unshift(post);
  }

}
