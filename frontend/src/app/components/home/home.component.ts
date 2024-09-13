import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { HttpService } from "src/app/services/http-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  items: any = [];
  cartButton = "Add to Cart";
  navigationButtoName = "Go to Cart";

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    //complete the function
  }

  addProductToCart(prodId: any) {
    //complete the function
  }
}
