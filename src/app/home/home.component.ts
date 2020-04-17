import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }
  showAdd: boolean = false;
  showUser: boolean = false;

  ngOnInit(): void {


    const mode = this.route.snapshot.paramMap.get('mode');

    if(mode==='displayuser')
    {
      this.showDisplayUser();
    }
    else if(mode==='adduser')
    {
      this.showAddUser();
    }

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
