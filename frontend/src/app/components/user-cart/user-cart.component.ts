import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { HttpService } from "src/app/services/http-service.service";

@Component({
  selector: "app-user-cart",
  templateUrl: "./user-cart.component.html",
  styleUrls: ["./user-cart.component.scss"],
})
export class UserCartComponent implements OnInit {
  cartItems: any = [];
  cartButton: string = "Delete from cart";
  navigationButtoName: string = "Home";

  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  getCartItems() {
    //complete the function to get all the cart items
  }

  removeItem(prodId: any) {
    // complete the function to remove the selected item from the cart and display the remaining items
  }
}
