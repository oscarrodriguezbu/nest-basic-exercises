import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes( // pipes globales, este se ejecuta en todos los endpoints
    new ValidationPipe({
      whitelist: true, // solo deja la data que estoy esperando
      forbidNonWhitelisted: true, // genera error si hay data extra que no estoy esperando
    }),
  )


  await app.listen(3000);
}
bootstrap();
