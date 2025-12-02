import { Component, OnInit, signal } from '@angular/core';
import { Users } from './users';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  constructor(private usersService: Users) {}
  usersList = signal<any[]>([]);
  errorMessage?: string;
  isCreateUser: boolean = false;

  formToggle() {
    this.isCreateUser = !this.isCreateUser;
  }

  userObj = {
    id: 0,
    name: '',
    username: '',
    email: '',
    password: '',
    city: '',
    state: '',
  };

  onSubmit() {
    console.log('Form Submitted:', this.userObj);
  }

  onReset() {
    this.userObj = {
      id: 0,
      name: '',
      username: '',
      email: '',
      password: '',
      city: '',
      state: '',
    };
  }

  ngOnInit(): void {
    this.usersData();

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((r) => r.json())
    //   .then((d) => console.log('Manual fetch:', d));
  }

  usersData() {
    this.usersService.getData().subscribe({
      next: (res) => this.usersList.set(res ?? []),
      error: (err) => (this.errorMessage = err.message),
    });
  }
}
