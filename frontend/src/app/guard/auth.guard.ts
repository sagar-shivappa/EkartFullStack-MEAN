import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return true; // comment this for application working
    let token = this.authService.getToken();
    let finToken = token === "" ? null : token;

    if (finToken != null) {
      return true;
    } else {
      alert("Please Login");
      this.router.navigate(["/login"]); // Redirect to login page if not authenticated - SG
      return false;
    }
  }
}
