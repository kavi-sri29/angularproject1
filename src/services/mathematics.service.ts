import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathematicsService {

  constructor() { }

  Counter: number = 100;
  addOne(){
    this.Counter++;
  }
}
