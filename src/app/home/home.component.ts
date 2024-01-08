import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../user-access/authorization.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from './resume.service';
import { ResumeData } from './resume-data-model';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logged_in_userName: any;
  logged_in_password: any;
  logged_in_id: any;
  imagePreview: any;
  File: any;

  //switching dives
  switchingMode = false;

  //posting model
  postingResume: ResumeData;

  constructor(
    private service: AuthorizationService,
    private formBuilder: FormBuilder,
    private resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  profileCreationForm = this.formBuilder.group({
    'profileImage': this.formBuilder.control('', {
      validators: [Validators.required]
    }),
    'firstName': this.formBuilder.control('', Validators.required),
    'lastName': this.formBuilder.control('', Validators.required),
    'email': this.formBuilder.control('', Validators.required),
    'mobile': this.formBuilder.control('', Validators.required),
    'whatsApp': this.formBuilder.control('', Validators.required),
    'lineOne': this.formBuilder.control('', Validators.required),
    'lineTwo': this.formBuilder.control('', Validators.required),
    'streetName': this.formBuilder.control('', Validators.required),
    'state': this.formBuilder.control('', Validators.required),
    'country': this.formBuilder.control('', Validators.required),
    'zipCode': this.formBuilder.control('', Validators.required),
    'collegeName': this.formBuilder.control('', Validators.required),
    'courseName': this.formBuilder.control('', Validators.required),
    'graduationYear': this.formBuilder.control('', Validators.required),
    'certificationName': this.formBuilder.control('', Validators.required),
    'courseModules': this.formBuilder.control('', Validators.required),
    'certifedYear': this.formBuilder.control('', Validators.required),
    'companyName': this.formBuilder.control('', Validators.required),
    'jobRole': this.formBuilder.control('', Validators.required),
    'duration': this.formBuilder.control('', Validators.required),
    'dateOfJoining': this.formBuilder.control('', Validators.required),
    'dateOfLeaving': this.formBuilder.control('', Validators.required),
    'noticePeriod': this.formBuilder.control('', Validators.required),
    'declaration': this.formBuilder.control('', Validators.required),
  })

  create_btn() {
    this.switchingMode = true;
  }

  view_btn() {
    this.switchingMode = false;
  }

  backFunction() {
    this.service.logout()
  }

  loadData() {
    let dataOne = localStorage.getItem('userName');
    let dataTwo = localStorage.getItem('userId');
    let dataThree = localStorage.getItem('password');

    this.logged_in_userName = dataOne
    this.logged_in_password = dataThree
    this.logged_in_id = dataTwo
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.profileCreationForm.patchValue({ profileImage: file });
    this.profileCreationForm.get("profileImage").updateValueAndValidity();
    
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

    // const file = (event.target as HTMLInputElement).files[0];
    // this.profileCreationForm.patchValue({ profileImage: file });
    // const reader = new FileReader();

    // reader.addEventListener('load', () => {
    //   console.log(reader.result)
    //   this.imagePreview = reader.result as string;
    // });
    // reader.readAsDataURL(file);
  }

  //---- posting using object method---//
  createResume() {
    console.log(this.profileCreationForm.value)
    this.postingResume = new ResumeData();
    this.postingResume.id = this.logged_in_id;
    this.postingResume.profileImage = this.profileCreationForm.value.profileImage;
    this.postingResume.firstName = this.profileCreationForm.value.firstName;
    this.postingResume.lastName = this.profileCreationForm.value.lastName;
    this.postingResume.email = this.profileCreationForm.value.email;
    this.postingResume.mobile = this.profileCreationForm.value.mobile;
    this.postingResume.whatsApp = this.profileCreationForm.value.whatsApp;
    this.postingResume.lineOne = this.profileCreationForm.value.lineOne;
    this.postingResume.lineTwo = this.profileCreationForm.value.lineTwo;
    this.postingResume.streetName = this.profileCreationForm.value.streetName;
    this.postingResume.state = this.profileCreationForm.value.state;
    this.postingResume.country = this.profileCreationForm.value.country;
    this.postingResume.zipCode = this.profileCreationForm.value.zipCode;
    this.postingResume.collegeName = this.profileCreationForm.value.collegeName;
    this.postingResume.courseName = this.profileCreationForm.value.courseName;
    this.postingResume.graduationYear = this.profileCreationForm.value.graduationYear;
    this.postingResume.certificationName = this.profileCreationForm.value.certificationName;
    this.postingResume.courseModules = this.profileCreationForm.value.courseModules;
    this.postingResume.certifedYear = this.profileCreationForm.value.certifedYear;
    this.postingResume.companyName = this.profileCreationForm.value.companyName;
    this.postingResume.jobRole = this.profileCreationForm.value.jobRole;
    this.postingResume.duration = this.profileCreationForm.value.duration;
    this.postingResume.dateOfJoining = this.profileCreationForm.value.dateOfJoining;
    this.postingResume.dateOfLeaving = this.profileCreationForm.value.dateOfLeaving;
    this.postingResume.noticePeriod = this.profileCreationForm.value.noticePeriod;
    this.postingResume.declaration = this.profileCreationForm.value.declaration;


    this.resumeService.postResume(this.postingResume).subscribe(response => {
      console.log(this.profileCreationForm.value)
      console.log(response);
      alert('posted resume successfully')
      window.location.reload();
    },
      error => {
        alert('failed to post')
        window.location.reload();
      })
  }


  //==posting using formData--//
  // createResume() {
  //   this.resumeService.postResume(
  //     this.logged_in_id,
  //     this.profileCreationForm.value.profileImage,
  //     this.profileCreationForm.value.firstName,
  //     this.profileCreationForm.value.lastName,
  //     this.profileCreationForm.value.email,
  //     this.profileCreationForm.value.mobile,
  //     this.profileCreationForm.value.whatsApp,
  //     this.profileCreationForm.value.lineOne,
  //     this.profileCreationForm.value.lineTwo,
  //     this.profileCreationForm.value.streetName,
  //     this.profileCreationForm.value.state,
  //     this.profileCreationForm.value.country,
  //     this.profileCreationForm.value.zipCode,
  //     this.profileCreationForm.value.collegeName,
  //     this.profileCreationForm.value.courseName,
  //     this.profileCreationForm.value.graduationYear,
  //     this.profileCreationForm.value.certificationName,
  //     this.profileCreationForm.value.courseModules,
  //     this.profileCreationForm.value.certifedYear,
  //     this.profileCreationForm.value.companyName,
  //     this.profileCreationForm.value.jobRole,
  //     this.profileCreationForm.value.duration,
  //     this.profileCreationForm.value.dateOfJoining,
  //     this.profileCreationForm.value.dateOfLeaving,
  //     this.profileCreationForm.value.noticePeriod,
  //     this.profileCreationForm.value.declaration
  //   )
  //   console.log(this.profileCreationForm.value)
  // }

}
