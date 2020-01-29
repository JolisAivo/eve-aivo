import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailComponent } from './mailservice/mail/mail.component';
import { MailItemComponent } from './mailservice/mail-item/mail-item.component';
import { MailListComponent } from './mailservice/mail-list/mail-list.component';
import { AppLoginComponent } from './authentication/app-login/app-login.component';
import { AppNewUserComponent } from './authentication/app-new-user/app-new-user.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    MailItemComponent,
    MailListComponent,
    AppLoginComponent,
    AppNewUserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
