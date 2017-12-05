import {Exercise} from './exercise';

export class Workout {
  _id: string;
  WorkoutName: string;
  WorkoutDescription: string;
  exercise: Exercise[];
}
