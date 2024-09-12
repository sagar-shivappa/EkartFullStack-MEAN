import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms"; // Import FormsModule
import { of, throwError } from "rxjs";

import { HttpService } from "src/app/services/http-service.service";
import { HeaderComponent } from "../header/header.component";
import { LoginComponent } from "./login.component";
import { Router } from "@angular/router";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpService: HttpService;
  let router: jasmine.SpyObj<Router>;
  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, HeaderComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule, // Add FormsModule here
      ],
      providers: [HttpService, { provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    httpService = TestBed.inject(HttpService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should login successfully and navigate to products page", () => {
    const mockResponse = "Login successful";
    const userName = "test";
    const password = "test";

    spyOn(httpService, "login").and.returnValue(of(mockResponse));
    component.username = userName;
    component.password = password;
    component.onSubmit();
    expect(httpService.login).toHaveBeenCalledWith(userName, password);
    expect(router.navigate).toHaveBeenCalledWith(["product"]);
  });
  it("should login successfully and navigate to products page", () => {
    const userName = "test";
    const password = "test";

    spyOn(httpService, "login").and.returnValue(
      throwError({ error: { message: "Invalid Credentials" } })
    );

    component.username = userName;
    component.password = password;
    component.onSubmit();
    expect(httpService.login).toHaveBeenCalledWith(userName, password);
    expect(router.navigate).not.toHaveBeenCalledWith(["product"]);
  });
});
