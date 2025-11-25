import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular Full Course';
  coursePrice: number = 50;
  city = 'Sylhet';
  className = 'primary';
  welcomeMeg() {
    alert('Welcome to my practices');
  }
  oncStateChange() {
    alert('State change');
  }
  changeCourseName(text: string) {
    this.courseName = text;
  }
}
