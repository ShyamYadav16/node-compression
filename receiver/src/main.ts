import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  // Log only warning and error messages to avoid copying application logs to file.
  const app = await NestFactory.create(AppModule, {logger: ['warn', 'error']});
  const config = new DocumentBuilder()
    .setTitle('Receiver API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
