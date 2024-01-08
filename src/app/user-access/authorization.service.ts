import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthorizationService {

	apiUrl = "http://localhost:3000/posts";

	constructor(
		private http: HttpClient,
		private router: Router
	) { }


	GetAll() {
		return this.http.get(this.apiUrl);
	}

	// GetByCode(code: any){
	// 	return this.http.get( this.apiUrl+’/’+code );
	// }

	ProcedRegistration(inputData: any) {
		return this.http.post(this.apiUrl, inputData);
	}

	logout() {
		localStorage.clear()
		this.router.navigate(['login'])
	}


	// UpdateRegistration(code: any, inputData: any) {
	// 	return this.http.put(this.apiUrl+’/’+code, inputData);
	// }

}
