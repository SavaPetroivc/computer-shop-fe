import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { StateModel } from "../../../../../store/model/state.model";
import { User } from "../../../../../shared/dto/user/user.model";
import { getUsers } from "../../../../../store/user/user.action";
import { selectAllUsers } from "../../../../../store/user/user.selector";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.scss"],
})
export class UserTableComponent implements OnInit {
  @Output() onUserEdit = new EventEmitter<User>();
  users$: Observable<User[]> = this.store.select(selectAllUsers);
  displayedColumns: string[] = ["name", "username", "email", "phone", "role"];

  constructor(private store: Store<StateModel>) {}

  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }
}
