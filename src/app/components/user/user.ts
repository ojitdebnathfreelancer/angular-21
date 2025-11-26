import { Component, OnInit } from '@angular/core';
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
  usersList: any;

  ngOnInit(): void {
    this.usersData();
  }

  usersData() {
    this._http.getData().subscribe((res) => {
      this.usersList = res;
      console.log(this.usersList);
    });
  }
}
