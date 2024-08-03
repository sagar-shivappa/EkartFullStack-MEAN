import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(["/product"]), alert("Login successful");
        this.authService.setToken(
          this.username,
          response.token,
          response.user_id
        );
        // Redirect or perform other actions after successful login
      },
      (error) => {
        alert(`Login failed: ${error}`);
        // Handle login error (show error message, etc.)
      }
    );
  }
}
