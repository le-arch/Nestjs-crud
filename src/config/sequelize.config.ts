import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3000,
  username: 'root', // or your MySQL username
  password: '', // or your MySQL password
  database: 'products', // or your database name
  autoLoadModels: true,
  synchronize: true,
};
