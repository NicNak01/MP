import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  authentication = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: [
        'Test1!',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].*$'
          )
        ]
      ]
    });
  }

  login(user): void {
    if (this.authService.loginCheck(user.email, user.password)) {
      this.router.navigate(['products']);
    }
  }
}
