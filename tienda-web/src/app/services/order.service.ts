import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}
  
  public checkoutOrder(order) {
    order.orderNumber = Math.random().toString(36).substring(2, 8);
    order.orderDate = new Date();
    return this.http.post(environment.orderApi + "/api/orders", order);
  }
}
