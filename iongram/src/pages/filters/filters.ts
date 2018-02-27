import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Photo } from './../../models/photo.model';
import { Post } from './../../models/post.model';
import { TimelineProvider } from './../../providers/timeline/timeline';

@IonicPage()
@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {

  photo: Photo;
  filterSelected: any = {};
  filters: any[] = [
    {
      name: 'Normal',
      class: 'none'
    },
    {
      name: '1977',
      class: 'filter-1977'
    },
    {
      name: 'Poprocket',
      class: 'filter-poprocket'
    },
    {
      name: 'Moon',
      class: 'filter-moon'
    },
    {
      name: 'Clarendon',
      class: 'filter-clarendon'
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private timeline: TimelineProvider
  ) {
    this.photo = this.navParams.get('photo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersPage');
  }

  changeFilterSelected( filter ){
    this.filterSelected = filter;
  }

  savePhoto(){
    // Todo: add step 3 add comment
    let post: Post = {
      image: this.photo.image,
      text: 'Hola, esta 124',
      location: 'Chile',
      favorite: false,
      user: {
        name: 'Nicolas',
        image: './assets/imgs/nicobytes.jpg',
      }
    };

    this.timeline.addPost( post );
    this.navCtrl.setRoot('TabsPage');
  }

}
