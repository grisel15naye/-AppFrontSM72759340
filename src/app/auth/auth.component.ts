import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authForm: FormGroup;
  validCode = 'SM72759340';
  validPassword = '15092005';

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      code: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const { code, password } = this.authForm.value;
    if (code === this.validCode && password === this.validPassword) {
      // Redirect to the posts page
      window.location.href = '/toolbar';
    } else {
      alert('Invalid credentials');
    }
  }
}