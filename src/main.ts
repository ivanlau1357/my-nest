import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerDocumentConfig = new DocumentBuilder()
    .setTitle('Api Doc')
    .setDescription('The Backend API description')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerDocumentConfig,
    {
      ignoreGlobalPrefix: false,
    },
  );

  SwaggerModule.setup('api-doc', app, swaggerDocument);
  await app.listen(3000);
}
bootstrap();
