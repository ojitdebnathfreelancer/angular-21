import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
