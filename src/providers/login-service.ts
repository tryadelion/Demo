import { Injectable } from '@angular/core';
import { Http, Headers,Response, RequestOptions,URLSearchParams } from '@angular/http';
import { ConstantsService } from "../providers/constants-service";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  private LOGIN_URL = 'user/login';

  constructor(public http: Http,private constantsService : ConstantsService) {
    console.log('Hello LoginService Provider');
    this.http = http;
    this.constantsService = constantsService;
  }

  login(username,password) {
    let body = new URLSearchParams();
    body.append('username',username);
    body.append('password',password);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });// ... Set content type to POST PARAMS
    let options = new RequestOptions({ headers: headers });
    var url = this.constantsService.getApiUrlBase() + this.LOGIN_URL;
    return this.http.post(url, body, options)
      .map((res:Response) => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
