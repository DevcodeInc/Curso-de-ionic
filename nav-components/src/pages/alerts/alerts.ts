import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }

  showAlert() {
    // create
    const alert = this.alertCtrl.create({
      title: "Cuidado",
      subTitle: "tienes baja bateria",
      buttons: ['Ok']
    });
    // presnet
    alert.present();
  }

  showConfirm() {
    // create
    const alert = this.alertCtrl.create({
      title: "¿Seguro?",
      message: "Quieres eliminar esto",
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.deleteFile();
          }
        }
      ]
    });
    // presnet
    alert.present();
  }

  private deleteFile(){
    console.log('deleteFile');
    // code
  }

  showModal() {
    const modal = this.modalCtrl.create('ModalPage');
    modal.present();
  }

}
