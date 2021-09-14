/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const REQUIRED_ENV_VARS = [
    'REDIS_URL',
    'REDIS_DB',
    'REDIS_PORT',
]

export function validateEnvVars(): void {
    REQUIRED_ENV_VARS.forEach((envVar) => {
        const val = process.env[envVar];
        if (val === '' || val === null || val === undefined) {
            throw new Error(`Required ENV VAR not set: ${envVar}`);
        }
    });
}

const { env } = process;


export class REDIS_CONFIG {
    static readonly url = env.REDIS_URL
    static readonly port = env.REDIS_PORT
    static readonly pass = env.REDIS_PASS
    static readonly redisdb = parseInt(env.REDIS_DB)
}