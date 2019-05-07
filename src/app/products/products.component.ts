import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userIdle: UserIdleService
  ) {}

  ngOnInit() {
    this.userIdle.resetTimer();
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe();
    this.userIdle.onTimeout().subscribe(() => this.logout());
  }

  logout(): void {
    this.authService.logout();
  }
}
