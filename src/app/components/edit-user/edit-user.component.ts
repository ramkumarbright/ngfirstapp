import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';
import {PasswordMatch} from 'src/app/validators/password.validator';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  @Input() mydata: String;
  _user: User;
  submitted = false;
  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  


  constructor(private _userService: UserService, private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
   private route: ActivatedRoute) { }

  get fval() {
    return this.userForm.controls;
  }


  loadUser(){

    const id = this.route.snapshot.paramMap.get('id');

    if(id) {     
    
      this._userService.getUser(+id).subscribe(res => {

      if (res && res.Error) {
        this.toastr.error('Unable to load data', 'Error while processing',
          { timeOut: 2000 });
        return;
      }
      this.editUserForm(res.Response[0]);

    });

    }
  }


  ngOnInit(): void {
    this.loadUser();   
  }

  cancel(){

    this.router.navigate(['/home/displayuser'])
  }


  clear() {
    this.submitted = false;
    this.loadUser();
  }

  editUserForm(userData:User) {

    this.userForm = this.formBuilder.group({
      fName: [userData.FirstName, Validators.required],
      lName: [userData.LastName, Validators.required],
      email: [userData.Email, [Validators.required, Validators.email]],
      phone: [userData.Phone, [Validators.required,Validators.pattern(this.mobNumberPattern)]]     
    }
  );
  }


  onSave() {

    console.log('submit invoked');

    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    
    this._userService.addUser(this.userForm.value).subscribe(res => {
      if (!res) {
        this.clear();

        this.toastr.success('New user Added successfully', 'User Creation!',
          { timeOut: 2000 });
      }
    });    
  }
}
