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

  constructor() {}

  ngOnInit(): void {}

  goToButton() {
    //complete the function
  }
  logout() {
    //complete the logout function
  }
}
