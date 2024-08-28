import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input()
  navigationButtoName: string = "";

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  goToButton() {
    if (this.navigationButtoName == "Go to Cart!")
      this.router.navigate(["cart"]);
    else this.router.navigate(["product"]);
  }
  logout() {
    this.authService.logout();
  }
}
