import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";
import { HttpService } from "./http-service.service";

describe("AuthService", () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, HttpService],
    });
    service = TestBed.inject(AuthService);
    httpService = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
    expect(httpService).toBeTruthy();
  });

  xit("should fetch data", () => {
    const mockData = {
      message: "User Not found",
    };

    httpService.login("random", "randompwd").subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}`);
    expect(req.request.method).toBe("POST");
    req.flush(mockData);
  });

  it("should set token", () => {
    service.setToken("user1", "token123", 1);
    expect(localStorage.getItem("token")).toBe("token123");
    expect(localStorage.getItem("user_name")).toBe("user1");
    expect(localStorage.getItem("user_id")).toBe("1");
  });

  it("should get token", () => {
    localStorage.setItem("token", "token123");
    expect(service.getToken()).toBe("token123");
  });

  it("should get user id", () => {
    localStorage.setItem("user_id", "1");
    expect(service.getUserId()).toBe(1);
  });

  it("should get user name", () => {
    localStorage.setItem("user_name", "user1");
    expect(service.getUserName()).toBe("user1");
  });

  it("should clear token on logout", async () => {
    await service.logout();
    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("user_name")).toBeNull();
  });
});
