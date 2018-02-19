import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { UsersProvider } from './../../providers/users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private userProvider: UsersProvider
  ) {

  }

  ionViewDidLoad(){
    const loading = this.loadingCtrl.create({
      content: 'Cargando usuarios'
    });
    loading.present();
    this.userProvider.getAllUsers(20)
    .subscribe((response: any) => {
      loading.dismiss();
      this.users = response.results;
    });

  }

}
