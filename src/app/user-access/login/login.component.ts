import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }


  loginForm = this.fb.group({
    email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.fb.control('', Validators.compose([
      Validators.required, 
      Validators.pattern('(?=.*[a-z]) (?=.*[A-Z]) (?=.*[0-9]) (?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]))
  })

  loginUser() {
    console.log(this.loginForm.value)
  }
}
