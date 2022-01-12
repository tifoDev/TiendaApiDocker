import { Routes } from '@angular/router';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { ShopComponent } from './views/shop/shop.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'checkout', component: CheckoutComponent }
];
