import {Component, Input} from "@angular/core";
import {Profile} from "./profile.model";

@Component({
  selector: "profile-list",
  templateUrl: "./profile-list.component.html",
})
export class ProfileListComponent {
  @Input() profiles: ReadonlyArray<Profile> = [];
}
