import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductsOverviewComponent } from "./components/products-overview/products-overview.component";
import { authGuard } from "./guards/auth.guard";
import { protectedGuard } from "./guards/protected.guard";
import { OrderOverviewComponent } from "./components/order-overview/order-overview.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "products",
        canActivate: [
          protectedGuard(["ADMINISTRATOR", "WAREHOUSE_ADMINISTRATOR"]),
        ],
        component: ProductsOverviewComponent,
      },
      {
        path: "orders",
        canActivate: [
          protectedGuard(["ADMINISTRATOR", "WAREHOUSE_ADMINISTRATOR"]),
        ],
        component: OrderOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
