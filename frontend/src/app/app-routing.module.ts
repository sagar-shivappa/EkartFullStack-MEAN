import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UserCartComponent } from "./components/home/user-cart/user-cart.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./gaurd/auth.guard";

const routes: Routes = [
  { path: "product", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "cart", component: UserCartComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  {
    path: "**",
    component: HomeComponent,
    canActivate: [AuthGuard],
    redirectTo: "login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
