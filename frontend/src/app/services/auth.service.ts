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
    const expirationTime = new Date().getTime() + 3600000; // 1 hour in milliseconds
    localStorage.setItem("token", token);
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("user_id", user_id);
    localStorage.setItem("expirationTime", expirationTime.toString());
  }

  getToken(): string {
    const returnValue = localStorage.getItem("token");
    return returnValue != null ? returnValue : "";
  }

  getUserId(): number {
    const id = localStorage.getItem("user_id");
    const a: string = id != null ? id : "0";
    const returnValue = parseInt(a);
    return returnValue != null ? returnValue : 0;
  }

  getUserName(): string {
    const returnValue = localStorage.getItem("user_name");
    return returnValue != null ? returnValue : "";
  }

  logout(): void {
    // Clear token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_id");
    localStorage.removeItem("expirationTime");
  }
}
