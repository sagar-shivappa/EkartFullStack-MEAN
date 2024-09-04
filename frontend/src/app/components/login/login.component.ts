import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { HttpService } from "src/app/services/http-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(
    private authService: AuthService,
    private router: Router,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    //complete the login functionality
  }
}
