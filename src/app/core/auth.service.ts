import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from '../core/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginMockData = {
    email: 'test@test.com',
    password: 'Test1!'
  };

  constructor(
    private router: Router,
    private sessionStorageService: SessionStorageService
  ) {}
  loginCheck(username: string, password: string): boolean {
    if (
      this.loginMockData.email === username &&
      this.loginMockData.password === password
    ) {
      this.sessionStorageService.setStorage(username);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.sessionStorageService.clearStorage();
    this.router.navigate(['login']);
  }
}
