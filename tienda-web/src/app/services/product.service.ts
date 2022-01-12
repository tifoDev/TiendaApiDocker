import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<[]>(environment.productApi + "/api/products");
  }
}
