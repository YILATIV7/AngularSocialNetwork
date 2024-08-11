import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfileListComponent} from "./profile-list/profile-list.component";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {profilesReducer} from "./state/profile.reducers";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({profiles: profilesReducer}),
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
