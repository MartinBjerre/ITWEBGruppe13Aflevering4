import {Component, OnInit, Input } from '@angular/core';
import {WorkoutService} from '../workout.service';
import {DataService} from '../data.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Workout} from '../models/workout';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
  providers: [WorkoutService, DataService]
})
export class WorkoutComponent implements OnInit {
  userId: string;
  subscription: Subscription;
  Workouts: Workout[];

  constructor(private workoutService: WorkoutService, private activatedRoute: ActivatedRoute, private router: Router) { }

  // https://angular.io/tutorial/toh-pt6#add-the-ability-to-add-heroes  Add the ability to add heroes afsnit. kan være den skal laves om til update.
  createWorkout(workoutName: string, workoutDescription: string) {
      const obj = {'WorkoutName': workoutName, 'WorkoutDescription': workoutDescription, 'exercise': []};
      this.workoutService.createWorkoutService(this.userId, obj).then(Workouts => this.Workouts = Workouts);
  }
  getWorkout() {
    this.workoutService.getWorkout(this.userId).then(Workouts => this.Workouts = Workouts);
  }
  InsertExercise(id: string): void {
    this.router.navigate(['user/' + this.userId + '/workout/' + id + '/exercise' ]);
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
    });
    this.getWorkout();
  }

}
