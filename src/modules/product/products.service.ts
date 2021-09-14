/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    products: Product[] =  [
        new Product("BOOK1", "Book For Yourself", 90.99),
        new Product("BOOK2", "Learning NestJS", 90.99),
        new Product("BOOK3", "Lady Gaga Bio", 90.99),
    ]

    getAll(): Product[] {
        return this.products
    }

    getOne(id: number): Product {
        return this.products.find((item) => item.id === id)
    }

    update(product: Product): Product {
        return product
    }

    create(product: Product): void {
        this.products.push(product)
    }

    delete(id: number): void {
        this.products = this.products.filter((item) => item.id !== id)
    }
}
