import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  timelineRoot = 'TimelinePage'
  searchRoot = 'SearchPage'
  activityRoot = 'ActivityPage'
  profileRoot = 'ProfilePage'


  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  showModal() {
    const modal = this.modalCtrl.create('GalleryPage');
    modal.present();
  }

}
