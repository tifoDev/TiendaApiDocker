import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StoreService } from "../../../services/store.service";

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html",
  styles: [],
})
export class CartComponent {
  public constructor(public storeSvc: StoreService, public router: Router) {}

  checkout() {
    this.router.navigate(["/checkout"], { queryParamsHandling: "preserve" });
  }
}
