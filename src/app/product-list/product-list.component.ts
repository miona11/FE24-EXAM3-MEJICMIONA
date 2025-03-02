import { Component } from '@angular/core';
import { Product } from '../product.model';
import { PRODUCTS } from '../product';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:Product[] = PRODUCTS;
  constructor(private cartService:CartService){}

  onAddToCart(product:Product){
    this.cartService.addToCart(product);
  }
}
