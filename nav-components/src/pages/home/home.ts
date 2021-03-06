import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {

  }

  goToAlertsPage() {
    this.navCtrl.push('AlertsPage');
  }

  goToTabsPage() {
    this.navCtrl.push('TabsPage');
  }

}
