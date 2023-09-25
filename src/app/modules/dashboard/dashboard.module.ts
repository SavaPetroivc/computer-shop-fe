import { APP_INITIALIZER, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { NavigateLinkComponent } from "./components/navigate-link/navigate-link.component";
import { ProductsOverviewComponent } from "./components/products-overview/products-overview.component";
import { getUserInfoInitializer } from "./initializer/get-user-info.initializer";
import { UserService } from "../../services/user.service";
import { CurrentUserService } from "../../services/current-user.service";

@NgModule({
  declarations: [NavigateLinkComponent, ProductsOverviewComponent],
  exports: [NavigateLinkComponent],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: getUserInfoInitializer,
      deps: [UserService, CurrentUserService],
      multi: true,
    },
  ],
})
export class DashboardModule {}
