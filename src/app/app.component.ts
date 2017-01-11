import { Component, ViewChild } from '@angular/core';
import {Nav, Platform, ToastController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {Keyboard} from 'ionic-native';
import { OffersPage } from "../pages/offers-page/offers-page";
import {LoginPage} from "../pages/login-page/login-page";
import { MenuController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = OffersPage;
  rootPage: any = LoginPage;
  public isOfferTab : boolean = true;
  public isOfferPage : boolean = true;
  public isMineOfferPage : boolean = false;
  public isFavOfferPage : boolean = false;

  public isDemandTab : boolean = false;
  public isDemandPage : boolean = false;
  public isMineDemandPage : boolean = false;
  public isFavDemPage : boolean  = false;

  public isEmailPage : boolean = false;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public menuCtrl: MenuController,private  toastCtrl : ToastController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Ofertes', component: OffersPage },
      { title: 'Meves', component: OffersPage },
      { title: 'Preferides', component: OffersPage },
      { title: 'Demandes', component: OffersPage },
      { title: 'Meves', component: OffersPage },
      { title: 'Demandes Preferides', component: OffersPage },
      { title: 'Email', component: OffersPage }
    ];

  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      //Splashscreen.hide();
      Keyboard.disableScroll(true);
      setTimeout(() => {
        Splashscreen.hide();
      }, 1000);

    });
  }

  about(){
    (new InAppBrowser('http://comanou.useitproject.com/avis-legal', '_blank', 'location=yes'));
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page == this.pages[0]){
      this.isOfferTab = true;
      this.isOfferPage = true;
      this.isMineOfferPage = false;
      this.isFavOfferPage = false;

      this.isDemandTab = false;
      this.isDemandPage = false;
      this.isMineDemandPage = false;
      this.isFavDemPage = false;

      this.isEmailPage = false;

    }else if(page == this.pages[1]){

      this.isOfferTab = true;
      this.isOfferPage = false;
      this.isMineOfferPage = true;
      this.isFavOfferPage = false;

      this.isDemandTab = false;
      this.isDemandPage = false;
      this.isMineDemandPage = false;
      this.isFavDemPage = false;

      this.isEmailPage = false;

    }else if(page == this.pages[2]){
      this.isOfferTab = true;
      this.isOfferPage = false;
      this.isMineOfferPage = false;
      this.isFavOfferPage = true;

      this.isDemandTab = false;
      this.isDemandPage = false;
      this.isMineDemandPage = false;
      this.isFavDemPage = false;

      this.isEmailPage = false;

    }else if(page == this.pages[3]){
      this.isOfferTab = false;
      this.isOfferPage = false;
      this.isMineOfferPage = false;
      this.isFavOfferPage = false;

      this.isDemandTab = true;
      this.isDemandPage = true;
      this.isMineDemandPage = false;
      this.isFavDemPage = false;

      this.isEmailPage = false;

    }else if(page == this.pages[4]){
      this.isOfferTab = false;
      this.isOfferPage = false;
      this.isMineOfferPage = false;
      this.isFavOfferPage = false;

      this.isDemandTab = true;
      this.isDemandPage = false;
      this.isMineDemandPage = true;
      this.isFavDemPage = false;

      this.isEmailPage = false;

    }else if(page == this.pages[5]){
      this.isOfferTab = false;
      this.isOfferPage = false;
      this.isMineOfferPage = false;
      this.isFavOfferPage = false;

      this.isDemandTab = true;
      this.isDemandPage = false;
      this.isMineDemandPage = false;
      this.isFavDemPage = true;

      this.isEmailPage = false;
    }else if(page == this.pages[6]){
      this.isOfferTab = false;
      this.isOfferPage = false;
      this.isMineOfferPage = false;
      this.isFavOfferPage = false;
      this.isFavDemPage = false;

      this.isDemandTab = false;
      this.isDemandPage = false;
      this.isMineDemandPage = false;

      this.isEmailPage = true;
    }
    this.menuCtrl.close();
    this.nav.setRoot(page.component);
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
}
