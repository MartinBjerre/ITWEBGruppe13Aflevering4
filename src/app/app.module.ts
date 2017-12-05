import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent} from './user/user.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserService } from './user.service';
import { WorkoutService } from './workout.service';
import { ExerciseService } from './exercise.service';
import { GetUserComponent } from './get-user/get-user.component';
import { GetWorkoutComponent } from './get-workout/get-workout.component';
import { GetExerciseComponent } from './get-exercise/get-exercise.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthorazationService} from './authorazation.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WorkoutComponent,
    ExerciseComponent,
    GetUserComponent,
    GetWorkoutComponent,
    GetExerciseComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [WorkoutService, ExerciseService, UserService, AuthorazationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
