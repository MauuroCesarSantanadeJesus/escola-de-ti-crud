import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagemModule } from './imagem/imagem.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ImagemModule,
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/image'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
