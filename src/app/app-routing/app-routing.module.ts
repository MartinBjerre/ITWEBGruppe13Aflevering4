import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from '../user/user.component';
import {WorkoutComponent} from '../workout/workout.component';
import {ExerciseComponent} from '../exercise/exercise.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'user/:userId/workout', component: WorkoutComponent},
  {path: 'user/:userId/workout/:workoutId/exercise', component: ExerciseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
