import { Component, signal } from '@angular/core';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [Variables, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular_21');
}
