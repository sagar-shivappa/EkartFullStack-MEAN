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

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.httpService
      .cartByUserId(this.authService.getUserId())
      .subscribe((res) => {
        this.cartItems = res.products;
      });
  }

  removeItem(prodId: any) {
    this.httpService
      .deleteFromCart(this.authService.getUserId(), prodId)
      .subscribe(
        (res: any) => {
          alert(res.message);
        },
        (err) => {
          alert(err.error.message);
        }
      );
    setTimeout(() => {
      this.getCartItems();
    }, 100);
  }
}
