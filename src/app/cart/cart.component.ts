import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';
import { product } from '../product/product';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [{provide: AddToCartService,useClass: AddToCartService}]
})
export class CartComponent implements OnInit {;

  items: Array<product> = [];
  constructor(
    private cartService: AddToCartService
  ) {}



  ngOnInit(): void {
    this.cartService.getItems()
    .subscribe(obj =>{
      this.items = obj;
      console.log(obj);
    })
  }

  delete(id:number){
    for(var i=0; i < this.items.length; i++){
      if(this.items[i].id == id){
        this.items.splice(i,1);
      }
    }
  }




}
