import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductsOverviewComponent } from "./components/products-overview/products-overview.component";
import { authGuard } from "./guards/auth.guard";
import { protectedGuard } from "./guards/protected.guard";
import { OrderOverviewComponent } from "./components/order-overview/order-overview.component";
import { RoleEnum } from "../../shared/enum/role.enum";
import { UsersOverviewComponent } from "./components/users-overview/users-overview.component";
import { ActivateComponent } from "./components/activate/activate.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: "activate", component: ActivateComponent },
      {
        path: "products",
        canActivate: [
          protectedGuard([
            RoleEnum.ADMINISTRATOR,
            RoleEnum.WAREHOUSE_ADMINISTRATOR,
          ]),
        ],
        component: ProductsOverviewComponent,
      },
      {
        path: "orders",
        component: OrderOverviewComponent,
        canActivate: [
          protectedGuard([
            RoleEnum.ADMINISTRATOR,
            RoleEnum.WAREHOUSE_ADMINISTRATOR,
            RoleEnum.USER,
          ]),
        ],
      },
      {
        path: "users",
        canActivate: [protectedGuard([RoleEnum.ADMINISTRATOR])],
        component: UsersOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
