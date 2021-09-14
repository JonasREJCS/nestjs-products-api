import { RedisService } from './redis.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [
        RedisService,],
        exports: [RedisService]
})
export class RedisModule { }
