import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { OffersPage } from '../pages/offers-page/offers-page'

import { OffersService } from '../providers/offers-service'
import { LoginPage } from "../pages/login-page/login-page";
import { ValidatorService } from "../providers/validator-service";
import { LoginService } from "../providers/login-service";
import { UserService } from "../providers/user-service";
import { ConstantsService } from "../providers/constants-service";
import {DemandsService} from "../providers/demands-service";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    OffersPage,
    LoginPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    OffersPage
  ],
  providers: [
    OffersService,
    ValidatorService,
    LoginService,
    UserService,
    DemandsService,
    ConstantsService
  ]
})
export class AppModule {}
