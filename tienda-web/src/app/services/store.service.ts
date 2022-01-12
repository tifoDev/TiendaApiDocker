import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class StoreService {
  public products = [];
  public order;

  constructor(private http: HttpClient) {}

  setUserData(data) {
    if (!this.order) {
      this.order = new Object();
      this.order.CustomerId = data;
    }
  }

  public addProductToOrder(product) {
    if (!this.order.items) {
      this.order.items = [];
    }

    let it = this.order.items.find((el) => el.productId == product.id);

    if (it) {
      it.quantity++;
    } else {
      let item = {
        productId: product.id,
        productTitle: product.title,
        productArtId: product.artId,
        unitPrice: product.price,
        quantity: 1,
        productCategory: product.category,
      };

      this.order.items.push(item);
    }

    this.order.subtotal = this.order.items.reduce((tot, val) => {
      return tot + val.unitPrice * val.quantity;
    }, 0);
  }
}
