import { Injectable } from '@angular/core';
import {Exercise} from './models/exercise';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {AuthorazationService} from './authorazation.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExerciseService {

  private url = 'http://localhost:3000/api/user/';


  constructor(private http: HttpClient, private auth: AuthorazationService) {
  }
  getExercise(userId: string, workoutId: string): Promise<Exercise[]> {
    return this.http.get(this.url + `${userId}/workout/${workoutId}/exercise`)
      .toPromise()
      .then(response => response as Exercise[])
      .catch(this.handleError);
  }

  createExercise(UserId: string, workoutId: string, obj): Promise<Exercise[]> {
    return this.http.post(this.url + `${UserId}/workout/${workoutId}/exercise/CreateExercise`,
      obj, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getToken())})
      .toPromise()
      .then (response => response as Exercise[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //demo purpose only
    return Promise.reject(error.message || error);
  }
}
