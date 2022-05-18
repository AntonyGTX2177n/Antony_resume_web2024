import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators, FormArray } from '@angular/forms';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  exampleForm: FormGroup;
  forbidenUser = ['jack', 'rose', 'test'];
  HobiesAdd = [];

  ngOnInit(){
    this.exampleForm = new FormGroup ({
      'userData': new FormGroup ({
        'userName': new FormControl('', [Validators.required, this.forbiddenName.bind(this)], this.unauthorizedEmail ),
        'email': new FormControl('', [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'Hobies': new FormArray([])
    });
    this.exampleForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
   
    this.exampleForm.patchValue({
      'userData': {
        'userName': 'sureshAntony',
      },
      'gender': 'male'
    });
  }

  onsetValue(){
    this.exampleForm.setValue({
      'userData': {
        'userName': 'AngularTest',
        'email': 'suresh@greatDaddy.com'
      },
      'gender': 'male',
      'Hobies': []
    });

    this.HobiesAdd = ['cycling','Gymin','Cooking'];
    
  }

  submitedForm() {
    console.log(this.exampleForm.value);
   // this.exampleForm.reset();
  }

 /*
  addingHobie() {
     
    const Control = new FormControl('', Validators.required);
   (<FormArray>this.exampleForm.get('Hobies')).push(Control); 
   
  }

  get Controls() {
    return(this.exampleForm.get('Hobies') as FormArray).controls;
  }

  getControls() {
    const Control = new FormControl('', Validators.required);
    (<FormArray>this.exampleForm.get('Hobies')).push(Control); 
     return (<FormArray>this.exampleForm.get('hobbies')).controls;
  }  */

  forbiddenName(control: FormControl): {[s: string]: boolean}  {
    if (this.forbidenUser.indexOf(control.value) !== -1) {
      return{'user is forbidden': true};
    }
    return null;
  }

  unauthorizedEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise =  new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value ===  'AngularTest') {
          resolve({'user is forbidden': true});
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promise;
  }
}
