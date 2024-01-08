import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from '../authorization.service';
import { LoginData } from './loginModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  gotMail: any;
  bulhData: any;
  registeredMail: LoginData[];
  logged_in_user: any;

  constructor(
    private fb: FormBuilder,
    private service: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.GetAll().subscribe(res => {
      alert('Data is ready for authenticating')
      this.bulhData = res
      this.registeredMail = JSON.parse(JSON.stringify(res));
    }, err => {
      alert('no server data available')
    })
  }


  loginForm = this.fb.group({
    email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.fb.control('', Validators.compose([
      Validators.required,
      Validators.pattern('(?=.*[a-z]) (?=.*[A-Z]) (?=.*[0-9]) (?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]))
  })

  loginUser() {
    console.log(this.loginForm.value);
    this.bulhData.map(gotMail => {    
      if (gotMail.email === this.loginForm.value.email) {
        this.gotMail = gotMail.email
        localStorage.setItem("userName", gotMail.email);
        localStorage.setItem("userId", gotMail.id);
        localStorage.setItem("password", gotMail.password);
        return console.log(gotMail.email);
      } 
    })
    if(this.gotMail === this.loginForm.value.email){
      alert('welcome user') 
      this.router.navigate(['homrPage'])
    } else {
      alert('user is not registered')
    }
  }


}

