import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getAll(): string {
        return 'List all Products!';
    }
    @Get(':id')
    getSingle(@Param() params): string{
        return `Returns product data for ${params.id}`
    }

    @Post()
    create(@Body() product): string {
        console.log(product)
        return 'Created Product'
    }
    @Put()
    update(@Body() product): string {
        console.log(product)
        return 'Updated Product'
    }

    @Delete(':id')
    delete(@Param() params): string {
        return `Deleted Product: ${params.id}`
    }
}
