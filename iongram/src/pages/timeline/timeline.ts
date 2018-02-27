import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { TimelineProvider } from './../../providers/timeline/timeline';
import { Post } from './../../models/post.model';

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  posts: Post[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private timeline: TimelineProvider,
    private actionSheetCtrl: ActionSheetController
  ) {
  }

  ionViewDidLoad() {
    this.timeline.getPosts()
    .subscribe(data => {
      console.log(data, 'posts');
      this.posts = data;
    });
  }

  doFavorite(post: Post){
    post.favorite = !post.favorite;
  }

  showOptions(post: Post) {
    const action = this.actionSheetCtrl.create({
      title: 'Options post',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Share',
          handler: () => {
            console.log('share');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    action.present( action );
  }

}
