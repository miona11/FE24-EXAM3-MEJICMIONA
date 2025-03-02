import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   private cartItems: Product[] = [];

    addToCart(product:Product){

      const existingItem = this.cartItems.find((p)=>p.id == product.id);
      if(existingItem){
        existingItem.quantity++;
        return;
      }else{
      this.cartItems.push(product);
}
      

    }
    getCart(){
      return this.cartItems;
    }
    getTotal(){
      return this.cartItems.reduce((acu, current)=> acu +=current.price * current.quantity, 0);
    }
    increaseQuantity(product: Product) {
      const item = this.cartItems.find((p) => p.id === product.id);
      if (item) {
        item.quantity++;
      }
    }
  
    decreaseQuantity(product: Product) {
      const item = this.cartItems.find((p) => p.id === product.id);
      if (item) {
        item.quantity--;
        if (item.quantity === 0) {
          this.removeFromCart(product);
        }
      }
    }
  
    removeFromCart(product: Product) {
      this.cartItems = this.cartItems.filter((p) => p.id !== product.id);
    }
}