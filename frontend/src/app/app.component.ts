import { Component, OnInit } from "@angular/core";
import { HttpService } from "./services/http-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "ekart-app";
  message$: any = "";
  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.message$ = this.httpService.message$;
  }
}
