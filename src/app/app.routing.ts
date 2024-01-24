import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './user-access/login/login.component';
import { SignUpComponent } from './user-access/sign-up/sign-up.component';

import { IntroPageComponent } from './frame-layout/intro-page/intro-page.component';
import { SideContentComponent } from './frame-layout/side-content/side-content.component';
import { HeaderComponent } from './frame-layout/header/header.component';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
    { path: '', component:  IntroPageComponent },
    { path: 'sideContent', component:  SideContentComponent },
    { path: 'header', component:  HeaderComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'signUp', component:  SignUpComponent },
    { path: 'homePage', component:  HomeComponent },
    // { path: 'homePage', component:  HomeComponent, canActivate: [AuthGuard]},
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }