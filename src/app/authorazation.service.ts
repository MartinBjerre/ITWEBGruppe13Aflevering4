import { Injectable } from '@angular/core';

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
}
