import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { PRODUCTS } from '../product';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    const id = this.route.snapshot.params['id'];
    this.product = PRODUCTS.find((p) => p.id == id);
    console.log(this.product);
  }
  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

