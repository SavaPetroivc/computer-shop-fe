import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Product } from "../../../../../shared/dto/product";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { StateModel } from "../../../../../store/model/state.model";
import { User } from "../../../../../shared/dto/user/user.model";
import { getUsers } from "../../../../../store/user/user.action";
import { MatDialog } from "@angular/material/dialog";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.scss"],
})
export class UserTableComponent implements OnInit {
  @Output() onUserEdit = new EventEmitter<Product>();
  users$: Observable<User[]> = this.store.select((state) => state.users.users);
  displayedColumns: string[] = ["name", "price", "quantity", "lot"];

  constructor(
    private store: Store<StateModel>,
    private dialog: MatDialog,
  ) {}


  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }
}
