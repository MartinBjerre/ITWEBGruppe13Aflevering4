import { Component, OnInit, Input } from '@angular/core';
import {Workout} from '../models/workout';
import {WorkoutService} from '../workout.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-get-workout',
  templateUrl: './get-workout.component.html',
  styleUrls: ['./get-workout.component.css']
})
export class GetWorkoutComponent implements OnInit {
  userId: string;
  subscription: Subscription;
  Workouts: Workout[];
  constructor(private router: Router, private workoutService: WorkoutService, private activatedRoute: ActivatedRoute) { }

  getWorkout() {
    console.log(this.userId);
    this.workoutService.getWorkout(this.userId).then(Workouts => this.Workouts = Workouts);
  }
  InsertExercise(id: string): void {
    this.router.navigate(['user/' + this.userId + '/workout/' + id + '/exercise' ]);
  }
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.getWorkout();
    });
  }
}
