import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl + "/posts";

@Injectable({
	providedIn: 'root'
})
export class AuthorizationService {

	// apiUrl = "http://localhost:3000/posts";

	private isAuthenticated = false;

	constructor(
		private http: HttpClient,
		private router: Router
	) { }

	getIsAuth() {
		return this.isAuthenticated;
	}



	GetAll() {
		this.isAuthenticated = true;
		return this.http.get(BACKEND_URL);
	}

	// GetByCode(code: any){
	// 	return this.http.get( BACKEND_URL+’/’+code );
	// }

	ProcedRegistration(inputData: any) {
		return this.http.post(BACKEND_URL, inputData);
	}

	logout() {
		localStorage.clear()
		this.router.navigate(['login'])
	}


	// UpdateRegistration(code: any, inputData: any) {
	// 	return this.http.put(BACKEND_URL+’/’+code, inputData);
	// }

}
