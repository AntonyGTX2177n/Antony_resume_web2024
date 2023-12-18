import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './user-access/login/login.component';
import { SignUpComponent } from './user-access/sign-up/sign-up.component';
import { IntroPageComponent } from './frame-layout/intro-page/intro-page.component';
import { SideContentComponent } from './frame-layout/side-content/side-content.component';
import { HeaderComponent } from './frame-layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent, 
    IntroPageComponent,
    SideContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
