import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  gwnderSekect = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AuthorizationService
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
    this.service.ProcedRegistration(this.SignupForm.value).subscribe(response => {
      console.log(response);
      alert('posted the form to server');
      this.router.navigate(['login']);
    },
    error => {
      alert("failed registration")
    })
  }
}
