import { Component } from "@angular/core";
import { ProductsService } from "../../../../services/products.service";
import { MatDialog } from "@angular/material/dialog";
import { ProductCreateFormComponent } from "./product-create-form/product-create-form.component";
import { Product } from "../../../../shared/dto/product";

@Component({
  selector: "app-products-overview",
  templateUrl: "./products-overview.component.html",
  styleUrls: ["./products-overview.component.scss"],
})
export class ProductsOverviewComponent {
  constructor(private dialog: MatDialog) {}

  openCreateForm(product?: Product) {
    this.dialog.open(ProductCreateFormComponent, {
      position: { right: "0" },
      width: "20%",
      height: "100vh",
      data: product,
    });
  }
}
