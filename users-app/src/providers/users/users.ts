import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient) {
  }

  getAllUsers(results: number) {
    return this.http.get(`https://randomuser.me/api/?results=${results}`);
  }

}
