import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Profile} from "./profile.model";

@Injectable({providedIn:'root'})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfiles(): Observable<Array<Profile>> {
    return this.http
      .get<{data:Profile[]}>(
      'https://reqres.in/api/users?page=1'
      )
      .pipe(map((profiles) => profiles.data || []));
  }
}
