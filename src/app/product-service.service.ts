import { Injectable } from '@angular/core';
import { product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  productlist: Array<product>;

  constructor() {
    this.productlist = new Array<product>();
    let obj1 = new product(1,"MacBook","assets/images/3.jpg","Laptop",80000);
    let obj2 = new product(2,"MotoRola","assets/images/1.jpg","Smart Phone",10000);
    let obj3 = new product(3,"Sony","assets/images/2.jpg","Camera",40000);
    let obj4 = new product(4,"Samsung","assets/images/4.jpg","Smart Phone",75000);
    let obj5 = new product(5,"Xiaomi Mi 5","assets/images/5.jpg","Smart Phone",30000);

    this.productlist.push(obj1);
    this.productlist.push(obj2);
    this.productlist.push(obj3);
    this.productlist.push(obj4);
    this.productlist.push(obj5);
   }

   getData(){
    return this.productlist;
   }
}
