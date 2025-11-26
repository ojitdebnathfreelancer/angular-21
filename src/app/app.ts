import { Component, signal } from '@angular/core';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { User } from './components/user/user';

@Component({
  selector: 'app-root',
  imports: [Variables, DataBinding, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular_21');
  appCount = signal(0);
  increment() {
    this.appCount.update((v) => v + 1);
  }
  decrement() {
    this.appCount.update((v) => v - 1);
  }
}
