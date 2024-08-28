import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  //Paste URL of Live Prview of Port:8001 below
  //  apiUrl: string = environment.apiUrl
  apiUrl: string = "http://localhost:8002";

  constructor(private http: HttpClient) {}

  addToCart(userId: number, product_id: number): Observable<string> {
    let url = `${this.apiUrl}`;
    return this.http.post<any>(`${url}/cart`, {
      user_id: userId,
      product_id: product_id,
    });
  }
  deleteFromCart(userId: number, product_id: number): Observable<string> {
    let url = `${this.apiUrl}`;
    return this.http.delete<any>(`${url}/cart/${userId}/${product_id}`);
  }

  cartByUserId(userId: number): Observable<any> {
    let url = `${this.apiUrl}`;
    return this.http.get<any>(`${url}/cart/${userId}`);
  }

  getProducts() {
    let url = `${this.apiUrl}`;
    return this.http.get<any>(`${url}/products`);
  }
}
