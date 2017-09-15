import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';

import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
import { NotificationService } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NotificationComponent,
    NotificationPanelComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    NotificationService,
    LOG_LOGGER_PROVIDERS
  ]
})
export class AppModule { }
