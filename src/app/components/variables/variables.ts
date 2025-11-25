import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
// decorator
export class Variables {
  courseName: string = 'Angular Course';
  coursePrice: number = 50;
  myFun = (text?: string) => console.log(text || 'default console');

  constructor() {
    this.coursePrice = 20;
  }
}
