import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/user-access/authorization.service';
import { ResumeService } from '../resume.service';
import { Router } from '@angular/router';
import { ResumeData } from '../resume-data-model';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  logged_in_userName: any;
  logged_in_password: any;
  logged_in_id: any;
  imagePreview: any;
  editResume: any;

   //Editing model
   editingResume: ResumeData;

  constructor(
    private service: AuthorizationService,
    private formBuilder: FormBuilder,
    private resumeService: ResumeService,
    private router: Router
  ) { }

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

  ngOnInit(): void {
    this.loadData()
    this.resumeService.getById(this.logged_in_id).subscribe(response => {
     
      this.profileCreationForm.patchValue({
        proFileImage: response.proFileImage,
        firstName: response.firstName,
        lastName: response.lastName,
        email: response.email,
        mobile: response.mobile,
        whatsApp: response.whatsApp,
        lineOne: response.lineOne,
        lineTwo: response.lineTwo,
        streetName: response.streetName,
        state: response.state,
        country: response.country,
        zipCode: response.zipCode,
        collegeName: response.collegeName,
        courseName: response.courseName,
        graduationYear: response.graduationYear,
        certificationName: response.certificationName,
        courseModules: response.courseModules,
        certifedYear: response.certifedYear,
        companyName: response.companyName,
        jobRole: response.jobRole,
        duration: response.duration,
        dateOfJoining: response.dateOfJoining,
        dateOfLeaving: response.dateOfLeaving,
        noticePeriod: response.noticePeriod,
        declaration: response.declaration,
      })
    },
    error => {
      console.log('no resume available')
    })
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
  }


  editeResume() {

    this.editingResume = new ResumeData();
    this.editingResume.id = this.logged_in_id;
    this.editingResume.profileImage = this.profileCreationForm.value.profileImage;
    this.editingResume.firstName = this.profileCreationForm.value.firstName;
    this.editingResume.lastName = this.profileCreationForm.value.lastName;
    this.editingResume.email = this.profileCreationForm.value.email;
    this.editingResume.mobile = this.profileCreationForm.value.mobile;
    this.editingResume.whatsApp = this.profileCreationForm.value.whatsApp;
    this.editingResume.lineOne = this.profileCreationForm.value.lineOne;
    this.editingResume.lineTwo = this.profileCreationForm.value.lineTwo;
    this.editingResume.streetName = this.profileCreationForm.value.streetName;
    this.editingResume.state = this.profileCreationForm.value.state;
    this.editingResume.country = this.profileCreationForm.value.country;
    this.editingResume.zipCode = this.profileCreationForm.value.zipCode;
    this.editingResume.collegeName = this.profileCreationForm.value.collegeName;
    this.editingResume.courseName = this.profileCreationForm.value.courseName;
    this.editingResume.graduationYear = this.profileCreationForm.value.graduationYear;
    this.editingResume.certificationName = this.profileCreationForm.value.certificationName;
    this.editingResume.courseModules = this.profileCreationForm.value.courseModules;
    this.editingResume.certifedYear = this.profileCreationForm.value.certifedYear;
    this.editingResume.companyName = this.profileCreationForm.value.companyName;
    this.editingResume.jobRole = this.profileCreationForm.value.jobRole;
    this.editingResume.duration = this.profileCreationForm.value.duration;
    this.editingResume.dateOfJoining = this.profileCreationForm.value.dateOfJoining;
    this.editingResume.dateOfLeaving = this.profileCreationForm.value.dateOfLeaving;
    this.editingResume.noticePeriod = this.profileCreationForm.value.noticePeriod;
    this.editingResume.declaration = this.profileCreationForm.value.declaration;

    this.resumeService.updateResume(this.logged_in_id, this.editingResume).subscribe(response => {
      alert('You modified the resume!')
    },
    err => {
      alert('Failed in Editing The Cv!!')
    })
    console.log(this.profileCreationForm.value)
    window.location.reload()
    this.router.navigate(['home']);
  }

}
