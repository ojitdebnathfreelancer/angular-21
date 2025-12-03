import { Component, OnInit, signal } from '@angular/core';
import { Users } from './users';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alert } from '../../reusableComponents/alert/alert';
import { TabList } from '../../reusableComponents/tab-list/tab-list';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule, Alert, TabList],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  constructor(private usersService: Users) {}
  usersList = signal<any[]>([]);
  errorMessage?: string;
  isCreateUser: boolean = false;
  isLoading = false;

  formToggle() {
    this.isCreateUser = !this.isCreateUser;
  }

  onSelectTab(tab: string) {
    console.log(tab);
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
  }

  usersData() {
    this.isLoading = true;
    this.usersService.getData().subscribe({
      next: (res) => {
        this.usersList.set(res ?? []);
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.message;
      },
    });
  }
}
