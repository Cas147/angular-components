import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShopingCart: Product[] = []
  total: number = 0
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: "https://picsum.photos/200"
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: "https://picsum.photos/200"
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: "https://picsum.photos/200"
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: "https://picsum.photos/200"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product) {
    console.log("product", product)
    this.myShopingCart.push(product)
    this.total += this.myShopingCart.reduce((sum, item) => sum + item.price, 0)
  }

}
