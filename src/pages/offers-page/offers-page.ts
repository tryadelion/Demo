import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { SpinnerDialog } from 'ionic-native';

import { OffersService } from '../../providers/offers-service';
import {UserService} from "../../providers/user-service";

/*
  Generated class for the OffersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-offers-page',
  templateUrl: 'offers-page.html',
  providers: [OffersService]
})
export class OffersPage {

  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, private offersService: OffersService,private userService : UserService,private toastCtrl: ToastController) {

    this.offersService = offersService;
    this.userService = userService;
  }

  ionViewDidLoad() {

    console.log('Hello OffersPage Page');
  }

  ngOnInit() {

    SpinnerDialog.show("Comanou","carregant", true);
    this.userService.getUser().then(
      data => {
        var token = data.session_token;
        var uid = data.uid;
        this.offersService.findAll(token,uid).subscribe(
          data => {
            if(data.items.length <= 0){
              this.items = [];
            }else if(data.items.length > 26){
              this.items = data.items.slice(0,26);
            }else{
              this.items = data.items;
            }
            SpinnerDialog.hide();
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }


  openModal(){
    let toast = this.toastCtrl.create({
      message: 'Opció no disponible',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  getImage(item){
    return "url('" + item.image + "')";
  }

  goOffer(item) {

  }

  createOffer() {

  }



}

