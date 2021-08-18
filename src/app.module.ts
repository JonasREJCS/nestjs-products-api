import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    ProductsController,
     AppController],
  providers: [AppService],
})
export class AppModule { }