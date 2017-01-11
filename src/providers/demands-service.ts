import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {ConstantsService} from "./constants-service";

/*
  Generated class for the OffersService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DemandsService {

  private DEMANDS_URL = 'list/demands';
  private UPDATE_DEMAND_URL = 'update/demands';
  private CONTACT_URL = "send/data";

  constructor(public http: Http,private constantsService : ConstantsService) {

    console.log('Hello OffersService Provider');
    this.http = http;
    this.constantsService = constantsService;
  }

  findAll(token,uid) {

    let body = new URLSearchParams();
    body.append('session_token',token);
    body.append('uid',uid);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });// ... Set content type to POST PARAMS
    let options = new RequestOptions({ headers: headers });
    var url = this.constantsService.getApiUrlBase() + this.DEMANDS_URL;
    return this.http.post(url, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  findFavs(token,uid) {

    let body = new URLSearchParams();
    body.append('session_token',token);
    body.append('uid',uid);
    body.append('favourite','1');
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });// ... Set content type to POST PARAMS
    let options = new RequestOptions({ headers: headers });
    var url = this.constantsService.getApiUrlBase() + this.DEMANDS_URL;
    return this.http.post(url, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  findMine(token,uid) {

    let body = new URLSearchParams();
    body.append('session_token',token);
    body.append('uid',uid);
    body.append('own','1');
    body.append('sold','0');
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });// ... Set content type to POST PARAMS
    let options = new RequestOptions({ headers: headers });
    var url = this.constantsService.getApiUrlBase() + this.DEMANDS_URL;
    return this.http.post(url, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  findSold(token,uid) {
    let body = new URLSearchParams();
    body.append('session_token',token);
    body.append('uid',uid);
    body.append('sold','1');
    body.append('own','1');
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });// ... Set content type to POST PARAMS
    let options = new RequestOptions({ headers: headers });
    var url = this.constantsService.getApiUrlBase() + this.DEMANDS_URL;
    return this.http.post(url, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  findDemand(token,uid,id){
    let body = new URLSearchParams();
    body.append('session_token',token);
    body.append('uid',uid);
    body.append('id',id);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });// ... Set content type to POST PARAMS
    let options = new RequestOptions({ headers: headers });
    var url = this.constantsService.getApiUrlBase() + this.DEMANDS_URL;
    return this.http.post(url, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addToFavourites(id,token,uid){
    let body = new URLSearchParams();
    body.append('session_token',token);
    body.append('uid',uid);
    body.append('id',id);
    body.append('action','favourite');
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });// ... Set content type to POST PARAMS
    let options = new RequestOptions({ headers: headers });
    console.log(body);
    var url = this.constantsService.getApiUrlBase() + this.UPDATE_DEMAND_URL;
    return this.http.post(url, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  removeFromFavourites(id,token,uid){
    let body = new URLSearchParams();
    body.append('session_token',token);
    body.append('uid',uid);
    body.append('id',id);
    body.append('action','not_favourite');
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });// ... Set content type to POST PARAMS
    let options = new RequestOptions({ headers: headers });
    var url = this.constantsService.getApiUrlBase() + this.UPDATE_DEMAND_URL;
    return this.http.post(url, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  contactDemand(id,name,email,phone,message,uid,token) {
    let body = new URLSearchParams();
    body.append('uid',uid);
    body.append('id',id);
    body.append('session_token',token);
    body.append('type','offer');
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
    console.log("Error recieved.");
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
