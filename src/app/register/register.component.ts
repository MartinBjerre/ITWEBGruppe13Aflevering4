import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  RegisterUser(userName: string, password: string): void {
    this.userService.register(userName, password);
  }

  ngOnInit() {
  }

}
