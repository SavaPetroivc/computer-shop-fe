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
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { adminProductReducer } from "./store/product/reducers/admin-product.reducer";
import { ProductEffect } from "./store/product/product.effect";
import { AllProductsComponent } from "./components/all-products/all-products.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { clientProductReducer } from "./store/product/reducers/product.reducer";
import { CartOverviewComponent } from "./components/cart-overview/cart-overview.component";
import { CartWrapperComponent } from "./components/cart-wrapper/cart-wrapper.component";
import { OrderDeliveryComponent } from "./components/order-delivery/order-delivery.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { orderAdminReducer } from "./store/order/order-admin.reducer";
import { OrderEffect } from "./store/order/order.effect";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    AllProductsComponent,
    CartOverviewComponent,
    CartWrapperComponent,
    OrderDeliveryComponent,
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
    MatSidenavModule,
    StoreModule.forRoot(
      {
        adminProducts: adminProductReducer,
        clientProducts: clientProductReducer,
        adminOrders: orderAdminReducer,
      },
      {},
    ),
    EffectsModule.forRoot([ProductEffect, OrderEffect]),
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
