import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  doSave() {
    console.log(this.registerForm.value);
  }

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      name: '',
      lastname: '',
      check: false,
      gender: '',
      date: '',
      peso: 0,
      banda: '',
      bandas: '',
      notifications: false
    });
  }

}
