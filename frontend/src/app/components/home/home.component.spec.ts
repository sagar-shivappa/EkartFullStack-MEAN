import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { HttpService } from "src/app/services/http-service.service";
import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpService: HttpService;
  let authService: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent],
      imports: [HttpClientTestingModule],
      providers: [HttpService, AuthService],
    }).compileComponents(); // create a fake app.module.ts for that particular Component - SG

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    httpService = TestBed.inject(HttpService);
    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); // inject testbed for all services required - SG
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  }); // Default test case for creatation - SG

  it("should call getItems on ngOnInit and update items", () => {
    const mockProducts = [
      {
        product_id: 1,
        product_name: "Product 1",
        product_description: "Description",
        price: 10,
        image: "",
        discount_percentage: "10",
      },
    ]; // mock model for final response - SG

    spyOn(httpService, "getProducts").and.returnValue(of(mockProducts));
    component.getItems();

    expect(httpService.getProducts).toHaveBeenCalled();
    expect(component.items).toEqual(mockProducts);
  });

  it("should call addProductToCart and handle the response", () => {
    const userId = 1;
    const productId = 1;
    const mockResponse = { message: "Product added to cart!" };

    spyOn(authService, "getUserId").and.returnValue(userId);
    spyOn(httpService, "addToCart").and.returnValue(of(mockResponse));
    spyOn(window, "alert"); // Mock window alert

    component.addProductToCart(productId);

    expect(httpService.addToCart).toHaveBeenCalledWith(userId, productId);
    expect(window.alert).toHaveBeenCalledWith(mockResponse.message);
  });
});
