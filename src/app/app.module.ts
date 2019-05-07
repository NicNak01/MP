import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserIdleModule } from 'angular-user-idle';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserIdleModule.forRoot({ idle: 299, timeout: 1, ping: null })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
