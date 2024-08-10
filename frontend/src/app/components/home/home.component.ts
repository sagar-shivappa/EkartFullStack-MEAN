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
  items = [
    {
      product_id: 1,
      product_name: "Item 1",
      product_description: "Description of item 1",
      price: 19.99,
      image: "https://via.placeholder.com/150",
      discount_percentage: "5",
    },
  ];
  cardButton = "Add to cart!";
  navigationButtoName = "Go to Cart!";

  constructor(
    private httpSer: HttpService,
    private authSer: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initFun();
  }

  initFun() {
    this.httpSer.getProducts().subscribe(
      (res) => {
        this.items = res;
      },
      (err) => {
        alert(`Something went wrong, please try again!`);
        this.router.navigate(['/login']);
      }
    );
  }

  cardButtonClicked(prodId: any) {
    this.httpSer.addToCart(this.authSer.getUserId(), prodId).subscribe((res:any) => {
      alert(res.message);
    },
      (err) => {
        console.log("err ", err)
        if (typeof err.error === "object") {
          alert(err.error.message);
        } else {
          alert(err.error);
        }
      }
    );
  }
}
