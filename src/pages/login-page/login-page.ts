import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {ValidatorService} from "../../providers/validator-service";
import {LoginService} from "../../providers/login-service";
import {UserService} from "../../providers/user-service";
import { OffersPage } from '../../pages/offers-page/offers-page'
import { SpinnerDialog } from 'ionic-native';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
  providers: [ValidatorService,LoginService,UserService]
})

export class LoginPage {
  loginForm: FormGroup;
  loginError = false;
  passwordError = false;
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private validation: ValidatorService,private userService : UserService, private loginService : LoginService,private toastCtrl: ToastController) {

    this.loginForm = formBuilder.group({
      login: ['',Validators.compose([Validators.minLength(4),Validators.required])],
      password: ['',Validators.compose([Validators.minLength(4),Validators.required])]
    });
  }
//mirar el component dels control messages
  //https://coryrylan.com/blog/angular-2-form-builder-and-validation-management
  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  goRegister(){
    this.navCtrl.setRoot(OffersPage);
  }

  presentToast(message : string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  doSubmit() {
    this.navCtrl.setRoot(OffersPage);
    //this.navCtrl.push(OffersPage); PANTALLES AMB BACK BUTTON
    //this.navCtrl.setRoot(OffersPage); PANTALLES QUE SUPLANTEN TOTALMENT
  }

}
