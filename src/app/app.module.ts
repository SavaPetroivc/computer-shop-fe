import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { SignupComponent } from "./components/signup/signup.component";
import { DashboardComponent } from "./modules/dashboard/components/dashboard/dashboard.component";
import { ProductComponent } from "./components/product/product.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProductComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    DashboardModule,
    MatSidenavModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
