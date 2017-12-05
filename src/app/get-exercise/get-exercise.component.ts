import { Component, OnInit, Input } from '@angular/core';
import {Exercise} from '../models/exercise';
import {ExerciseService} from '../exercise.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-get-exercise',
  templateUrl: './get-exercise.component.html',
  styleUrls: ['./get-exercise.component.css']
})
export class GetExerciseComponent implements OnInit {
  userId: string;
  subscription: Subscription;
  workoutId: string;
  Exercises: Exercise[];

  constructor(private exerciseService: ExerciseService, private activatedRoute: ActivatedRoute) {
  }
  getExercise() {
    this.exerciseService.getExercise(this.userId, this.workoutId).then(Exercises => this.Exercises = Exercises);
  }
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.workoutId = params['workoutId'];
      this.getExercise();
    });
  }
}
