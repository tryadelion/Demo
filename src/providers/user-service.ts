import { Injectable } from '@angular/core';
import { NativeStorage } from 'ionic-native';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {URLSearchParams, Headers, RequestOptions, Response, Http} from "@angular/http";
import {ConstantsService} from "./constants-service";
import {Observable} from "rxjs";

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
  private CONTACT_URL = "send/data";
  constructor(public http: Http,private constantsService : ConstantsService) {
    console.log('Hello UserService Provider');
    this.http = http;
  }

  getUser() {
    return NativeStorage.getItem('user');
  }

  setupUser(user) {
    return NativeStorage.setItem('user',user);
  }



  contact(name,email,phone,message,uid,token) {
    let body = new URLSearchParams();
    body.append('uid',uid);
    body.append('session_token',token);
    body.append('type','contact');
    body.append('name',name);
    body.append('mail',email);
    body.append('phone',phone);
    body.append('comments',message);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });// ... Set content type to POST PARAMS
    let options = new RequestOptions({ headers: headers });
    var url = this.constantsService.getApiUrlBase() + this.CONTACT_URL;
    return this.http.post(url, body, options)
      .map((res:Response) => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
