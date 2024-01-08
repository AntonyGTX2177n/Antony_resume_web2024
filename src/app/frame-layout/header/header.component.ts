import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/user-access/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged_in_userName: any;
  logged_in_password: any;
  logged_in_id: any;

  constructor(
    private service: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  backFunction(){
    this.service.logout()
  }

  loadData(){
    let dataOne = localStorage.getItem('userName');
    let dataTwo = localStorage.getItem('userId');
    let dataThree = localStorage.getItem('password');

    this.logged_in_userName = dataOne
    this.logged_in_password = dataThree
    this.logged_in_id = dataTwo
  }

}
