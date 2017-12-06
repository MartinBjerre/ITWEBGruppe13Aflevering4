import { Injectable } from '@angular/core';
import {User} from './models/user';

@Injectable()
export class AuthorazationService {

  constructor() { }

  public saveToken(token: string) {
    console.log(token);
    localStorage.setItem('UserToken', token);
  }
  public getToken() {
    return localStorage.getItem('UserToken');
  }
  public LogOut() {
    localStorage.removeItem('UserToken');
  }

  public TjekLogin() {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
      } else {
      return false;
    }
  }
 /* public currentUser(): User {
    if (this.TjekLogin()) {
      const token = this.getToken();
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      const user = new User();
      user.UserName = payload.UserName;
      user._id = payload._id;
      return user;
    } else {
      return;
    }
  } */
}
