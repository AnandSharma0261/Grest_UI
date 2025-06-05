import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email = '';
  showConfirmation = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }  onSubmit(event?: Event): void {
    // Prevent default form submission
    event?.preventDefault();
    
    console.log('Form submitted with email:', this.email);
    if (this.email && this.email.includes('@')) {
      this.showConfirmation = true;
      console.log('Show confirmation set to true');
    } else {
      console.log('Invalid email format');
    }
  }

  confirmEmail(): void {
    // Add your password reset logic here
    console.log('Password reset confirmed for:', this.email);
    this.showConfirmation = false;
  }

  cancelConfirmation(): void {
    this.showConfirmation = false;
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
