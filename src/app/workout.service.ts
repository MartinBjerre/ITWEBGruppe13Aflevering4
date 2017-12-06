import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Workout} from './models/workout';
import {AuthorazationService} from './authorazation.service';



@Injectable()
export class WorkoutService {

  private url = 'http://localhost:3000/api/user/';

  constructor(private http: HttpClient, private  auth: AuthorazationService) {
  }

  getWorkout(userId: string): Promise<Workout[]> {
    return this.http.get(this.url + `${userId}/workout`)
      .toPromise()
      .then(response => response as Workout[])
      .catch(this.handleError);
  }

  public createWorkoutService(userId: string, obj): Promise<Workout[]> {
    return this.http.post(this.url + `${userId}/workout/CreateWorkout`, obj
      , {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getToken())})
      .toPromise()
      .then(response => response as Workout[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //demo purpose only
    return Promise.reject(error.message || error);
  }
}
