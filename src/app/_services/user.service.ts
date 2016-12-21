import { Injectable } from '@angular/core';

import { Http , Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { ConstantService } from './constant.service';

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/index';

@Injectable()
export class UserService {

  constructor(
    private http: Http, 
    private authenticationService: AuthenticationService,
    private api: ConstantService) { 
  }

  getUsers(): Observable<User[]> {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': this.authenticationService.token });
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get(this.api.API_URL + '/users', options).map((response: Response) => response.json());
  }  

  getAll() {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': this.authenticationService.token });
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get(this.api.API_URL + '/users', options).map((response: Response) => response.json());
  }

  getById(id: number) {
      return this.http.get(this.api.API_URL + '/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      return this.http.post(this.api.API_URL + '/signup', user, { headers:headers });
  }

  update(user: User) {
      return this.http.put(this.api.API_URL + '/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
      return this.http.delete(this.api.API_URL + '/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
      // create authorization header with jwt token
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }
}
