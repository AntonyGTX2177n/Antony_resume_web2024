import { Component, OnInit } from '@angular/core';
import { ResumeData } from '../resume-data-model';
import { ResumeService } from '../resume.service';
import { AuthorizationService } from 'src/app/user-access/authorization.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-resume',
  templateUrl: './view-resume.component.html',
  styleUrls: ['./view-resume.component.css']
})
export class ViewResumeComponent implements OnInit {

  viewResume: any;
  logged_in_id: any;
  logged_in_userName: any;
  deleting_id: any;
  openEdit = false;
  openDelete = false;


  constructor(
    private resumeService: ResumeService,
    private authService: AuthorizationService,
  ) { }

  ngOnInit(): void {
    this.loadData()
    this.resumeService.getById(this.logged_in_id).subscribe(response => {
      const manualEntry = [
        {
          firstName: response.firstName,
          lastName: response.lastName,
          proFileImage: response.proFileImage,
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
          declaration: response.declaration
        }
      ]
      this.viewResume = manualEntry;
      this.deleting_id = response.id;
      
      console.log(this.viewResume);
      alert('resume is Available to view');
    },
    error => {
      alert('no resume available')
    })
  }

  loadData(){
    let dataOne = localStorage.getItem('userName');
    let dataTwo = localStorage.getItem('userId');

    this.logged_in_userName = dataOne
    this.logged_in_id = dataTwo
  }

  ondelete(){
    this.resumeService.deleteResume(this.logged_in_id).subscribe(deleteResponse => {
      alert('your data in resume is deleted')
      window.location.reload()
    }, err => {
      alert('failed in deleting')
      window.location.reload()
    })
  }
  openEditPage() {
    this.openEdit = true
  }

  openDeletePage(){
    this.openDelete = true;
  }

  onCancel() {
    window.location.reload();
  }

}
