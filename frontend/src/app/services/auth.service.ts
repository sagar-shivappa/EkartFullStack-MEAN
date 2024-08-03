import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import * as jwt from 'jsonwebtoken';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private tokenKey = "auth_token";
  private expirationTime = "";

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, {
      user_name: username,
      password: password,
    });
  }

  setToken(user_name: any, token: any, user_id: any) {
    this.tokenKey = token;
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

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) {
      return true;
    }
    const exp = +this.expirationTime;
    if (!exp) {
      return true;
    }
    return exp * 1000 < Date.now();
  }

  logout(): void {
    // Clear token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user_name");
  }
}
