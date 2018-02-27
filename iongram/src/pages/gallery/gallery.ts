import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Photo } from './../../models/photo.model';

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  photoSelected: any = {};
  // Todo: images from native gallery
  photos:Photo[] = [
    {
      text: '1',
      image: './assets/imgs/img1.jpg'
    },
    {
      text: '1',
      image: './assets/imgs/img2.jpg'
    },
    {
      text: '1',
      image: './assets/imgs/img3.jpg'
    },
    {
      text: '1',
      image: './assets/imgs/img4.jpg'
    },
    {
      text: '1',
      image: './assets/imgs/img5.jpg'
    },
    {
      text: '1',
      image: './assets/imgs/img6.jpg'
    }
  ];

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private camera: Camera
  ) {
    this.photoSelected = this.photos[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  changePhotoSelected( photo ){
    this.photoSelected = photo;
  }

  goToFiltersPage(){
    const modal = this.modalCtrl.create('FiltersPage', {
      photo: this.photoSelected
    });
    modal.present();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options)
    .then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.photos.unshift({
        text: '12',
        image: imageData
      });
      this.photoSelected = this.photos[0];
     }, (err) => {
      // Handle error
     });
  }

}
