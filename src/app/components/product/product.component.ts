import {Component, OnInit} from '@angular/core';
import {ProductRepresentation} from "../../services/models/product-representation";
import {ProductService} from "../../services/products/product.service";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    NgForOf
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Array<ProductRepresentation> = [];

  constructor(
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    this.service.getAllProductsWithLimit()
      .subscribe({
        next: (result) => {
          this.products = result
        }
      })
  }

}
