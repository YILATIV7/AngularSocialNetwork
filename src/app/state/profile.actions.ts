import {createActionGroup, props} from "@ngrx/store";
import {Profile} from "../profile-list/profile.model";

export const ProfileAPIActions = createActionGroup({
  source: 'Profile API',
  events: {
    'Retrieved Profile List': props<{profiles: ReadonlyArray<Profile>}>()
  }
});
