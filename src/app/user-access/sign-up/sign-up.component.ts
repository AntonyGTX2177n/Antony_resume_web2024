import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  gwnderSekect = true;
 

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
 
  }


  SignupForm = this.fb.group({
    id: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.fb.control('', Validators.compose([
      Validators.required, 
      Validators.pattern('(?=.*[a-z]) (?=.*[A-Z]) (?=.*[0-9]) (?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ])),
    userName: this.fb.control('', Validators.required),
    gender: this.fb.control('male')
  })




  registerUser() {
    console.log(this.SignupForm.value)
  }
}
