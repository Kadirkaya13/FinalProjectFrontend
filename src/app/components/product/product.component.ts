import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: string = 'northwind';
  user: string = 'kadir kaya';
  product1: any = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5 ,unitInStock:5 };
  product2: any = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 };
  product3: any = { productId: 3, productName: 'Mouse', categoryId: 1, unitPrice: 5 };
  product4: any = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5 };
  product5: any = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5 };

  products:Product[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}