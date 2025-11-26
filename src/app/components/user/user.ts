import { Component, OnInit, signal } from '@angular/core';
import { Users } from './users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  constructor(private _http: Users) {}
  usersList = signal<any[]>([]);
  errorMessage?: string;

  ngOnInit(): void {
    this.usersData();

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((r) => r.json())
    //   .then((d) => console.log('Manual fetch:', d));
  }

  usersData() {
    this._http.getData().subscribe({
      next: (res) => this.usersList.set(res ?? []),
      error: (err) => (this.errorMessage = err.message),
    });
  }
}
