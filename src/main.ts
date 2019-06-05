import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const appOptions = {};
  const app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix('api');
  app.enableCors({
    // origin: ‘http://localhost:4200’
    // origin?: boolean | string | RegExp | (string | RegExp)[] | CustomOrigin;
    // methods?: string | string[];
    // allowedHeaders?: string | string[];
    // exposedHeaders?: string | string[];
    // credentials?: boolean;
    // maxAge?: number;
    // preflightContinue?: boolean;
    // optionsSuccessStatus?: number;
  });
  // TEST CHANGE as Feature
  const swaggerOptions = new DocumentBuilder()
    .setTitle('NestJS Test Example App')
    .setDescription('The TeamWiz API description')
    .setVersion('0.1')
    .setBasePath('api')
    .addBearerAuth()
    .setSchemes('https')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('/api/docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port, function() {
    console.log('API is listening on port ' + port);
  });
}
bootstrap();
