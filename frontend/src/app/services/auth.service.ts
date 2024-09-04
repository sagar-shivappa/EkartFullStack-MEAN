import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import * as jwt from 'jsonwebtoken';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private expirationTime = "";

  constructor(private http: HttpClient) {}

  setToken(user_name: any, token: any, user_id: any) {
    //complete the function to set the values in the local stoarge
  }

  getToken(): string {
    //complete the function to return the token
    return "dummy";
  }

  getUserId(): number {
    //complete the function to return the user id
    return 0;
  }

  getUserName(): string {
    //complete the function to return the user name
    return "dummy";
  }

  logout(): void {
    // Clear token from local storage
  }
}
