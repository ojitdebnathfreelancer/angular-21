import { Component, signal } from '@angular/core';
import { email, Field, form, minLength, required } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
  remember: boolean;
}

@Component({
  selector: 'app-login',
  imports: [Field],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    remember: false,
  });

  loginForm = form(this.loginModel, (schema) => {
    required(schema.email, { message: 'Please enter email' });
    email(schema.email, { message: 'Enter valid email' });
    required(schema.password, { message: 'Please enter password' });
    minLength(schema.password, 6, { message: 'Minimum password 6 digit' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.loginForm().invalid()) {
      this.loginForm.email().markAsTouched();
      this.loginForm.password().markAsTouched();
      return;
    }

    const credentials = this.loginModel();
    console.log('Logging in with:', credentials);
  }
}
