import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
	  "https://nazarstarenchenko.github.io/form-test-react",
    ],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
