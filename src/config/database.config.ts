import { Sequelize } from 'sequelize-typescript';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfig {
  constructor(private configService: ConfigService) {}

  getSequelizeConfig(): Sequelize {
    return new Sequelize({
      dialect: 'mysql',
      host: this.configService.get<string>('localhost'),
      database: this.configService.get<string>('products'),
      username: this.configService.get<string>('root'),
      password: this.configService.get<string>(''),
      models: [__dirname + './src/product/products.model.ts'],
    });
  }
}