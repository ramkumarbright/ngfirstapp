import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  showAdd: boolean = false;
  showUser: boolean = false;

  ngOnInit(): void {
  }

 

  showAddUser() {
    this.showUser = false;
    this.showAdd = !this.showAdd;
  }

  showDisplayUser() {
    this.showAdd = false;
    this.showUser = !this.showUser;
  }

}
