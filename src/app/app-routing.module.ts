import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "user",
    component: UserListComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
