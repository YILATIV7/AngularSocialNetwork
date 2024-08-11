import {Component, OnInit} from '@angular/core';
import {selectProfiles} from "./state/profile.selectors";
import {Store} from "@ngrx/store";
import {ProfileService} from "./profile-list/profile.service";
import {ProfileAPIActions} from "./state/profile.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularSocialNetwork';

  profiles$;

  constructor(private profileService: ProfileService, private store: Store) {
    this.profiles$ = this.store.select(selectProfiles);
  }

  ngOnInit() {
    this.profileService
      .getProfiles()
      .subscribe((profiles) =>
        this.store.dispatch(ProfileAPIActions.retrievedProfileList({profiles}))
      );
  }
}
