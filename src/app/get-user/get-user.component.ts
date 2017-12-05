import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css'],
  providers: [UserService, DataService]

})
export class GetUserComponent implements OnInit, OnChanges {
  User: User[];
  userId: string;

  constructor( private router: Router,
    private userService: UserService, private data: DataService) { }
  getUser(): void {
    this.userService.getUser().then(user => this.User = user);
  }
  InsertWorkout(id: string): void {
    this.data.changeMessage(id);
    this.router.navigate(['user/' + id + '/workout']);
  }
  ngOnInit() {
    this.getUser();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getUser();
  }

}
