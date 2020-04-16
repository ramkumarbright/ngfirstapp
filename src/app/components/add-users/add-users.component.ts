import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';
import {PasswordMatch} from 'src/app/validators/password.validator';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})



export class AddUsersComponent implements OnInit {

  userForm: FormGroup;
  @Input() mydata: String;
  _user: User;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  


  constructor(private _userService: UserService, private formBuilder: FormBuilder,
     private toastr: ToastrService ) {

        }


  get fval() {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    
    this.createUserForm();
  }

  clear() {
    this.submitted = false;
    this.createUserForm();
  }
  onSave() {

    console.log('submit invoked');

    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    console.log('submit validation passed');
    
    
    this._userService.addUser(this.userForm.value).subscribe(res => {
      if (!res) {
        this.clear();

        this.toastr.success('New user Added successfully', 'User Creation!',
          { timeOut: 2000 });
      }
    });    
  }

  createUserForm() {
    this.userForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,Validators.pattern(this.mobNumberPattern)]],
      pwd: ['', Validators.required],
      cpwd: ['', Validators.required]
    },
    {validator: PasswordMatch('pwd', 'cpwd',"Password Mustmatch")}
  );
  } 
}
