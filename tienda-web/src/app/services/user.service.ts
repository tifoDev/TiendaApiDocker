import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public signin(data) {
    return this.http.post(environment.userApi+"/api/signin", data);
  }

  public signup(data) {
    return this.http.post(environment.userApi+"/api/signup", data);
  }

}
