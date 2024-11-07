import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  //Paste URL of Live Prview of Port:8001 below
  //  apiUrl: string = environment.apiUrl
  apiUrl: string = environment.apiUrl;
  message$ = new BehaviorSubject("");

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    //complete the http request
    return of("");
  }
  addToCart(userId: number, product_id: number): Observable<Object> {
    //complete the http request
    return of("");
  }
  deleteFromCart(userId: number, product_id: number): Observable<Object> {
    //complete the http request
    return of("");
  }

  cartByUserId(userId: number): Observable<any> {
    //complete the http request
    return of("");
  }

  getProducts(): Observable<any> {
    //complete the http request
    return of("");
  }

  setMessenger(message: any) {
    return of("");
  }
}
