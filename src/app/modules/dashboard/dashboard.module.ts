import { APP_INITIALIZER, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { NavigateLinkComponent } from "./components/navigate-link/navigate-link.component";
import { ProductsOverviewComponent } from "./components/products-overview/products-overview.component";
import { getUserInfoInitializer } from "./initializer/get-user-info.initializer";
import { UserService } from "../../services/user.service";
import { CurrentUserService } from "../../services/current-user.service";
import { ProductsOverviewTableComponent } from "./components/products-overview/products-overview-table/products-overview-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { ProductCreateFormComponent } from "./components/products-overview/product-create-form/product-create-form.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { OrderOverviewComponent } from './components/order-overview/order-overview.component';
import { OrderOverviewDialogComponent } from './components/order-overview/order-overview-dialog/order-overview-dialog.component';
import { UsersOverviewComponent } from './components/users-overview/users-overview.component';
import { UserTableComponent } from './components/users-overview/user-table/user-table.component';
import { CreateUserFormComponent } from './components/users-overview/create-user-form/create-user-form.component';
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { ActivateComponent } from './components/activate/activate.component';

@NgModule({
  declarations: [
    NavigateLinkComponent,
    ProductsOverviewComponent,
    ProductsOverviewTableComponent,
    ProductCreateFormComponent,
    OrderOverviewComponent,
    OrderOverviewDialogComponent,
    UsersOverviewComponent,
    UserTableComponent,
    CreateUserFormComponent,
    ActivateComponent,
  ],
  exports: [NavigateLinkComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule
  ],
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
