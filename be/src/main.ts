import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: ['http://localhost:3000'], // TODO: 本番URLを追加
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  })
  await app.listen(8000)
}
bootstrap()
