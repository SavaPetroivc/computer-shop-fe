import { Component, Input } from "@angular/core";

@Component({
  selector: "app-navigate-link",
  templateUrl: "./navigate-link.component.html",
  styleUrls: ["./navigate-link.component.scss"],
})
export class NavigateLinkComponent {
  @Input({ required: true }) text: string = "";
  @Input({ required: true }) route: string = "";
   isActivated: boolean = false;
}
