import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Add your password reset logic here
    console.log('Password reset requested for:', this.email);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
