import { Component } from "@angular/core";
import { ProductsService } from "../../../../../services/products.service";
import { Observable } from "rxjs";
import { Product } from "../../../../../shared/dto/product";

@Component({
  selector: "app-products-overview-table",
  templateUrl: "./products-overview-table.component.html",
  styleUrls: ["./products-overview-table.component.scss"],
})
export class ProductsOverviewTableComponent {
  products$: Observable<Product[]> = this.productsService.getProductsAdmin();
  displayedColumns: string[] = ["name", "price", "quantity", "action"];
  constructor(private productsService: ProductsService) {}
}
