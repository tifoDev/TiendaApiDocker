import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { StoreService } from "./services/store.service";
import { ProductListComponent } from "./views/shop/product-list/product-list.component";
import { CartComponent } from "./views/shop/cart/cart.component";
import { ShopComponent } from "./views/shop/shop.component";
import { CheckoutComponent } from "./views/checkout/checkout.component";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./routing";
import { LoginComponent } from "./views/user/login/login.component";
import { RegisterComponent } from "./views/user/register/register.component";
import { FormsModule } from "@angular/forms";
import { ProductService } from "./services/product.service";
import { OrderService } from "./services/order.service";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ShopComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [StoreService, UserService, ProductService, OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
