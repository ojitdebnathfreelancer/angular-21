import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  @Input() message: string = '';
  @Input() isLoading: boolean = false;

  constructor() {
    // console.log(this.isLoading, 'alert');
  }
}
