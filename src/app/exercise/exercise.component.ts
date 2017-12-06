import { Component, OnInit, Input } from '@angular/core';
import {Exercise} from '../models/exercise';
import {ExerciseService} from '../exercise.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  providers: [ExerciseService]
})
export class ExerciseComponent implements OnInit {
  Exercises: Exercise[];
  userId: string;
  workoutId: string;
  subscription: Subscription;

  constructor(private exerciseService: ExerciseService, private activatedRoute: ActivatedRoute) { }

  // https://angular.io/tutorial/toh-pt6#add-the-ability-to-add-heroes  Add the ability to delete a hero
  createExercise(exerciseName: string, exerciseDescription: string, exerciseSets: number, exerciseRepstime: number) {
    const obj = {'ExerciseName': exerciseName, 'ExerciseDescription': exerciseDescription, 'ExerciseSets': exerciseSets,
      'ExerciseRepstime': exerciseRepstime};
    this.exerciseService.createExercise(this.userId, this.workoutId, obj).then(Exercises => this.Exercises = Exercises);
  }

  getExercise() {
    this.exerciseService.getExercise(this.userId, this.workoutId).then(Exercises => this.Exercises = Exercises);
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.workoutId = params['workoutId'];
    });
  this.getExercise();
  }
}
