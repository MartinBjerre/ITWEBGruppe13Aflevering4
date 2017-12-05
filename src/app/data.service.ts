import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('test');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    console.log(message);
    this.messageSource.next(message);
  }
}
