import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomeComponent } from "./components/home/home.component";
import { AllProductsComponent } from "./components/all-products/all-products.component";
import { guestGuard } from "./guards/guest.guard";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [guestGuard],
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [guestGuard],
  },
  {
    path: "products",
    component: AllProductsComponent,
  },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
