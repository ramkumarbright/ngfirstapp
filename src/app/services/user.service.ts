import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
//import { UserInfo } from 'os';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _items = [];

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<any> {
    return this.http.get('api/User');
  }

  getUser(userid:Number): Observable<any> {
    return this.http.get('api/User/'+userid);
  }

  addUser(data: User) {
    if (data) {
      return this.http.post('api/user', this.mapUser(data));
    }
  }

  editUser(data: User) {
    if (data) {
      return this.http.post('api/user', this.mapUser(data));
    }
  }



  mapUser(data) {

    var us = new User();
    us.Email = data.email;
    us.FirstName = data.fName;
    us.LastName = data.lName;
    us.Phone = data.phone;
    us.Password = data.pwd;
    return { Payload: us };
  }

}
