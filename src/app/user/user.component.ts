import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../user.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private data: DataService, private router: Router) {
  }

  user: User[];
/*
  CreateUser(userName: string): void {
    this.userService.createUser(userName);
    this.getUser(); // ikke gode kode skig, da siden kun opdater for en bruger.
  } */
  RegisterUser(): void {
    this.router.navigate(['register']);
  }
  LogInUser(): void {
    this.router.navigate(['login']);
  }

  getUser(): void {
    this.userService.getUser().then(user => this.user = user);
  }
  LogOutUser() {
    this.userService.LogOut();
  }

  InsertWorkout(id: string): void {
    this.data.changeMessage(id);
    this.router.navigate(['user/' + id + '/workout']);
  }

  ngOnInit() {
    this.getUser();
  }
}
