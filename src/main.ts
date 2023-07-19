import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // 去掉多餘的傳入物件
      whitelist: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
