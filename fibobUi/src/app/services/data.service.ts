import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class DataService {

  private isAuth = new BehaviorSubject(false);
  currentMessage = this.isAuth.asObservable();

  constructor() { }

  changeMessage(message: boolean) {
    this.isAuth.next(message)
  }

}