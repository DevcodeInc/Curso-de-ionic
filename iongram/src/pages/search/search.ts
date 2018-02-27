import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Photo } from './../../models/photo.model';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  query: string = '';

  photosCopy: Photo[] = [];
  photos:Photo[] = [
    {
      image: './assets/imgs/img1.jpg',
      text: 'cochabamba',
    },
    {
      image: './assets/imgs/img2.jpg',
      text: 'bogota',
    },
    {
      image: './assets/imgs/img3.jpg',
      text: 'bogota',
    },
    {
      image: './assets/imgs/img4.jpg',
      text: 'cali',
    },
    {
      image: './assets/imgs/img5.jpg',
      text: 'madrid',
    },
    {
      image: './assets/imgs/img6.jpg',
      text: 'buenos aires',
    },
    {
      image: './assets/imgs/img7.jpg',
      text: 'santiago',
    },
    {
      image: './assets/imgs/img8.jpg',
      text: 'lima',
    },
    {
      image: './assets/imgs/img9.jpg',
      text: 'lima',
    },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.photosCopy = this.photos;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onInput(event: Event){
    this.photos = this.photosCopy;

    let val = this.query;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.photos = this.photos.filter((photo) => {
        return (photo.text.toLowerCase().includes(val.toLowerCase()));
      })
    }
  }

}
