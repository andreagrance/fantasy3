import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { Api } from './api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';


@Injectable()
export class User {
  _user: any;
  public token: string;
  constructor(public http: Http, public api: Api, private router: Router) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  public login(accountInfo: any) {
    let seq = this.api.post('auth/local', accountInfo);
    seq.map(res => res.json()).subscribe(res => {
        // If the API returned a successful response, mark the user as logged in
        if (res.token != '') {
          var redirecTo = 'dashboard'
          this._loggedIn(res,redirecTo);
        } 
      }, err => {
          console.log('error'); 
          });

    return seq;
  }


  logout() {
    this._user = null;
    this.router.navigate(['login']);
    localStorage.removeItem('currentUser');
  }
  expireSession(err) {
    this._user = null;
    this.router.navigate(['login']);
    localStorage.removeItem('currentUser');
  }
  /**
   * Process a login response to store user data
   */
  _loggedIn(resp,redirecTo) {
    //this._user = resp.user;
    const headers = new Headers({
      'Authorization': 'Bearer ' + resp.token
    });

    const options = new RequestOptions({
      headers: headers
    });
    this.api.get('users/me', null, options).map((data: any) => data.json())
      .subscribe(
      (data: any) => {
        this._user = data;
        localStorage.setItem('currentUser', JSON.stringify({ token: resp.token, user: data }));
        this.router.navigate([redirecTo]);
      },
      err => this.logout(),
      () => console.log('getMe Complete')
      );
  }
}
