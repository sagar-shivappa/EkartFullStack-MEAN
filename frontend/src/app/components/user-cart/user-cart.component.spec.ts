import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { HttpService } from "src/app/services/http-service.service";
import { UserCartComponent } from "./user-cart.component";
import { HeaderComponent } from "../header/header.component";

describe("UserCartComponent", () => {
  let component: UserCartComponent;
  let fixture: ComponentFixture<UserCartComponent>;
  let httpService: HttpService;
  let authService: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCartComponent, HeaderComponent],
      imports: [HttpClientTestingModule],
      providers: [HttpService, AuthService],
    }).compileComponents(); // create a fake app.module.ts for that particular Component - SG

    fixture = TestBed.createComponent(UserCartComponent);
    component = fixture.componentInstance;
    httpService = TestBed.inject(HttpService);
    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); // inject testbed for all services required - SG
  });

  it("should call getCartItems and populate cartItems", () => {
    const mockCartData = {
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

    spyOn(authService, "getUserId").and.returnValue(1);
    spyOn(httpService, "cartByUserId").and.returnValue(of(mockCartData));

    component.getCartItems();

    expect(httpService.cartByUserId).toHaveBeenCalledWith(1);
    expect(component.cartItems).toEqual(mockCartData.products);
  });
});
