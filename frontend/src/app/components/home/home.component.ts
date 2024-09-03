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
    this.httpService.getProducts().subscribe(
      (res) => {
        this.items = res;
      },
      (err) => {
        alert(`Something went wrong, please try again!`);
        this.router.navigate(["/login"]);
      }
    );
  }

  addProductToCart(prodId: any) {
    this.httpService.addToCart(this.authService.getUserId(), prodId).subscribe(
      (res: any) => {
        alert(res.message);
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
