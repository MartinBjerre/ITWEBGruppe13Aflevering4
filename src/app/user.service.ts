import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AuthorazationService} from './authorazation.service';
import 'rxjs/add/operator/toPromise';
import {User} from './models/user';


@Injectable()
export class UserService {
  private url  = 'http://localhost:3000/api/user';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http, private  auth: AuthorazationService) { }

  getUser(): Promise<any[]> {
    console.log(this.auth.getToken());
      return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  Login(userName: string, password: string) {
    console.log(password);
    return this.http.post('http://localhost:3000/api/login', JSON.stringify({name: userName, password: password}),
      { headers: this.headers })
      .toPromise()
      .then(response => (this.auth.saveToken(response.json().token)))
      .catch(this.handleError);
  }

  createUser(userName: string): Promise<User> {
      return this.http.post(this.url + '/CreateUser', JSON.stringify({UserName: userName, workouts: []}), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }

  register(userName: string, password: string) {
    return this.http.post('http://localhost:3000/api/register', JSON.stringify({name: userName, password: password}),
      { headers: this.headers })
      .toPromise()
      .then(response => this.auth.saveToken(response.json().token))
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); //demo purpose only
      return Promise.reject(error.message || error);
  }
  private saveToken(token: string) {
    console.log(token);
    localStorage.setItem('UserToken', token);
  }
  public LogOut() {
    localStorage.removeItem('UserToken');
  }
}

