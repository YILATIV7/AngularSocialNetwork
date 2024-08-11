import {createFeatureSelector} from "@ngrx/store";
import {Profile} from "../profile-list/profile.model";

export const selectProfiles
  = createFeatureSelector<ReadonlyArray<Profile>>('profiles');
