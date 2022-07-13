import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://cccivtjc:7XyNymMUGluUQ_vt1EXgjZ0ZsWc-BgN5@chimpanzee.rmq.cloudamqp.com/cccivtjc',
      ],
      queue: 'price_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.listen();
}
bootstrap();
