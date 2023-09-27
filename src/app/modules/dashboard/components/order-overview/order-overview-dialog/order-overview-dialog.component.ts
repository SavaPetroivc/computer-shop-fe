import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { OrderGet } from "../../../../../shared/dto/order/order-get.model";

@Component({
  selector: "app-order-overview-dialog",
  templateUrl: "./order-overview-dialog.component.html",
  styleUrls: ["./order-overview-dialog.component.scss"],
})
export class OrderOverviewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public orderInfo: OrderGet) {}
}
