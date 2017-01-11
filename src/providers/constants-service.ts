import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConstantsService {

 private API_URL_BASE : string = "http://comanou.useitproject.com/api/";

  constructor() {

  }

  getApiUrlBase() {
    return this.API_URL_BASE;
  }
}
