import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products:Product[];
  total:number;
  serviceFee: number = 0;
  discount: number = 0;
  finalTotal: number = 0;
  constructor(private cartService:CartService){
    this.products = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    this.updateCart();
  }
  updateCart() {
    this.products = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    this.serviceFee = this.total * 0.10;
    this.discount = this.total > 40 ? (this.total * 0.15) : 0; 
    this.finalTotal = this.total + this.serviceFee - this.discount;
  }

  increaseQuantity(product: Product) {
    this.cartService.increaseQuantity(product);
    this.updateCart();
  }

  decreaseQuantity(product: Product) {
    this.cartService.decreaseQuantity(product);
    this.updateCart();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.updateCart();
  }
}

