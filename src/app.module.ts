import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    ProductsController,
    AppController],
  providers: [
    ProductsService, AppService],
})
export class AppModule { }
