import { DatePipe, JsonPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, UpperCasePipe, TitleCasePipe, DatePipe, JsonPipe, NaPipe],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  currentDate = new Date();
  courseName: string = 'Angular Full Course';
  coursePrice: number = 50;
  city = 'Sylhet';
  className = 'primary';
  studentObj = {
    name: 'Ojit Deb Nath',
    state: '',
    address: 'Sylhet',
    contact: {
      phone: '190298',
      email: 'ojit@gmail.com',
    },
  };

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
