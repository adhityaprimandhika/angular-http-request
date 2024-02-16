import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service: AuthService) {}

  onSubmit(form: NgForm) {
    if(!form.valid) {
      alert("Please complete the form!");
      return;
    }
    this.service.login(form.value)
  }
}
