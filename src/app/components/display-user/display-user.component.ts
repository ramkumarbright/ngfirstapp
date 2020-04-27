import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs/';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  users : User[]; //Observable<any[]>;

  constructor(private _userService: UserService, private toastr: ToastrService,private router: Router) {
  }


  edituser(userid:Number){

    this.router.navigate(['/edituser', userid]);

  }

 
  ngOnInit(): void {

    //debugger;
    this._userService.getAllUsers().subscribe(res => {

      debugger;

     // this.users = users;



      if (res && res.Error) {
        this.toastr.error('Unable to load data', 'Error while processing',
          { timeOut: 2000 });
        return;
      }

      this.users = res.Response;
      
    },error=>{
           
      console.log(error);

    });

  }

}
