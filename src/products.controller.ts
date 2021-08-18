import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService ) {}

    products: Product[] = [
        new Product("BOOK1", "Book For Yourself", 90.99),
        new Product("BOOK2", "Learning NestJS", 90.99),
        new Product("BOOK3", "Lady Gaga Bio", 90.99),
    ]

    @Get()
    getAll(): Product[] {
        return this.productsService.getAll();
    }
    @Get(':id')
    getSingle(@Param() params): Product {
        return this.productsService.getOne(params.id)
    }

    @Post()
    create(@Body() product: Product): void {
        this.productsService.create(product)
    }

    @Put()
    update(@Body() product: Product): Product {
        return this.productsService.update(product)
    }

    @Delete(':id')
    delete(@Param() params): void {
        this.productsService.delete(params.id)
    }
}
