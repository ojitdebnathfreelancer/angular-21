import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  // courseName: string = 'Angular 21';

  courseName = signal('Angular 21');

  constructor() {
    setTimeout(() => {
      this.courseName.set('react js');
    }, 3000);
  }
}
