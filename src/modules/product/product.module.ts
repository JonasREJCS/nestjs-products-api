/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { RedisModule } from '../../core/cache/redis.module';
import { ProductsService } from './products.service';

@Module({
    imports: [RedisModule],
    controllers: [],
    providers: [ProductsService],
    exports: [ProductsService]
})
export class ProductModule { }
