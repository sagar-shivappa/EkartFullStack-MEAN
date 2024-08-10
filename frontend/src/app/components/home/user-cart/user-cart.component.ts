import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { HttpService } from "src/app/services/http-service.service";

@Component({
  selector: "app-user-cart",
  templateUrl: "./user-cart.component.html",
  styleUrls: ["./user-cart.component.scss"],
})
export class UserCartComponent implements OnInit {
  cartItems: any = {
    _id: "66a3730d4fdf1d6001533c93",
    user_id: 1,
    products: [
      {
        product_name: "Sample",
        product_id: 123,
        product_description: "Sports Running Shoes",
        price: 456,
        discount_percentage: 5,
        image: "13000",
        product_brand: "PumA",
      },
    ],
    createdAt: "2024-07-26T09:57:33.616Z",
    updatedAt: "2024-07-26T09:57:33.616Z",
    __v: 0,
  };
  cardButton: string = "Delete from cart";
  navigationButtoName: string = "Home";

  constructor(private httpSer: HttpService, private authSer: AuthService) {}

  ngOnInit(): void {
    this.initFun();
  }

  initFun() {
    this.httpSer.cartByUserId(this.authSer.getUserId()).subscribe((res) => {
      this.cartItems = res;
    });
  }

  async cardButtonClicked(prodId: any) {
    this.httpSer
      .deleteFromCart(this.authSer.getUserId(), prodId)
      .subscribe((res:any) => {
        alert(res.message);
      },
      err=>{
        console.log(err)
        if((typeof err.error) === 'object' ){
          alert(err.error.message);
        }
        else{
          alert(err.error);
        }
      });
       setTimeout(async () => {
        await this.initFun();
      }, 100);
    
  }
}
