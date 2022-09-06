import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  items: Array<product> = [];
  subject = new Subject<Array<product>>();
  constructor() {
    // let obj1 = new product(1,"MacBook","assets/images/3.jpg","Laptop",80000);
    // this.items.push(obj1);
  }


  addToCart(list: Array<product>){
    // this.items.push(obj);
    this.items = list;
    console.log(this.items);
    this.subject.next(list);
    // this.getItems();
  }

  getItems() : Observable<Array<product>>{
    console.log(this.items);
    return this.subject.asObservable();
  }

  // clearCart(){
  //   this.items = [];
  // }

}
