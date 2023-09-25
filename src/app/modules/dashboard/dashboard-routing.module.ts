import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductComponent } from "../../components/product/product.component";
import { ProductsOverviewComponent } from "./components/products-overview/products-overview.component";
import { authGuard } from "./guards/auth.guard";
import { protectedGuard } from "./guards/protected.guard";

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
