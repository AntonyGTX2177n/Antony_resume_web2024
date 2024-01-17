import { Injectable } from '@angular/core';
import { ResumeData } from './resume-data-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl + "/resume";

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  // apiUrl = "http://localhost:3000/resume";
  private isAuthenticated = false;

  constructor(
    private http: HttpClient,
  ) { }

  getIsAuth() {
		return this.isAuthenticated;
	}

  postResume(resumeInput: any) 
  {
    this.isAuthenticated = true;
    return this.http.post<any>(BACKEND_URL, resumeInput).pipe(
      map((response: any) => {
        return response
      }
    ))
  };

  //--posting using formData
  // postResume(
  //   id: string,
  //   profileImage: File,
  //   firstName: string,
  //   lastName: string,
  //   email: string,
  //   mobile: string,
  //   whatsApp: string,
  //   lineOne: string,
  //   lineTwo: string,
  //   streetName: string,
  //   state: string,
  //   country: string,
  //   zipCode: string,
  //   collegeName: string,
  //   courseName: string,
  //   graduationYear: string,
  //   certificationName: string,
  //   courseModules: string,
  //   certifedYear: string,
  //   companyName: string,
  //   jobRole: string,
  //   duration: string,
  //   dateOfJoining: string,
  //   dateOfLeaving: string,
  //   noticePeriod: string,
  //   declaration: string
  // ){
  //   const postData = new FormData();
  //   postData.append('id', id)
  //   postData.append("profileImage", profileImage, firstName);
  //   postData.append("firstName", firstName);
  //   postData.append("lastName", lastName);
  //   postData.append("email", email);
  //   postData.append("mobile", mobile);
  //   postData.append("whatsApp", whatsApp);
  //   postData.append("lineOne", lineOne);
  //   postData.append("lineTwo", lineTwo);
  //   postData.append("state", state);
  //   postData.append("country", country);
  //   postData.append("zipCode", zipCode);
  //   postData.append("collegeName", collegeName);
  //   postData.append("courseName", courseName);
  //   postData.append("graduationYear", graduationYear);
  //   postData.append("certificationName", certificationName);
  //   postData.append("courseModules", courseModules);
  //   postData.append("certifedYear", certifedYear);
  //   postData.append("companyName", companyName);
  //   postData.append("jobRole", jobRole);
  //   postData.append("duration", duration);
  //   postData.append("dateOfJoining", dateOfJoining);
  //   postData.append("dateOfLeaving", dateOfLeaving);
  //   postData.append("noticePeriod", noticePeriod);
  //   postData.append("declaration", declaration);

  //   this.http.post<{post: any}>(this.apiUrl, postData).subscribe(response => {
  //     console.log(response)
  //   })
  // }

  getAll() {
    this.isAuthenticated = true;
    return this.http.get<any>(BACKEND_URL).pipe(map((response: any) => {
      return response
    }));
  }

  getById(id: string) {
    this.isAuthenticated = true;
    return this.http.get<any>(BACKEND_URL+'/'+id).pipe(
      map((response: any) => {
        return response
      })
    );
  }

  updateResume(id: string, resumeInput: any) {
    this.isAuthenticated = true;
    return this.http.put<any>(BACKEND_URL+'/'+id, resumeInput).pipe(
      map((response: any) => {
        return response
      })
    );
  }

  deleteResume(id: any) {
    this.isAuthenticated = true;
   return this.http.delete(BACKEND_URL+'/'+id)
  }
}
