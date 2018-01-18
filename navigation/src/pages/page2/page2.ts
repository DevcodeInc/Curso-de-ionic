import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'page2',
  segment: 'page2/:id'
})
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const id = this.navParams.get('id');
    const name = this.navParams.get('name');
    console.log(id, name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  goToPage(){
    this.navCtrl.push('Page3Page');
  }

  goToBack() {
    this.navCtrl.pop();
  }

}
