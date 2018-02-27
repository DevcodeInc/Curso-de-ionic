import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image: string = null;

  constructor(
    public navCtrl: NavController,
    private camera: Camera
  ) {

  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      allowEdit: true,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(options)
    .then(image => {
      console.log('image', image);
      this.image = image;
    })
    .catch(error => console.log(error));
  }

  goToMapPage() {
    this.navCtrl.push('MapPage');
  }

}
