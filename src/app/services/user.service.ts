import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
//import { UserInfo } from 'os';
import { Observable, throwError } from 'rxjs';
import {BackendService} from '../services/backend.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  _items = [];

  constructor(private http: HttpClient,private becall:BackendService) {
  }

  getAllUsers(): Observable<any> {



    return this.http.get('api/User');

    //let headers =    {headers: {'Access-Control-Allow-Origin':'*','header2':'value2'}}

    //let url = window.location.protocol + '//' + window.location.hostname + ':49993/'+'api/User';
    //return this.http.get(url,headers);

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
