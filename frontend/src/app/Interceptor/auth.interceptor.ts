import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();
    debugger;
    if (authToken) {
      // Clone the request and add the JWT token to the Authorization header - SG
      const authReq = authToken
        ? req.clone({
            setHeaders: {
              Authorization: `Bearer ${authToken}`,
            },
          })
        : req;
      return next.handle(authReq);
    }

    // If no token is present, just pass the request  -SG
    return next.handle(req);
  }
}
