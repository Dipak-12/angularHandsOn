import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';
import { ProductServiceService } from '../product-service.service';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [{provide: ProductServiceService, useClass: ProductServiceService},
  {provide: AddToCartService, useClass: AddToCartService}]
})
export class ProductComponent implements OnInit {

  productlist: Array<product>;
  cartlist: Array<product> = [];
  constructor(data: ProductServiceService,private cartService: AddToCartService) {
    this.productlist = data.getData();
  }



  ngOnInit(): void {
    console.log(this.productlist);
  }

  addToCart(obj: product){
    this.cartlist.push(obj);
    console.log(this.cartlist);
    this.cartService.addToCart(this.cartlist);
  }



}
