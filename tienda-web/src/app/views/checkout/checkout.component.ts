import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { OrderService } from "src/app/services/order.service";
import { StoreService } from "../../services/store.service";

@Component({
  selector: "checkout",
  templateUrl: "checkout.component.html",
  styleUrls: ["checkout.component.css"],
})
export class CheckoutComponent {
  constructor(
    public storeSvc: StoreService,
    public orderSvc: OrderService,
    private router: Router
  ) {}

  onCheckout() {
    // TODO
    this.orderSvc.checkoutOrder(this.storeSvc.order).subscribe({
      next: (res) => {
        this.storeSvc.order = {CustomerId: this.storeSvc.order.CustomerId};
        alert("Se guardó la orden correctamente.");
        this.router.navigate(["/shop"]);
      },
      error: (err) => {
        alert("Ocurrió un error al guardar la orden");
      },
    });
  }
}
