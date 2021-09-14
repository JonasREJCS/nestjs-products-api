import { AuthModule } from './core/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { RedisModule } from './core/cache/redis.module';
import { ProductModule } from './modules/product/product.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './modules/product/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './core/config/typeorm.config';
import { UserController } from './modules/user/user.controller';
import { AuthController } from './core/auth/auth.controller';
@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    RedisModule,
    ProductModule,],
  controllers: [
    ProductsController,
    UserController,
    AuthController,
    AppController],
  providers: [
    AppService],
})
export class AppModule { }
