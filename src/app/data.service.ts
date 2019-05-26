import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['text 1', 'text 2']);
  goal = this.goals.asObservable();

  constructor() { }

    changeGoal(goal){
      this.goals.next(goal);
    }
  
}
