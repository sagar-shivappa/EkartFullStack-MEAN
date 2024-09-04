import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { AuthService } from "src/app/services/auth.service";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let httpService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj(AuthService, ["logout"]);
    const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy }, // Mock the HttpService
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    httpService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should call the logout method", () => {
    component.logout();
    expect(httpService.logout).toHaveBeenCalled();
  });
  it("should navigate to cart when the navigationButtoName is Add to Cart", () => {
    component.navigationButtoName = "Go to Cart";
    component.goToButton();
    expect(router.navigate).toHaveBeenCalledWith(["cart"]);
  });
  it("should navigate to cart when the navigationButtoName is Home", () => {
    component.navigationButtoName = "Home";
    component.goToButton();
    expect(router.navigate).toHaveBeenCalledWith(["product"]);
  });
});
