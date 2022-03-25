import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import entities from '../database/entities/index';

export default class DatabaseConfig implements TypeOrmOptionsFactory
{
    public constructor(private configService: ConfigService) {}

    public createTypeOrmOptions(): TypeOrmModuleOptions
    {
        const {
            DB_CONNECTION,
            DB_HOST,
            DB_PORT,
            DB_USERNAME,
            DB_PASSWORD,
            DB_NAME,
            DB_SYNC
        } = process.env;

        return {
            type: DB_CONNECTION,
            host: DB_HOST,
            port: DB_PORT,
            username: DB_USERNAME,
            password: DB_PASSWORD,
            database: DB_NAME,
            entities: entities,
            synchronize: DB_SYNC
        };
    }
}