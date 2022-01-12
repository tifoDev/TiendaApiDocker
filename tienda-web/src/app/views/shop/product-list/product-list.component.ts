import { HttpClient } from "@angular/common/http";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { map } from "rxjs";
import { ProductService } from "src/app/services/product.service";
import { StoreService } from "../../../services/store.service";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  public constructor(
    public prodSvc: ProductService,
    public storeSvc: StoreService
  ) {}

  ngOnInit() {
    this.prodSvc.getProducts().subscribe({
      next: (res) => {
        this.storeSvc.products = res;
      },
    });
  }

  addToOrder(product) {
    this.storeSvc.addProductToOrder(product);
  }
}
