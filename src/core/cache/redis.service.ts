/*
https://docs.nestjs.com/providers#services
*/
// eslint-disable-next-line @typescript-eslint/no-var-requires
const redis = require('async-redis')
import { Injectable } from '@nestjs/common';
import { REDIS_CONFIG } from '../config';

@Injectable()
export class RedisService {
    private redisDB;
  
    constructor() {
      const redisConfigs = {
        host: REDIS_CONFIG.url,
        port: REDIS_CONFIG.port, 
        db: REDIS_CONFIG.redisdb
    }

    const redisClient = redis.createClient(redisConfigs)

    return redisClient
    }
  
    public async get(key: any): Promise<any> {
      return await this.redisDB.get(key);
    }
  
    public async set(key: any, value: any): Promise<any> {
      return await this.redisDB.set(key, value);
    }

    public async keys(pattern: any): Promise<any> {
      return await this.redisDB.keys(pattern);
    }
}

    
