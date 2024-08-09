import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseConfig } from './config/database.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const dbConfig = app.get(DatabaseConfig);
  const sequelize = dbConfig.getSequelizeConfig();
  await sequelize.sync(); // Sync models with database

  await app.listen(3000);
}
bootstrap();