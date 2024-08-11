import {Profile} from "../profile-list/profile.model";
import {createReducer, on} from "@ngrx/store";
import {ProfileAPIActions} from "./profile.actions";

export const initialState: ReadonlyArray<Profile> = [];

export const profilesReducer = createReducer(
  initialState,
  on(ProfileAPIActions.retrievedProfileList, (_state, {profiles}) => profiles)
);
