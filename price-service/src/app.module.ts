import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PriceModule } from './price/price.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      //'mongodb+srv://sickfit:tOXGjuc5EpEHnq85@cluster0.0uqqo.mongodb.net/test',
      process.env.MONGO_DB,
      {
        autoCreate: true,
      },
    ),
    PriceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
